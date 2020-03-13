import {Container,Row,Col} from 'react-bootstrap'
import { TextField, Grid, Button } from "@material-ui/core"

import { Tween, Timeline } from 'react-gsap';
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'

import Login from '../formLogin'
import Register from '../formRegister'


const authBox = ({showLogin,play,switchForm,closeLoginHandler}) => {
    return (
        <div className={`back_box_userlogin ${showLogin}`}>
            <Tween from={{ scale: 0.97 }} duration={.4} playState={play}>
            <div className="box_userlogin">
                <Grid container className="full-height">
                    <Grid item container md={12} className="full-height">
                        <Grid item xs={12} md={6} className="box_userlogin-left mid_position">
                            <div>
                                <Tween from={{ opacity: 0,x: -50 }} delay={.2} playState={play}>
                                    <h2>Welcome Back to <br/> Creative Market</h2>
                                </Tween>
                                <div className="short_border"></div>
                                <p>Graphics, fonts, themes, photos and more, starting at $1!</p>
                            </div>
                        </Grid>
                        {switchForm ?
                            <Register closeLoginHandler={closeLoginHandler}/>:
                            <Login  closeLoginHandler={closeLoginHandler}/>
                        }
                    </Grid>
                </Grid>
            </div>
            </Tween>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        switchForm: state.auth.switchForm,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchFormHandler: (type) => dispatch(action.switchFormHandler2(type))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(authBox)
