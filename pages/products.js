import React from 'react'
import {Container,Row,Col,Tabs,Tab,Form} from 'react-bootstrap'
import Layout from '../components/layouts'
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from 'react-redux'
import {getCookie} from '../lib/cookie'
import * as action from '../redux/actionIndex'
import {reauthenticate,verify_auth,deauthenticate} from '../redux/action'


class Products extends React.Component{
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
        pickFilter : 'Most Recent',
        hover: false
    }

    pickFilter = (name) => {
        this.setState({
            pickFilter:name
        })
    }

    handleMouseHoverE = () => {
        this.setState({
            hover: true
        })
    }

    handleMouseHoverL = () => {
        this.setState({
            hover: false
        })
    }

    render(){
        let data = [1,2,3,4,5,6]
        let renderBox = data.map( (item,index) => {
            return (
                <Col xs={6} md={4} className="box_products" key={index}>
                    <img src="/image/Image1.png" width="100%" height="200px"/>
                    <ul className="mt-5">
                        <li>
                            <h2>Product Title</h2>
                            <p>by Author in Category</p>
                        </li>
                        <li>Rp {item.id}</li>
                    </ul>
                </Col>
            )
        })
        return (
            <Layout>
                <section className="section_products-header">
                    <Container>
                        <Row style={{justifyContent:'space-between'}}>
                            <Col xs={12} md={8}>
                                <h2>All Products</h2>
                                <h3>3482 expertly crafted assets for designers by designers</h3>
                            </Col>
                            <Col xs={12} md={4} className="filter">
                                <div className="openFilter"  onMouseEnter={this.handleMouseHoverE} onMouseLeave={this.handleMouseHoverL}>
                                    <h3>{this.state.pickFilter}&nbsp;&nbsp;{this.state.hover ? <img className="img-arrow" src="/image/down-arrow.png" width="20px;"/> : <img className="img-arrow up-arrow" src="/image/down-arrow.png" width="20px;" /> }</h3>
                                    <div className="filterBox">
                                        <ul>
                                            <li onClick={() =>{this.pickFilter('Most Recent')}}>Most Recent</li>
                                            <li onClick={() =>{this.pickFilter('Popular')}}>Popular</li>
                                            <li onClick={()=>{this.pickFilter('Price High')}}>Price High</li>
                                            <li onClick={()=>{this.pickFilter('Price Low')}}>Price Low</li>
                                            <li onClick={()=>{this.pickFilter('On Sale')}}>On Sale</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_products-box">
                    <Container>
                        <Tabs defaultActiveKey="Photoshop" id="uncontrolled-tab-example">
                            <Tab eventKey="Photoshop" title="Photoshop">
                                <Row>
                                    {renderBox}
                                </Row>
                            </Tab>
                            <Tab eventKey="Illustrator" title="Illustrator">
                                <Row>
                                    {renderBox}
                                </Row>
                            </Tab>
                            <Tab eventKey="XD" title="XD">
                                <Row>
                                    {renderBox}
                                </Row>
                            </Tab>
                            <Tab eventKey="PNG" title="PNG">
                                <Row>
                                    {renderBox}
                                </Row>
                            </Tab>
                        </Tabs>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Products
