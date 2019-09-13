import React, { Component } from 'react'
import {Container,Row,Col,Nav,Tab,Form,Button} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'

class Account extends Component {
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
                                        <Link href="/account" ><a className="link-acc active-link">Edit Profile</a></Link>
                                        <Link href="/chpassword" as="/account/change-password" ><a className="link-acc">Change Password</a></Link>
                                        <Link href="/orders" as="/account/orders" ><a className="link-acc">Orders</a></Link>
                                        <Link href="/orders" as="/account/downloads" ><a className="link-acc">Downloads</a></Link>
                                        <Link href="/orders" as="/account/wishlist" ><a className="link-acc">Wishlist</a></Link>
                                        <p className="link-acc">Logout</p>
                                    </Nav>
                                </Col>
                                <Col md={9}>
                                    <div className="edit-profile">
                                        <Form>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Full Name
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Form.Control type="text" placeholder="Full Name" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Email Address
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Form.Control type="email" placeholder="Email Address" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Phone Number
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="Number" placeholder="Phone Number" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Address
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="Address" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                City
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="City" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                State
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="State" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Country
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="text" placeholder="Country" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Zip Code
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="number" placeholder="Zip Code" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="mt-5">
                                                <Form.Label column sm="3">
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Button variant="primary" type="submit">
                                                        Save
                                                    </Button>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                </div>
            </Layout>
        )
    }
}


export default Account