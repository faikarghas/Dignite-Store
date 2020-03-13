import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../../components/layouts'
import { connect } from 'react-redux'
import {getCookie} from '../../lib/cookie'
import * as action from '../../redux/actionIndex'
import {reauthenticate,verify_auth,deauthenticate} from '../../redux/action'

import '../../sass/main.scss'


class ProductDetail extends React.Component{
    static async getInitialProps(ctx){
        const token = ctx.store.getState().auth.token;

        if(ctx.res){
          ctx.res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
        }
        if(ctx && !process.browser) {
            if(ctx.req.headers.cookie) {
                // get cookie
                const token = getCookie('token', ctx.req)
                // verify cookie
                let aw = await ctx.store.dispatch(verify_auth(token))
                // if true reauth
                if (aw.success === true) {
                    await ctx.store.dispatch(reauthenticate(getCookie('token', ctx.req),getCookie('idusers', ctx.req)))
                } else {
                    await ctx.store.dispatch(deauthenticate())
                }
            }
        } else {
            // verify token 
            let aw = await ctx.store.dispatch(verify_auth(token))
            if (aw.success === true) {
            } else {
                await ctx.store.dispatch(deauthenticate())
            }
        }

        return { }

    }
    state = {
        added: false,
        wishlistAdded : false
    }
    addWish = () => {
        this.setState(prevState => ({
            wishlistAdded : !prevState.wishlistAdded
        }))
    }
    addCart = () => {
        let a = 1
        this.setState({
            added: true
        })
        this.props.addcart(a)
    }
    render(){
        const {wishlistAdded} = this.state

        let src = wishlistAdded ? 'WishlistAdded' : 'Wishlist'

        return (
            <Layout>
                <section className="section_productDetail-header">
                    <Container>
                        <Row>
                            <Col xs={12} >
                                <div className="link-category">
                                    <Link href="/home"><a>Home ></a></Link>
                                    <Link href="/home"><a>Themes & Templates ></a></Link>
                                    <Link href="/home"><a>Fun Weather</a></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <h2>Fun Weather</h2>
                                <p>A landing page template for your apps</p>
                            </Col>
                            <Col xs={12} md={6} className="right_position">
                                <ul>
                                    <li className="wishlist" onClick={this.addWish}><img src={`/image/Icon/${src}.png`} alt="logo-wishlist" width="20px" height="20px"/></li>
                                    <li className="preview">PREVIEW</li>
                                    <li className="addtocart" onClick={this.addCart}>{this.state.added ? 'ADDED TO CART' : 'ADD TO CART'}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_productDetail-overview">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="layout-detail">
                                    <img src="/image/fun-weather.png" alt="image-product"></img>
                                    <h3 className="mb-5">Overview</h3>
                                    <p className="mb-5">Fun Weather is a landing page design template made with Photoshop ideal for showcasing weather apps, but you can easily readapt it to present any other kind of mobile app. The user interface has been designed by Elina Chanieva, a young and talented designer from Moscow.</p>
                                    <h3 className="mb-5">Highlights</h3>
                                    <p></p>
                                    <h3 className="mb-5">Compatibility</h3>
                                    <p></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // jumlahBelanja: state.jumlahBelanja
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addcart : (jumlah) => dispatch(action.addcart(jumlah))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
