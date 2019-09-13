import React, { Component } from 'react'
import {Container,Row,Col,Nav,Tab,Form,Button} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'

class Password extends Component {
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
                                        <Link href="/chpassword" as="/account/change-password" ><a className="link-acc active-link">Change Password</a></Link>
                                        <Link href="/orders" as="/account/orders" ><a className="link-acc">Orders</a></Link>
                                        <Link href="/downloads" as="/account/downloads" ><a className="link-acc">Downloads</a></Link>
                                        <Link href="/wishlist" as="/account/wishlist" ><a className="link-acc">Wishlist</a></Link>
                                        <p className="link-acc">Logout</p>
                                    </Nav>
                                </Col>
                                <Col md={9}>
                                    <div className="edit-profile">
                                        <Form>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Old Password
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Form.Control type="password" placeholder="Old Password" autoComplete="current-password"/>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                New Password
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                    <Form.Control type="password" placeholder="New Password" autoComplete="off"/>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                Confirm New Password
                                                </Form.Label>
                                                <Col sm="9" className="posA-ctr">
                                                <Form.Control type="password" placeholder="Confirm New Password" autoComplete="off"/>
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


export default Password