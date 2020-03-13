import React, { Component } from 'react'
import {Container,TextField, Grid } from "@material-ui/core"
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link'
import Router from 'next/router'
import Layout from '../../components/layouts'
import Bread from '../../components/presentational/breadcrumb'
import Nav from '../../components/presentational/tabNavAccount'
import { connect } from 'react-redux'
import {getCookie} from '../../lib/cookie'
import * as action from '../../redux/actionIndex'
import {reauthenticate,verify_auth,deauthenticate} from '../../redux/action'


class Account extends Component {

    static async getInitialProps(ctx){


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

    logout = () => {
        this.props.deauthenticate()
        .then(data=>{
            if(data) Router.push('/')
        })
    }

    render() {
        return (
            <Layout>
                <div className="account">
                    <Container maxWidth="md">
                            <Grid container>
                                <Grid item xs={12} >
                                    <Bread data={[{name:'Home',link:'/home'},{name:'Account',link:'/account'}]}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={3}>
                                    <Nav/>
                                </Grid>
                                <Grid item md={9}>
                                    <div className="edit-profile">
                                        {/* <Form>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Full Name
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Form.Control type="text" placeholder="Full Name" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Email Address
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Form.Control type="email" placeholder="Email Address" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Phone Number
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="Number" placeholder="Phone Number" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Address
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="Address" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                City
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="City" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                State
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="State" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Country
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="Country" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Zip Code
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="number" placeholder="Zip Code" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="mt-5">
                                                <Form.Label column sm="3">
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Button variant="primary" type="submit">
                                                        Save
                                                    </Button>
                                                </Col>
                                            </Form.Group>
                                        </Form> */}
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

export default connect(null,mapDispatchToProps)(Account)