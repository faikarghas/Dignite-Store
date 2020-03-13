import React, { Component } from 'react'
import {Nav,Table} from 'react-bootstrap'
import {Container,TextField, Grid } from "@material-ui/core"

import Link from 'next/link'
import Layout from '../../../components/layouts'
import Bread from '../../../components/presentational/breadcrumb'
import { connect } from 'react-redux'
import {getCookie} from '../../../lib/cookie'
import * as action from '../../../redux/actionIndex'
import {reauthenticate,verify_auth,deauthenticate} from '../../../redux/action'


class Downloads extends Component {
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
    render() {
        return (
            <Layout>
                <div className="account">
                    <Container maxWidth="md">
                            <Grid container>
                                <Grid item xs={12} >
                                    <Bread data={[{name:'Home',link:'/home'},{name:'Account',link:'/account'},{name:'Downloads',link:'/account/downloads'}]}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={3}>
                                    <Nav defaultActiveKey="/account" className="flex-column">
                                        <Link href="/account" ><a className="link-acc">Edit Profile</a></Link>
                                        <Link href="/account/chpassword" as="/account/change-password" ><a className="link-acc">Change Password</a></Link>
                                        <Link href="/account/orders" as="/account/orders" ><a className="link-acc">Orders</a></Link>
                                        <Link href="/account/downloads" as="/account/downloads" ><a className="link-acc active-link">Downloads</a></Link>
                                        <Link href="/account/wishlist" as="/account/wishlist" ><a className="link-acc">Wishlist</a></Link>
                                        <p className="link-acc">Logout</p>
                                    </Nav>
                                </Grid>
                                <Grid item md={9}>
                                    <div className="downloads">
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                <th>Product</th>
                                                <th>Remaining</th>
                                                <th>Expired</th>
                                                <th>File</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Skin Care</td>
                                                <td>2</td>
                                                <td>Never</td>
                                                <td>Download</td>
                                                </tr>
                                            </tbody>
                                        </Table>
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

export default connect(null,mapDispatchToProps)(Downloads)
