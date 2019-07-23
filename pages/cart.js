import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form,Table,Button} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'


class Cart extends React.Component{

    render(){
        return (
            <Layout>
                <div className="cart">
                    <Container>
                        <Row>
                            <Col xs={12} md={9}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Shopping Cart</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="delete" src="../static/image/Tash.png" alt="delete"/>
                                                <img className="projectImage" src="../static/image/fun-weather.png" alt="image-product"></img>
                                            </td>
                                            <td>Fun Weather</td>
                                            <td>Rp. 10.000</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img className="delete" src="../static/image/Tash.png" alt="delete"/>
                                                <img className="projectImage" src="../static/image/fun-weather.png" alt="image-product"></img>
                                            </td>
                                            <td>Fun Weather</td>
                                            <td>Rp. 10.000</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={12} md={3}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Cart Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="subTotal">
                                                    <ul>
                                                        <li>Subtotal</li>
                                                        <li>Rp 20.000</li>
                                                    </ul>
                                                </div>
                                                <div className="grandTotal">
                                                    <ul>
                                                        <li>Grand Total</li>
                                                        <li>Rp 20.000</li>
                                                    </ul>
                                                </div>
                                                <Button variant="primary" type="submit">
                                                    Proceed to checkout
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table striped bordered hover className="discount">
                                    <thead>
                                        <tr>
                                            <th>Discount Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Enter your coupon code if you have one.
                                                <Form>
                                                    <Form.Group>
                                                        <Form.Control type="text"/>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit">
                                                        Apply coupon
                                                    </Button>
                                                </Form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        )
    }
}

export default Cart