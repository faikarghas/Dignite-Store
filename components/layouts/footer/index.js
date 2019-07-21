import React from 'react'
import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap'

const index = props => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} className="text-center subscribe" style={{borderBottom:'1px solid #707070'}}>
                        <h2 className="mb-5">Subscribe to be the first</h2>
                        <h3 className="mb-5">Enjoy private promo offers and get new products <br/> before they announced in public.</h3>
                        <InputGroup className="justify-content-center">
                            <FormControl placeholder="Your Email Address"></FormControl>
                        </InputGroup>
                    </Col>
                    <Col xs={3} className="footerlink">
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Account</li>
                        </ul>
                    </Col>
                    <Col xs={3} className="footerlink">
                        <ul>
                            <li>Licensing & Terms</li>
                            <li>Privacy Policy</li>
                            <li>Partnership</li>
                        </ul>
                    </Col>
                    <Col xs={3} className="footerlink">
                        <ul style={{overflow:'auto'}}>
                            <li style={{float:'right',color:'#707070'}}>Follow Us</li>
                        </ul>
                    </Col>
                    <Col xs={3} className="footerlink sosmed_footer">
                        <ul>
                            <li><img alt="logo-sosmed" src="../static/image/SocialIcons/twitter.png"/></li>
                            <li><img alt="logo-sosmed" src="../static/image/SocialIcons/instagram.png"/></li>
                            <li><img alt="logo-sosmed" src="../static/image/SocialIcons/fb.png"/></li>
                        </ul>
                    </Col>
                    <Col xs={6} className="copyright">
                       <p>© 2019 CompanyName. All Rights Reserved.</p>
                    </Col>
                    <Col xs={6} className="copyright" style={{justifyContent:'flex-end'}}>
                        <ul>
                            <li className="pr-5"><p>Secure Payment:</p></li>
                            <li><img alt="logo-midtrans" src="../static/image/midtrans.png" width="150px" height="100%"/></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default index
