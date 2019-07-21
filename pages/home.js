import React from 'react'
import Link from 'next/link'
import {Container,Row,Col,Tabs,Tab} from 'react-bootstrap'
import Layout from '../components/layouts'

import '../sass/main.scss'

class Home extends React.Component{
    render(){
        let data = [1,2,3,4,5,6]
        let renderBox = data.map( item => {
            return (
                <Col xs={6} md={4} className="box_products" key={item}>
                    <img src="../static/image/Image1.png" width="100%" height="200px"/>
                    <ul className="mt-5">
                        <li>
                            <h2>Product Title</h2>
                            <p>by Author in Category</p>
                        </li>
                        <li>Rp 10</li>
                    </ul>
                </Col>
            )
        })
        return (
            <Layout>
                <section className="section_banner">
                    <Container style={{height:'100%'}}>
                        <Row style={{height:'100%'}}>
                            <Col xs={12} md={8} style={{height:'100%',display:'flex',alignItems:'center'}}>
                                <div style={{padding:'4rem 0'}}>
                                    <h1 className="mb-5">We Craft Premium <br/> Digital Tools.</h1>
                                    <h3 className="mb-5">Over a hundred of digital products, in your fingertips.</h3>
                                    <div className="explore_button"><Link href="/products"><a>EXPLORE NOW</a></Link></div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}></Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_allProducts">
                    <Container>
                        <Tabs defaultActiveKey="Featured" id="uncontrolled-tab-example">
                            <Tab eventKey="Featured" title="Featured">
                                <Row>
                                    {renderBox}
                                </Row>
                            </Tab>
                            <Tab eventKey="New" title="New Releases">
                                <Row>
                                    {renderBox}
                                </Row>
                            </Tab>
                            <Tab eventKey="Sale" title="On Sale">
                                <Row>
                                    {renderBox}
                                </Row>
                            </Tab>
                        </Tabs>
                        <div className="text-center mt-5">
                            <div className="explore_button"><Link href="/products"><a>See All Products</a></Link></div>
                        </div>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Home
