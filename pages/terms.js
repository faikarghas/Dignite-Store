import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Tabs,Tab,Form} from 'react-bootstrap'
import {Container,TextField, Grid } from "@material-ui/core"
import Link from 'next/link'
import Layout from '../components/layouts'
import { connect } from 'react-redux'
import {getCookie} from '../lib/cookie'
import * as action from '../redux/actionIndex'
import {reauthenticate,verify_auth,deauthenticate} from '../redux/action'


class Terms extends React.Component{
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
                    console.log('verified');
                    await ctx.store.dispatch(reauthenticate(getCookie('token', ctx.req),getCookie('idusers', ctx.req)))
                } else {
                    await ctx.store.dispatch(deauthenticate())
                    console.log('not verified');
                }
            }
        } else {
            // verify token 
            let aw = await ctx.store.dispatch(verify_auth(token))
            if (aw.success === true) {
                console.log('verified');
            } else {
                await ctx.store.dispatch(deauthenticate())
                console.log('not verified');
            }
        }


        return { }

    }


    state = {
        content:'one',
        activeA:'',
        activeB:'',
        activeC:''
    }

    changeTabHandler = (a) => {
        if(a === 'one'){
            this.setState({
                content:a,
                activeA:'active',
                activeB:'',
                activeC:''
            })
        } else if (a === 'two'){
            this.setState({
                content:a,
                activeA:'',
                activeB:'active',
                activeC:''
            })
        } else {
            this.setState({
                content:a,
                activeA:'',
                activeB:'',
                activeC:'active'
            })
        }
    }

    render(){
        let content = '';

        switch (this.state.content) {
            case 'one':
                 content = "1he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjurd, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;";
                break;
            case 'two':
                content = "2he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjurd, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;";
                break;
            case 'three':
                content = "3he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjurd, murderous, bloody, full of blame, Savage, extreme, rude,cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;";
                break;
            default:
                break;
        }

        return (
            <Layout>
                <section className="section_banner2">
                    <img src="/image/terms.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>License Terms</h2>
                    </div>
                </section>
                <section className="section_terms">
                    <Container maxWidth="md">
                        <Grid container>
                            <Grid item>
                                <ul>
                                    <a className={`one ${this.state.activeA}`} onClick={()=>this.changeTabHandler('one')} >Personal</a>
                                    <a className={`two ${this.state.activeB}`} onClick={()=>this.changeTabHandler('two')} >Commercial</a>
                                    <a className={`three ${this.state.activeC}`} onClick={()=>this.changeTabHandler('three')} >Extended Commercial</a>
                                    <hr />
                                    <div className="hr-bl"/>
                                </ul>

                                <div><p>{content}</p></div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Terms
