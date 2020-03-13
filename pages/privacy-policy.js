import React from 'react'
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

import Layout from '../components/layouts'
import {getCookie} from '../lib/cookie'
import {reauthenticate,verify_auth,deauthenticate} from '../redux/action'


class About extends React.Component{

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
                    <img src="/image/privacy.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>Privacy Policy</h2>
                    </div>
                </section>
                <section className="section_content-privacy">
                    <Container maxWidth="md">
                        <Grid container>
                            <Grid item>
                                <h2 className="mb-5">Privacy Policy - Users and Visitors</h2>
                                <div className="short-border mb-5"></div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default About
