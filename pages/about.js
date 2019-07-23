import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'


class About extends React.Component{

    render(){
        return (
            <Layout>
                <section className="section_banner2">
                    <img src="../static/image/about.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>About Us</h2>
                    </div>
                </section>
                <section className="section_content-about">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="mb-5">Who are we?</h2>
                                <div className="short-border mb-5"></div>
                                <p className="mb-5">Dignite Store was started in April 2019 as a premium quality digital product resources, aiming to  connect designers, creators, curators, crafters, anybody to do what they love digitally in a fun, profitable way. We’re transforming the way people create so we, as creators, can collaborate and help each other achieving our digital goals.</p>
                                <h3 className="mb-5">Want to contribute?</h3>
                                <p className="mb-5">If you have a passion for pixels and helping others while living the live you love, let’s collaborate! We’d be very happy to feature your creations.</p>
                                <h3 className="mb-5">Need our help?</h3>
                                <p className="mb-5">We’re actually a part of something bigger. If you have difficulties on meeting your own digital needs, visit our studio and we’ll do it for you. You’re always welcome.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default About
