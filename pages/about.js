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
                alert('session expired')
            }
        }


        return { }

    }

    render(){
        return (
            <Layout>
                <section className="section_banner2">
                    <img src="/image/about.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>About Us</h2>
                    </div>
                </section>
                <section className="section_content-about">
                    <Container maxWidth="md">
                        <Grid container>
                            <Grid item>
                                <h2 className="mb-5">Who are we?</h2>
                                <div className="short-border mb-5"></div>
                                <p className="mb-5">Dignite Store was started in April 2019 as a premium quality digital product resources, aiming to  connect designers, creators, curators, crafters, anybody to do what they love digitally in a fun, profitable way. We’re transforming the way people create so we, as creators, can collaborate and help each other achieving our digital goals.</p>
                                <h3 className="mb-5">Want to contribute?</h3>
                                <p className="mb-5">If you have a passion for pixels and helping others while living the live you love, let’s collaborate! We’d be very happy to feature your creations.</p>
                                <h3 className="mb-5">Need our help?</h3>
                                <p className="mb-5">We’re actually a part of something bigger. If you have difficulties on meeting your own digital needs, visit our studio and we’ll do it for you. You’re always welcome.</p>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default About
