import React from 'react'
import Link from 'next/link'
// import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import { Container,TextField, Grid, Button } from "@material-ui/core"

const index = props => {
    return (
        <footer>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12} md={12} className="text-center subscribe" style={{borderBottom:'1px solid #707070'}}>
                        <h2 className="mb-5">Subscribe to be the first</h2>
                        <h3 className="mb-5">Enjoy private promo offers and get new products <br/> before they announced in public.</h3>
                        {/* <InputGroup className="justify-content-center">
                            <FormControl placeholder="Your Email Address" autoComplete="username"></FormControl>
                        </InputGroup> */}
                    </Grid>
                    <Grid item xs={6} md={3} className="footerlink">
                        <ul>
                            <li><Link href="/about"><a>About</a></Link></li>
                            <li><Link href="/contact"><a>Contact</a></Link></li>
                            <li><Link href="/terms"><a>Licensing & Terms</a></Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} md={3} className="footerlink">
                        <ul>
                            <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                            <li><Link href="/privacy-policy"><a>Partnership</a></Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6} className="footerlink sosmed_footer">
                        <ul style={{overflow:'auto'}}>
                            <li style={{float:'',color:'#707070'}}>Follow Us</li>
                            <li><img alt="logo-sosmed" src="/image/SocialIcons/twitter.png"/></li>
                            <li><img alt="logo-sosmed" src="/image/SocialIcons/instagram.png"/></li>
                            <li><img alt="logo-sosmed" src="/image/SocialIcons/fb.png"/></li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} md={6} className="copyright">
                       <p>© 2019 Dignite Store. All Rights Reserved.</p>
                    </Grid>
                    <Grid item xs={6} md={6} className="copyright" style={{justifyContent:'flex-end'}}>
                        <ul>
                            <li className="pr-5"><p>Secure Payment:</p></li>
                            <li><img alt="logo-midtrans" src="/image/midtrans.png"/></li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default index
