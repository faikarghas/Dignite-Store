import {useState} from 'react'
import { TextField, Grid, Button } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import {useFormik } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'

const formForgetPass = ({authenticate,email_info,pass_info,closeLoginHandler}) => {
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)

    const showPassHandler = () => {
        setShowPass(!showPass)
    }

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

        },
      });

    return (
        <Grid item xs={12} md={6} className="box_userlogin-right">
            <div className="sign_header">
                <h3>Reset Password</h3>
                <img onClick={closeLoginHandler} className="top-right" src="../../static/image/Close.png" />
            </div>
            <div className="sign_auth">
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
                        <Grid item container xs={12} style={{paddingTop:0}}>
                            <p className="password_error">
                                {email_info}
                            </p>
                        </Grid>
                        <Grid item xs={12} className="button_wrapper">
                            <Button variant="outlined" color="primary" type="submit" disabled={loading} >
                                Reset
                            </Button>
                            {loading && <CircularProgress size={24} className="buttonProgress" />}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div className="sign_footer">
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
        authenticate: (email,password) => dispatch(action.authenticate(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(formForgetPass)
