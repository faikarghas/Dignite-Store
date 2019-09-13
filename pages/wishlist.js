import React, { Component } from 'react'
import {Container,Row,Col,Nav,Tab,Form,Button} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'

class Wishlist extends Component {

    state={
        
    }

    wishlist = () => {
        console.log('test');
    }

    render() {
        return (
            <Layout>
                <div className="account">
                    <Container>
                            <Row>
                                <Col xs={12} >
                                    <div className="link-category">
                                        <Link href="/home"><a>Home > </a></Link><Link href="/account"><a>Account</a></Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Nav defaultActiveKey="/account" className="flex-column">
                                        <Link href="/account" ><a className="link-acc">Edit Profile</a></Link>
                                        <Link href="/chpassword" as="/account/change-password" ><a className="link-acc">Change Password</a></Link>
                                        <Link href="/orders" as="/account/orders" ><a className="link-acc">Orders</a></Link>
                                        <Link href="/downloads" as="/account/downloads" ><a className="link-acc">Downloads</a></Link>
                                        <Link href="/wishlist" as="/account/wishlist" ><a className="link-acc active-link">Wishlist</a></Link>
                                        <p className="link-acc">Logout</p>
                                    </Nav>
                                </Col>
                                <Col md={9}>
                                    <div className="wishlist">
                                        <Row>
                                            <Col xs={6} md={4} className="box_products" >
                                                <div className="box_products-img">
                                                    <img src="../static/image/Image1.png" width="100%" height="200px"/>
                                                    <svg class="loveImg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 50 50" style={{enableBackground:'new 0 0 50 50'}} xmlSpace="preserve">
                                                    <path class="likes2" fill="#56A0D3"  d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
                                                        c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
                                                        c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
                                                    </svg>
                                                </div>
                                                <ul className="mt-5">
                                                    <li>
                                                        <Link href="/productDetail/[slug]" as={`/productDetail/test`}>
                                                            <a style={{cursor:'pointer'}}>Product Title</a>
                                                        </Link>
                                                    </li>
                                                    <li>Rp 10</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                </div>
            </Layout>
        )
    }
}


export default Wishlist