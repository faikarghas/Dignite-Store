import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'


class Terms extends React.Component{

    render(){
        return (
            <Layout>
                <section className="section_banner2">
                    <img src="../static/image/terms.jpg" className="img-banner" />
                    <div className="box-white">
                        <h2>License Terms</h2>
                    </div>
                </section>
                <section className="section_terms">
                    <Container>
                        <Row>
                            <Col>
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="home" title="Personal">
                                        <p>he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjur'd, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;</p>
                                    </Tab>
                                    <Tab eventKey="profile" title="Commercial">
                                        <p>he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjur'd, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;</p>
                                    </Tab>
                                    <Tab eventKey="contact" title="Extended Commercial">
                                        <p>he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjur'd, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;</p>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Terms
