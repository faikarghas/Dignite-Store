import {useState} from 'react'
import Link from 'next/link'
import { TextField, Grid, Button } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import {useFormik } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'

const formLogin = ({authenticate,email_info,pass_info,closeLoginHandler,signUpHandler}) => {
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)

    const showPassHandler = () => {
        setShowPass(!showPass)
    }

    const formik = useFormik({
        initialValues: {
          email:'',
          password:'',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Sorry, that is not a valid email address')
                .required('Cannot be left blank'),
            password: Yup.string()
                .required('Cannot be left blank')
        }),
        onSubmit: (values,{setFieldError}) => {
            // login berhasil
            setLoading(true)
            authenticate(values.email,values.password,window.location.origin).then(res=>{
                if (res) {
                    setLoading(false)
                    closeLoginHandler()
                } else {
                    setLoading(false)
                }
            })
        },
      });

    return (
        <Grid item xs={12} md={6} className="box_userlogin-right p-0">
            <div className="sign_header">
                <h3>Sign Into Your Account</h3>
                <img onClick={closeLoginHandler} className="top-right" src="/image/Close.png" />
            </div>
            <div className="sign_auth">
               <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} style={{paddingBottom:0}}>
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
                        <Grid item xs={12} md={12} style={{paddingTop:0}}>
                            <p className="password_error">
                                {email_info}
                            </p>
                        </Grid>
                        <Grid item container xs={12} md={12} style={{paddingBottom:0}}>
                            <Grid item xs={10} md={10}>
                                <TextField
                                    required
                                    error={formik.errors.password && formik.touched.password ? true : null}
                                    name="password"
                                    variant="outlined"
                                    type={showPass ? 'text' : 'password'}
                                    fullWidth
                                    id="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange} value={formik.values.password}
                                    className="pass_input border-right-0"
                                />
                            </Grid>
                            <Grid item xs={2} md={2}>
                                <div className="show_pass" onClick={showPassHandler}><p>Show</p></div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} style={{paddingTop:0}}>
                            <p className="password_error">
                                {pass_info}
                            </p>
                        </Grid>
                        <Grid item xs={12} md={12} style={{display:'flex',justifyContent:'flex-end',paddingTop:0}}>
                            <Link href="/forget-password" ><a style={{margin:0}} className="forget-password">Forget password?</a></Link>
                        </Grid>
                        <Grid item xs={12} md={12} className="button_wrapper">
                            <Button variant="outlined" color="primary" type="submit" disabled={loading} >
                                Sign In
                            </Button>
                            {loading && <CircularProgress size={24} className="buttonProgress" />}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div className="sign_footer">
                <p>New to Creative Market? <span onClick={signUpHandler}>Sign Up!</span></p>
            </div>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        switchForm: state.auth.switchForm,
        email_info: state.auth.login_email_info,
        pass_info: state.auth.login_password_info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (email,password,issuer) => dispatch(action.authenticate(email,password,issuer)),
        signUpHandler: (email,password) => dispatch(action.switchFormHandler(true)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(formLogin)
