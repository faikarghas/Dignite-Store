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
                    <img src="../static/image/privacy.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>Privacy Policy</h2>
                    </div>
                </section>
                <section className="section_content-privacy">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="mb-5">Privacy Policy - Users and Visitors</h2>
                                <div className="short-border mb-5"></div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default About
