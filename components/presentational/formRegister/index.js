import { TextField, Grid, Button } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import {useState} from 'react'
import {useFormik } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'

const formRegister = ({register,switchFormHandler,closeLoginHandler}) => {
    const [passwordMatch , setPasswordMatch] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false);

    const showPassHandler = () => {
        setShowPass(!showPass)
    }

    const formik = useFormik({
        initialValues: {
          firstname:'',
          lastname:'',
        //   username: '',
          email:'',
          password:'',
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Cannot be left blank').min(3, 'Must be 3 characters or less'),
            lastname: Yup.string().required('Cannot be left blank').min(3, 'Must be 3 characters or less'),
            // username: Yup.string().required('Cannot be left blank').min(6, 'Must be 6 characters or less'),
            email: Yup.string()
                .email('Sorry, that is not a valid email address')
                .required('Cannot be left blank'),
            password: Yup.string()
                .required('Cannot be left blank')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])(?=.{8,}$)/,
                `Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character`
                ),
        }),
        onSubmit: (values,{setFieldError}) => {
            const data = {
                firstname: values.firstname,
                lastname: values.lastname,
                username: values.firstname,
                email: values.email,
                password: values.password,
            }
            // cek email sudah terdaftar
            setLoading(true)
            register(data).then(res=>{
                if(res === true){
                    // tampilkan notif
                    setFieldError("email", "Email is already used");
                    setLoading(false)
                } else {
                    // regis sukses
                    setLoading(false)
                    switchFormHandler()

                    // reset form
                }
            })

        },
      });

    return (
        <Grid item xs={12} md={6} className="no-gutters box_userlogin-right p-0">
            <div className="sign_header">
                <h3>Sign Into Your Account</h3>
                <img onClick={closeLoginHandler} className="top-right" src="/image/Close.png" />
            </div>
            <div className="sign_auth">
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                error={formik.errors.firstname && formik.touched.firstname ? true : null}
                                helperText={formik.errors.firstname && formik.touched.firstname ? formik.errors.firstname : null}
                                autoComplete="fname"
                                name="firstname"
                                variant="outlined"
                                fullWidth
                                id="firstname"
                                placeholder="First Name"
                                autoFocus
                                onChange={formik.handleChange} value={formik.values.firstname || ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                error={formik.errors.lastname && formik.touched.lastname ? true : null}
                                helperText={formik.errors.lastname && formik.touched.lastname ? formik.errors.lastname : null}
                                autoComplete="lname"
                                name="lastname"
                                variant="outlined"
                                fullWidth
                                id="lastname"
                                placeholder="Last Name"
                                onChange={formik.handleChange} value={formik.values.lastname}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                error={formik.errors.email && formik.touched.email ? true : null}
                                helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                                name="email"
                                variant="outlined"
                                fullWidth
                                id="email"
                                placeholder="Email"
                                onChange={formik.handleChange} value={formik.values.email}
                            />
                        </Grid>
                        <Grid item container xs={12} style={{paddingBottom:0}}>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    error={formik.errors.password && formik.touched.password ? true : null}
                                    // helperText={formik.errors.password && formik.touched.password ? formik.errors.password : null}
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
                            <Grid item xs={2}>
                                <div className="show_pass" onClick={showPassHandler}><p>Show</p></div>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} style={{paddingTop:0}}>
                            <p className="password_error">
                                {formik.errors.password && formik.touched.password ? formik.errors.password : null}
                            </p>
                        </Grid>
                        <Grid item xs={12} className="button_wrapper">
                            <Button variant="outlined" color="primary" type="submit" disabled={loading} >
                                Sign Up
                            </Button>
                            {loading && <CircularProgress size={24} className="buttonProgress" />}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div className="sign_footer">
                <p>Already a member? <span onClick={switchFormHandler}> Sign in Here</span></p>
            </div>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        email_dp: state.auth.emailDuplicate
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        register : (dataReg) => dispatch(action.register(dataReg)),
        switchFormHandler: (bool) => dispatch(action.switchFormHandler(false))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(formRegister)


