import React from 'react'
import {Nav,Tab,Form,Button} from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'

function TabNav({deauthenticate}) {

    function logout() {
        deauthenticate()
        .then(data=>{
            console.log(data);
            Router.push('/home')
        })
    }

    return (
        <Nav defaultActiveKey="/account" className="flex-column">
            <Link href="/account" ><a className="link-acc active-link">Edit Profile</a></Link>
            <Link href="/account/change-password"><a className="link-acc">Change Password</a></Link>
            <Link href="/account/orders" ><a className="link-acc">Orders</a></Link>
            <Link href="/account/downloads" ><a className="link-acc">Downloads</a></Link>
            <Link href="/account/wishlist" ><a className="link-acc">Wishlist</a></Link>
            <p onClick={logout} className="link-acc">Logout</p>
        </Nav>
    )
}


const mapDispatchToProps = dispatch => {
    return {
      deauthenticate : () => dispatch(action.deauthenticate())
    }
}


export default connect(null,mapDispatchToProps)(TabNav)
