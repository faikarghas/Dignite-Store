import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Container,Row,Col,Tabs,Tab,Form,Table,Button} from 'react-bootstrap'
import Link from 'next/link'
import midtransClient from 'midtrans-client'
import Router from 'next/router'
import {getCookie} from '../lib/cookie'
import * as action from '../redux/actionIndex'
import Layout from '../components/layouts'
import {reauthenticate,verify_auth,deauthenticate} from '../redux/action'


// let snap = new midtransClient.Snap({
//     isProduction : false,
//     serverKey : 'SB-Mid-server-CcZ9XS38Szo2iFPGxxnOxkJr',
//     clientKey : 'SB-Mid-client-asNY1L7yi37gWth1'
// })

// let parameter = {
//     "transaction_details": {
//         "order_id": "test-transaction-123",
//         "gross_amount": 200000
//     }, "credit_card":{
//         "secure" : true
//     }
// };


class Cart extends React.Component{
    static async getInitialProps(ctx){

        if(ctx.res){
          ctx.res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
        }
        if(ctx && !process.browser) {
            if(ctx.req.headers.cookie) {
                 // get cookie
                 const token = getCookie('token', ctx.req)
                 // verify cookie
                 let aw = await ctx.store.dispatch(verify_auth(token))
                 // if true reauth
                 if (aw.success === true) {
                     await ctx.store.dispatch(reauthenticate(getCookie('token', ctx.req),getCookie('idusers', ctx.req)))
                 } else {
                     await ctx.store.dispatch(deauthenticate())
                     ctx.res.writeHead(302, {Location: '/home'})
                     ctx.res.end()
                 }
            }
        } else {
            // verify token
            const token = ctx.store.getState().auth.token;

            let aw = await ctx.store.dispatch(verify_auth(token))
            if (aw.success === true) {
            } else {
                await ctx.store.dispatch(deauthenticate())
                Router.push('/home')
            }
        }

        return { }

    }
    state = {
        data : [
            {id:1,name:'fun weather'},
            {id:2,name:'fun weather2'}
        ]
    }

    deleteHandler = (id) => {
        const {data} = this.state
        this.setState({
            data : data.filter(item=>{
                return item.id != id
            })
        })
    }

    snapMidtrans = () => {
        snap.pay('PUT_TRANSACTION_TOKEN_HERE', {
            // Optional
            onSuccess: function(result){
              /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
            },
            // Optional
            onPending: function(result){
              /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
            },
            // Optional
            onError: function(result){
              /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
            }
        });
    }

    render(){
        let loopProduct = this.state.data.map(item=>{
            return(
                <tr>
                    <td>
                        <img className="delete" src="/image/Tash.png" alt="delete" onClick={()=>this.deleteHandler(item.id)}/>
                        <img className="projectImage" src="/image/fun-weather.png" alt="image-product"></img>
                    </td>
                    <td>{item.name}</td>
                    <td>Rp. 10.000</td>
                </tr>
            )
        })
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
                                        {loopProduct}
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
                                                <Button variant="primary" type="submit" onClick={this.snapMidtrans}>
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
                                                <p>Enter your coupon code if you have one.</p>
                                                <p style={{color:'#FF0000'}}>No coupon has been entered</p>
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
