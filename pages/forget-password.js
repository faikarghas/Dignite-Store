import {useState} from 'react'
import Link from 'next/link'
import { TextField, Grid, Button } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import {useFormik } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux'
import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap'

const formForgetPass = ({email_info}) => {
    const [loading, setLoading] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [showNotif, setShowNotif] = useState('')

    const formik = useFormik({
        initialValues: {
          email:''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Sorry, that is not a valid email address')
                .required('Cannot be left blank'),
        }),
        onSubmit: (values,{setFieldError}) => {
            setLoading(true)
            setIsActive(true)

            _resetPassword(values.email).then(notif=>{
                console.log(notif)
                setLoading(false)
                setShowNotif('notif_init')
                setIsActive(false)
                setTimeout(() => {
                    setShowNotif('')
                }, 4000);
            })
        },
    });

    const _resetPassword = (email) =>{

        let rp = new Promise(function (resolve,reject) {
            fetch('https://apistore.dignite.studio/api/resetPassword',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email: email,
                })
            }).then(res=>{
               return res.json()
            }).then(data=>{
                let messageFromServer = data.messageFromServer
                let dateExpire = data.dateEx
                resolve({messageFromServer,dateExpire})
            })
        })

        return rp

    }


    return (
        <React.Fragment>
            <div style={{padding:'2rem',backgroundColor:'#454afc',color:'white',textAlign:'center'}}><h2 style={{fontSize:'2.8rem'}}>Forget Password</h2></div>
            <div className={`modal_notification ${showNotif}`}><p>Silahkan cek email anda</p></div>
            <Grid item xs={12} md={12} className="box_userlogin-right">
                <div className="forget_password">
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{paddingBottom:0}}>
                                <TextField
                                    required
                                    error={formik.errors.email && formik.touched.email ? true : null}
                                    helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    placeholder="Email"
                                    autoFocus
                                    onChange={formik.handleChange} value={formik.values.email}
                                />
                            </Grid>
                            {email_info &&
                                <Grid item container xs={12} style={{paddingTop:0}}>
                                    <p className="password_error"> {email_info} </p>
                                </Grid>
                            }
                            <Grid item xs={12} className="button_wrapper">
                                <Button  variant="outlined" color="primary" type="submit" disabled={isActive} >
                                    {!loading ? 'Reset' : <CircularProgress size={24} className="buttonProgress" />}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
            <footer>
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
                    <Col xs={6} className="copyright"><p>© 2019 Dignite Store. All Rights Reserved.</p></Col>
                    <Col xs={6} className="copyright" style={{justifyContent:'flex-end'}}>
                        <ul>
                            <li className="pr-5"><p>Secure Payment:</p></li>
                            <li><img alt="logo-midtrans" src="/image/midtrans.png"/></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        email_info: state.auth.login_email_info,
    }
  }

const mapDispatchToProps = dispatch => {
    return { }
}

export default connect(mapStateToProps,mapDispatchToProps)(formForgetPass)

