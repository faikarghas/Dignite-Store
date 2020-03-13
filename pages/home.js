import React from 'react'
import Link from 'next/link'
import {Tabs,Tab} from 'react-bootstrap'
import {Container,TextField, Grid, Button } from "@material-ui/core"
import { connect } from 'react-redux'
import {getCookie} from '../lib/cookie'
import * as action from '../redux/actionIndex'
import * as Scroll from 'react-scroll';
import {reauthenticate,verify_auth,deauthenticate} from '../redux/action'

import Layout from '../components/layouts'


class Home extends React.Component{
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
        let data = [1,2,3,4,5,6]
        let renderBox = data.map( item => {
            return (
                    <Grid item xs={6} md={4} className="box_products" key={item}>
                        <img src="/image/Image1.png" width="100%" height="200px"/>
                        <ul className="mt-5">
                            <li>
                                <Link href="/productDetail/[slug]" as={`/productDetail/test`} key={item}>
                                    <a style={{cursor:'pointer'}}>Product Title</a>
                                </Link>
                                <p>by Author in Category</p>
                            </li>
                            <li>Rp 10</li>
                        </ul>
                    </Grid>
            )
        })
        return (
            <Layout>
                <section className="section_banner">
                    <Container style={{height:'100%'}} maxWidth="md">
                        <Grid container style={{height:'100%'}}>
                            <Grid item xs={12} md={8} style={{height:'100%',display:'flex',alignItems:'center'}}>
                                <div style={{padding:'4rem 0'}}>
                                    <h1 className="mb-5">We Craft Premium <br/> Digital Tools.</h1>
                                    <h3 className="mb-5">Over a hundred of digital products, in your fingertips.</h3>
                                    <Scroll.Link activeClass="active" to="products" duration={500} smooth={true} spy={true}><div className="explore_button">EXPLORE NOW</div></Scroll.Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}></Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_products-box" id="products">
                    <Container maxWidth="md">
                        <Tabs defaultActiveKey="Featured" id="uncontrolled-tab-example">
                            <Tab eventKey="Featured" title="Featured">
                                <Grid container>
                                    {renderBox}
                                </Grid>
                            </Tab>
                            <Tab eventKey="New" title="New Releases">
                                <Grid container>
                                    {renderBox}
                                </Grid>
                            </Tab>
                            <Tab eventKey="Sale" title="On Sale">
                                <Grid container>
                                    {renderBox}
                                </Grid>
                            </Tab>
                        </Tabs>
                        <div className="text-center mt-5">
                            <Link href="/products"><a className="explore_button">See All Products</a></Link>
                        </div>
                    </Container>
                </section>
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
      deauthenticate : () => dispatch(action.deauthenticate()),
      verify_auth : () => dispatch(action.verify_auth()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
