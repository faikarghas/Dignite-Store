import React from 'react'
import Link from 'next/link'
import {Container,Row,Col,InputGroup,FormControl,Form,Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Router from 'next/router'
import { Tween, Timeline } from 'react-gsap';

class index extends React.Component{
    state = {
        showLogin : 'hide',
        switchSignUp: false,
        play1 : 'stop'
    }

    showLoginHandler = () => {
        this.setState({
            showLogin: 'show',
            play1:'play'
        })
    }

    closeLoginHandler = () => {
        this.setState({
            showLogin: 'hide',
            play1:'stop'
        })
    }

    signUpHandler = () => {
        this.setState({
            switchSignUp: true
        })
    }

    signInHandler = () => {
        this.setState({
            switchSignUp: false
        })
    }

    toCart = () => {
        Router.push('/cart')
    }


    render(){
        return (
            <React.Fragment>
            <Container className="header">
                <Row>
                    <Col md={2} className="mid_position">
                        <ul>
                            <li><Link href="/home"><img src="../static/image/logo.png" width="90px" height="90px" style={{cursor:'pointer'}}/></Link></li>
                            <li className="menu" style={{position:'relative'}}>
                                <img src="../static/image/Icon/OptionToggle.png" width="20px" height="20px" />
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
                    </Col>
                    <Col md={8} className="mid_position">
                        <InputGroup>
                            <FormControl placeholder="Search"></FormControl>
                        </InputGroup>
                    </Col>
                    <Col md={2} className="mid_position">
                        <ul>
                            <li onClick={this.toCart}><img src="../static/image/Icon/Cart.png" width="30px" height="30px" style={{cursor:'pointer'}}/></li>
                            <li className="userAccount" onClick={this.showLoginHandler}><h4>Sign In</h4></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className={`back_box_userlogin ${this.state.showLogin}`}>
                <Tween from={{ scale: 0.97 }} duration={.4} playState={this.state.play1}>
                <div className="box_userlogin">
                    <Container fluid={true} className="full-height">
                        <Row className="full-height">
                            <Col xs={12} md={6} className="no-gutters box_userlogin-left mid_position">
                                <div>
                                    <Tween from={{ opacity: 0,x: -50 }} delay={.2} playState={this.state.play1}>
                                        <h2>Welcome Back to <br/> Creative Market</h2>
                                    </Tween>
                                    <div className="short_border"></div>
                                    <p>Graphics, fonts, themes, photos and more, starting at $1!</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="no-gutters box_userlogin-right p-0">
                                <div className="sign_header">
                                    <h3>Sign Into Your Account</h3>
                                    <img onClick={this.closeLoginHandler} className="top-right" src="../../static/image/Close.png" />
                                </div>
                                <div className="sign_in">
                                { this.state.switchSignUp ?
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <InputGroup className="mb-3">
                                                <Form.Control type="password" placeholder="Password"
                                                className="border-right-0"
                                                />
                                                <InputGroup.Append>
                                                <InputGroup.Text id="basic-addon2">Forgot?</InputGroup.Text>
                                                </InputGroup.Append>
                                        </InputGroup>
                                        <Button variant="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </Form>
                                    :
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <InputGroup className="mb-3">
                                                <Form.Control type="password" placeholder="Password"
                                                className="border-right-0"
                                                />
                                                <InputGroup.Append>
                                                <InputGroup.Text id="basic-addon2">Forgot?</InputGroup.Text>
                                                </InputGroup.Append>
                                        </InputGroup>
                                        <Button variant="primary" type="submit">
                                            Sign In
                                        </Button>
                                    </Form>
                                }
                                </div>
                                <div className="sign_footer">
                                    {this.state.switchSignUp ?
                                        <p> <span onClick={this.signInHandler}>Sign In!</span></p>
                                        :
                                        <p>New to Creative Market? <span onClick={this.signUpHandler}>Sign Up!</span></p>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Tween>
            </div>
            </React.Fragment>
        )
    }
}

export default index
