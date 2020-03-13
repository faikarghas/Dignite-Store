import React, { Component } from 'react'
import {Nav,Tab,Form,Button} from 'react-bootstrap'
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Link from 'next/link'
import Layout from '../../../components/layouts'
import Bread from '../../../components/presentational/breadcrumb'
import { connect } from 'react-redux'
import {getCookie} from '../../../lib/cookie'
import * as action from '../../../redux/actionIndex'
import {reauthenticate,verify_auth,deauthenticate} from '../../../redux/action'


class Wishlist extends Component {

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
                     ctx.res.writeHead(302, {Location: '/home'})
                     ctx.res.end()
                 }
            }
        } else {
            // verify token
            const token = ctx.store.getState().auth.token;

            let aw = await ctx.store.dispatch(verify_auth(token))
            if (aw.success === true) {
            } else {
                await ctx.store.dispatch(deauthenticate())
                Router.push('/home')
            }
        }


        return { }

    }

    wishlist = () => {
        console.log('test');
    }

    render() {
        return (
            <Layout>
                <div className="account">
                    <Container maxWidth="md">
                            <Grid container>
                                <Grid item xs={12} >
                                    <Bread data={[{name:'Home',link:'/home'},{name:'Account',link:'/account'},{name:'Wishlist',link:'/account/wishlist'}]}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={3}>
                                    <Nav defaultActiveKey="/account" className="flex-column">
                                        <Link href="/account" ><a className="link-acc">Edit Profile</a></Link>
                                        <Link href="/account/chpassword" as="/account/change-password" ><a className="link-acc">Change Password</a></Link>
                                        <Link href="/account/orders" as="/account/orders" ><a className="link-acc">Orders</a></Link>
                                        <Link href="/account/downloads" as="/account/downloads" ><a className="link-acc">Downloads</a></Link>
                                        <Link href="/account/wishlist" as="/account/wishlist" ><a className="link-acc active-link">Wishlist</a></Link>
                                        <p className="link-acc">Logout</p>
                                    </Nav>
                                </Grid>
                                <Grid item md={9}>
                                    <div className="wishlist">
                                        <Grid container>
                                            <Grid item xs={6} md={4} className="box_products" >
                                                <div className="box_products-img">
                                                    <img src="/image/Image1.png" width="100%" height="200px"/>
                                                    <svg className="loveImg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 50 50" style={{enableBackground:'new 0 0 50 50'}} xmlSpace="preserve">
                                                    <path className="likes2" fill="#56A0D3"  d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
                                                        c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
                                                        c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
                                                    </svg>
                                                </div>
                                                <ul className="mt-5">
                                                    <li>
                                                        <Link href="/productDetail/[slug]" as={`/productDetail/test`}>
                                                            <a style={{cursor:'pointer'}}>Product Title</a>
                                                        </Link>
                                                    </li>
                                                    <li>Rp 10</li>
                                                </ul>
                                            </Grid>
                                            <Grid item xs={6} md={4} className="box_products" >
                                                <div className="box_products-img">
                                                    <img src="/image/Image1.png" width="100%" height="200px"/>
                                                    <svg className="loveImg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 50 50" style={{enableBackground:'new 0 0 50 50'}} xmlSpace="preserve">
                                                    <path className="likes2" fill="#56A0D3"  d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
                                                        c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
                                                        c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
                                                    </svg>
                                                </div>
                                                <ul className="mt-5">
                                                    <li>
                                                        <Link href="/productDetail/[slug]" as={`/productDetail/test`}>
                                                            <a style={{cursor:'pointer'}}>Product Title</a>
                                                        </Link>
                                                    </li>
                                                    <li>Rp 10</li>
                                                </ul>
                                            </Grid>
                                            <Grid item xs={6} md={4} className="box_products" >
                                                <div className="box_products-img">
                                                    <img src="/image/Image1.png" width="100%" height="200px"/>
                                                    <svg className="loveImg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 50 50" style={{enableBackground:'new 0 0 50 50'}} xmlSpace="preserve">
                                                    <path className="likes2" fill="#56A0D3"  d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
                                                        c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
                                                        c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
                                                    </svg>
                                                </div>
                                                <ul className="mt-5">
                                                    <li>
                                                        <Link href="/productDetail/[slug]" as={`/productDetail/test`}>
                                                            <a style={{cursor:'pointer'}}>Product Title</a>
                                                        </Link>
                                                    </li>
                                                    <li>Rp 10</li>
                                                </ul>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                    </Container>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //   idusers: state.authidusers
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      deauthenticate : () => dispatch(action.deauthenticate())
    }
}

export default connect(null,mapDispatchToProps)(Wishlist)
