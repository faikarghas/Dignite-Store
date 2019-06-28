import React from 'react'
import '../sass/main.scss'

const index = () => {
    return (
        <React.Fragment>
            <div className="comingsoon">
                <header>
                    <img src="../static/image/logo.png" width="50px" height="50px"/>
                </header>
                <div className="cs">
                    <h1>Coming <br/> Soon</h1>
                    <p>The most anticipated digital products store.</p>
                    <div>
                        <input className="input_notify" placeholder="Your Email Address"/>
                        <button>NOTIFY ME</button>
                    </div>
                </div>
                {/* <div className="myborder1"></div>
                <div className="social">
                    <ul>
                        <li><img src="../static/image/socialicons/fb-white.png" width="30px" height="30px"/></li>
                        <li><img src="../static/image/socialicons/instagram-white.png" width="30px" height="30px"/></li>
                        <li><img src="../static/image/socialicons/twitter-white.png" width="30px" height="30px"/></li>
                    </ul>
                </div>
                <div className="myborder2"></div> */}
            </div>
        </React.Fragment>
    )
}

export default index