import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'


class Contact extends React.Component{

    render(){
        return (
            <Layout>
                <section className="section_banner2">
                    <img src="../static/image/contact.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>Contact Us</h2>
                    </div>
                </section>
                <section className="section_content-contact">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h2 className="mb-5">We’re here for you!</h2>
                                <div className="short-border mb-5"></div>
                                <p className="mb-5">If you have any questions, got ideas for making things better, a problem or even just drop by and say “Hi”, poke us anytime.<br/> We will do our best to get to you as fast as we can. </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="You Name" />
                                    </Form.Group>


                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Your Email Address" />
                                    </Form.Group>


                                    <Form.Group className="mb-4">
                                        <Form.Control as="textarea" placeholder="Go ahead. Say you’ve got to say." />
                                    </Form.Group>


                                    <Button variant="primary" type="submit">
                                        Send
                                    </Button>
                                </Form>
                            </Col>
                            <Col xs={12} md={6}></Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Contact
