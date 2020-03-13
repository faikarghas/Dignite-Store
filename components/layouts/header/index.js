import React, {useState} from 'react'
import Link from 'next/link'
// import {Container,Row,Col,InputGroup,FormControl,Form,Button} from 'react-bootstrap'
import { Container,TextField, Grid, Button } from "@material-ui/core"

import Router from 'next/router'
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'
import AuthBox from '../../presentational/authBox'

const Header = ({switchForm,token,switchFormHandler}) => {
    const [play,setPlay] = useState("stop")
    const [showLogin,setShowLogin] = useState("hide")


    function showLoginHandler(){
        setPlay("play")
        setShowLogin("show")
    }

    function closeLoginHandler(){
        setPlay("stop")
        setShowLogin("hide")
    }

    function toCart(){
        // verify token
        if (token) {
            Router.push('/cart')
        } else {
            showLoginHandler()
        }
        // console.log(token);
    }

    return (
            <React.Fragment>
                <Container className="header" maxWidth="md">
                    <Grid container>
                        <Grid item xs={2} md={2} className="mid_position">
                            <ul className="act-left">
                                <li><Link href="/home"><img src="/image/logo.png" width="90px" height="90px" style={{cursor:'pointer'}}/></Link></li>
                                <li className="menu" style={{position:'relative'}}>
                                    <img src="/image/Icon/OptionToggle.png" width="20px" height="20px" />
                                    <div className="showmenu">
                                        <ul>
                                            <li><a>All Products</a></li>
                                            <li><a>UI/UX Kits</a></li>
                                            <li><a>Icon Sets</a></li>
                                            <li><a>Fonts</a></li>
                                            <li><a>Presentation</a></li>
                                            <li><a>Mockups</a></li>
                                            <li><a>Themes & Templates</a></li>
                                            <li><a>Stock Photos</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={8} md={8} className="mid_position">
                            {/* <InputGroup>
                                <FormControl placeholder="Search"></FormControl>
                            </InputGroup> */}
                        </Grid>
                        <Grid item xs={2} md={2} className="mid_position">
                            <ul className="act-right">
                                <li className="cart" onClick={toCart}>
                                    <img src="/image/Icon/Cart.png" width="30px" height="30px" style={{cursor:'pointer'}}/>
                                    {/* {this.props.jumlahBelanja === 0 ? '' :
                                        <div className="cn">{this.props.jumlahBelanja === 0 ? '' : this.props.jumlahBelanja }</div>
                                    } */}

                                </li>
                                {token ? <li className="userAccount" ><Link href="/account"><a>Account</a></Link></li> : <li className="userAccount" onClick={showLoginHandler}><h4>Sign In </h4></li>}
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
                <AuthBox
                    showLogin={showLogin}
                    play={play}
                    closeLoginHandler={closeLoginHandler}
                />
            </React.Fragment>
    )
}

Header.getInitialProps = async ({req}) => {


    return {}
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token

    }
}

export default connect(mapStateToProps,null)(Header)
