import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form} from 'react-bootstrap'
import Layout from '../components/layouts'
import InfiniteScroll from "react-infinite-scroll-component";

import '../sass/main.scss'


class Products extends React.Component{

    state = {
        openFilter : false,
        pickFilter : 'Most Recent'
    }

    openFilter = ()=>{
        this.setState(prevState=>({
            openFilter : !prevState.openFilter
        }))
    }

    pickFilter = (name) => {
        this.setState({
            pickFilter:name
        })
        if (name === 'Popular') {
            console.log('popular');
        } else if(name === 'On Sale'){
            console.log('on sale');
        }
    }


    render(){
        let data = [1,2,3,4,5,6]
        let renderBox = data.map( (item,index) => {
            return (
                <Col xs={6} md={4} className="box_products" key={index}>
                    <img src="../static/image/Image1.png" width="100%" height="200px"/>
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
                <section className="section_products">
                    <Container>
                        <Row style={{justifyContent:'space-between'}}>
                            <Col xs={12} md={8}>
                                <h2>All Products</h2>
                                <h3>3482 expertly crafted assets for designers by designers</h3>
                            </Col>
                            <Col xs={12} md={4} className="filter">
                                <div className="openFilter" onClick={this.openFilter}>
                                    <h3>{this.state.pickFilter}&nbsp;&nbsp;<p>></p></h3>
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
                                {/* <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                        <option>Most Recent</option>
                                        <option>Popular</option>
                                        <option>Price High</option>
                                        <option>Price Low</option>
                                        <option>On Sale</option>
                                    </Form.Control>
                                </Form.Group> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_allProducts">
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
