import React, { Component } from 'react'
import {Container,Row,Col,Nav,Table} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'

class Downloads extends Component {
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
                                        <Link href="/downloads" as="/account/downloads" ><a className="link-acc active-link">Downloads</a></Link>
                                        <Link href="/wishlist" as="/account/wishlist" ><a className="link-acc">Wishlist</a></Link>
                                        <p className="link-acc">Logout</p>
                                    </Nav>
                                </Col>
                                <Col md={9}>
                                    <div className="downloads">
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                <th>Product</th>
                                                <th>Remaining</th>
                                                <th>Expired</th>
                                                <th>File</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Skin Care</td>
                                                <td>2</td>
                                                <td>Never</td>
                                                <td>Download</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                </div>
            </Layout>
        )
    }
}


export default Downloads