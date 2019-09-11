import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../../components/layouts'
import { connect } from 'react-redux'
import * as action from '../../redux/actionIndex'

import '../../sass/main.scss'


class ProductDetail extends React.Component{
    state = {
        added: false
    }
    addCart = () => {
        let a = 1
        this.setState({
            added: true
        })
        this.props.addcart(a)
    }
    render(){
        return (
            <Layout>
                <section className="section_productDetail-header">
                    <Container>
                        <Row>
                            <Col xs={12} >
                                <div className="link-category">
                                    <Link href="/home"><a>Home > </a></Link><Link><a>Themes & Templates > </a></Link> <a>Fun Weather</a>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <h2>Fun Weather</h2>
                                <p>A landing page template for your apps</p>
                            </Col>
                            <Col xs={12} md={6} className="right_position">
                                <ul>
                                    <li className="wishlist"><img src="../static/image/Icon/Wishlist.png" alt="logo-wishlist" width="20px" height="20px"/></li>
                                    <li className="preview">PREVIEW</li>
                                    <li className="addtocart" onClick={this.addCart}>{this.state.added ? 'ADDED TO CART' : 'ADD TO CART'}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_productDetail-overview">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="layout-detail">
                                    <img src="../static/image/fun-weather.png" alt="image-product"></img>
                                    <h3 className="mb-5">Overview</h3>
                                    <p className="mb-5">Fun Weather is a landing page design template made with Photoshop ideal for showcasing weather apps, but you can easily readapt it to present any other kind of mobile app. The user interface has been designed by Elina Chanieva, a young and talented designer from Moscow.</p>
                                    <h3 className="mb-5">Highlights</h3>
                                    <p></p>
                                    <h3 className="mb-5">Compatibility</h3>
                                    <p></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jumlahBelanja: state.jumlahBelanja
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addcart : (jumlah) => dispatch(action.addcart(jumlah))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
