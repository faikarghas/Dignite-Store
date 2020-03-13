import React from 'react'
import Head from 'next/head'


const index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Dignite Store</title>
            </Head>
            <div className="comingsoon">
                <header> </header>
                <div className="cs">
                    <h1>Coming <br/> Soon</h1>
                    <p>The most anticipated digital products store.</p>
                    <div>
                        <input className="input_notify" placeholder="Your Email Address"/>
                        <button>NOTIFY ME</button>
                    </div>
                </div>
                <div className="ex">
                    <div className="row">
                        <div className="col-4" style={{borderBottom:'1px solid white'}}></div>
                        <div className="col-4" style={{position:'realtive'}}>
                            <ul>
                                <li><img src="/image/SocialIcons/fb-white.png" width="30px" height="30px" alt="logo-fb"/></li>
                                <li><a href="https://www.instagram.com/dignitestudio/" target="_blank"><img src="/image/SocialIcons/instagram-white.png" width="30px" height="30px" alt="logo-ig"/></a></li>
                                <li><img src="/image/SocialIcons/twitter-white.png" width="30px" height="30px" alt="logo-tw"/></li>
                            </ul>
                        </div>
                        <div className="col-4" style={{borderBottom:'1px solid white'}}></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default index