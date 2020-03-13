import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Form,Button} from 'react-bootstrap'
import {Container,TextField, Grid } from "@material-ui/core"
import Link from 'next/link'
import Layout from '../components/layouts'
import {getCookie} from '../lib/cookie'
import * as action from '../redux/actionIndex'
import {reauthenticate,verify_auth,deauthenticate} from '../redux/action'


class Contact extends React.Component{
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
    render(){
        return (
            <Layout>
                <section className="section_banner2">
                    <img src="/image/contact.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>Contact Us</h2>
                    </div>
                </section>
                <section className="section_content-contact">
                    <Container maxWidth="md">
                        <Grid container>
                            <Grid item xs={12}>
                                <h2 className="mb-5">We’re here for you!</h2>
                                <div className="short-border mb-5"></div>
                                <p className="mb-5">If you have any questions, got ideas for making things better, a problem or even just drop by and say “Hi”, poke us anytime.<br/> We will do our best to get to you as fast as we can. </p>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="You Name" />
                                    </Form.Group>


                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Your Email Address" />
                                    </Form.Group>


                                    <Form.Group className="mb-4">
                                        <Form.Control as="textarea" placeholder="Go ahead. Say you’ve got to say." />
                                    </Form.Group>


                                    <Button variant="primary" type="submit">
                                        Send
                                    </Button>
                                </Form>
                            </Grid>
                            <Grid item xs={12} md={6}></Grid>
                        </Grid>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Contact
