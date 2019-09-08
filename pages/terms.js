import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/layouts'

import '../sass/main.scss'


class Terms extends React.Component{

    state = {
        content:'one',
        activeA:'',
        activeB:'',
        activeC:''
    }

    changeTabHandler = (a) => {
        if(a === 'one'){
            this.setState({
                content:a,
                activeA:'active',
                activeB:'',
                activeC:''
            })
        } else if (a === 'two'){
            this.setState({
                content:a,
                activeA:'',
                activeB:'active',
                activeC:''
            })
        } else {
            this.setState({
                content:a,
                activeA:'',
                activeB:'',
                activeC:'active'
            })
        }
    }

    render(){
        let content = '';

        switch (this.state.content) {
            case 'one':
                 content = "1he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjurd, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;";
                break;
            case 'two':
                content = "2he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjurd, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;";
                break;
            case 'three':
                content = "3he expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjurd, murderous, bloody, full of blame, Savage, extreme, rude,cruel, not to trust; Enjoy'd no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallow'd bait, On purpose laid to make the taker mad: Mad in pursuit and in possession so; Had, having, and in quest, to have extreme;";
                break;
            default:
                break;
        }

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
                                <ul>
                                    <a className={`one ${this.state.activeA}`} onClick={()=>this.changeTabHandler('one')} >Personal</a>
                                    <a className={`two ${this.state.activeB}`} onClick={()=>this.changeTabHandler('two')} >Commercial</a>
                                    <a className={`three ${this.state.activeC}`} onClick={()=>this.changeTabHandler('three')} >Extended Commercial</a>
                                    <hr />
                                    <div className="hr-bl"/>
                                </ul>

                                <div><p>{content}</p></div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Terms
