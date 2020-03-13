import React, {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { TextField, Grid, Button } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import {useFormik } from 'formik'
import * as Yup from 'yup';
import fetch from 'isomorphic-unfetch'


function Reset({idusers,message}) {
    const [showNotif, setShowNotif] = useState('')
    const [loading, setLoading] = useState(false)


    const formik = useFormik({
        initialValues: {
            newPassword:''
        },
        validationSchema: Yup.object({
            newPassword: Yup.string()
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])(?=.{8,}$)/,
                `Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character`
                )
        }),
        onSubmit: (values,{setFieldError}) => {
            setLoading(true)
            _updatePassword(values.newPassword).then(notif=>{
                console.log(notif);
                if (notif.messageFromServer === 'ok') {
                    setLoading(false)
                    setShowNotif('notif_init')
                    setTimeout(() => {
                        setShowNotif('')
                    }, 2000);
                    setTimeout(() => {
                        Router.push('/home')
                    }, 3000);
                }
            })
        },
    });

    const _updatePassword = (newpass) =>{

        let rp = new Promise(function (resolve,reject) {
            fetch('https://apistore.dignite.studio/api/updatePassword',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    newpass,
                    idusers
                })
            }).then(res=>{
               return res.json()
            }).then(data=>{
                let messageFromServer = data.messageFromServer
                resolve({messageFromServer})
            })
        })

        return rp

    }

    return (
        <React.Fragment>
            <div style={{padding:'2rem',backgroundColor:'#454afc',color:'white',textAlign:'center'}}><h2 style={{fontSize:'2.8rem'}}>Update Password</h2></div>
            <div className={`modal_notification ${showNotif}`}><p>Password anda berhasil diubah</p></div>
            <Grid item xs={12} md={12} className="box_userlogin-right">
                {message === 'expired' ?
                <div className="link_expired">
                    <p>This link is expired</p>
                    <Link href="/home"><a>Home</a></Link>
                </div>
                :
                <div className="forget_password">
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{paddingBottom:0}}>
                                <TextField
                                    required
                                    error={formik.errors.newPassword && formik.touched.newPassword ? true : null}
                                    // helperText={formik.errors.newPassword && formik.touched.newPassword ? formik.errors.newPassword : null}
                                    name="newPassword"
                                    variant="outlined"
                                    fullWidth
                                    id="newPassword"
                                    placeholder="New Password"
                                    autoFocus
                                    onChange={formik.handleChange} value={formik.values.newPassword}
                                    type="password"
                                />
                            </Grid>
                            <Grid item container xs={12} style={{paddingTop:0}}>
                                <p className="password_error">
                                    {formik.errors.newPassword && formik.touched.newPassword ? formik.errors.newPassword : null}
                                </p>
                            </Grid>
                            <Grid item xs={12} className="button_wrapper">
                                <Button  variant="outlined" color="primary" type="submit" disabled={loading} >
                                    {!loading ? 'Reset' : <CircularProgress size={24} className="buttonProgress" />}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                }
            </Grid>
            {/* <footer>
                <Container>
                    <Row>
                        <Col xs={6} md={3} className="footerlink">
                            <ul>
                                <li><Link href="/about"><a>About</a></Link></li>
                                <li><Link href="/contact"><a>Contact</a></Link></li>
                                <li><Link href="/account"><a>Account</a></Link></li>
                            </ul>
                        </Col>
                        <Col xs={6} md={3} className="footerlink">
                            <ul>
                                <li><Link href="/terms"><a>Licensing & Terms</a></Link></li>
                                <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                                <li><Link href="/privacy-policy"><a>Partnership</a></Link></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} className="footerlink sosmed_footer">
                            <ul style={{overflow:'auto'}}>
                                <li style={{float:'',color:'#707070'}}>Follow Us</li>
                                <li><img alt="logo-sosmed" src="/image/SocialIcons/twitter.png"/></li>
                                <li><img alt="logo-sosmed" src="/image/SocialIcons/instagram.png"/></li>
                                <li><img alt="logo-sosmed" src="/image/SocialIcons/fb.png"/></li>
                            </ul>
                        </Col>
                        <Col xs={6} className="copyright">
                        <p>© 2019 Dignite Store. All Rights Reserved.</p>
                        </Col>
                        <Col xs={6} className="copyright" style={{justifyContent:'flex-end'}}>
                            <ul>
                                <li className="pr-5"><p>Secure Payment:</p></li>
                                <li><img alt="logo-midtrans" src="/image/midtrans.png"/></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer> */}
        </React.Fragment>
    )
}

Reset.getInitialProps = async (ctx) => {
    const {reset} = ctx.query
    const dataToken = await fetch(`http://localhost:3007/api/verifyTokenResetPassword/${reset}`)
    const dataTokenRes = await dataToken.json()
    const idusers = dataTokenRes.user
    const message = dataTokenRes.message

    console.log(dataTokenRes,'reset');
    // cek expire token

    // update password baru
    return {idusers,message}
}

export default Reset
