import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';

class MyApp extends App {

    // handler refresh back button history
    componentDidMount() {
        Router.beforePopState(({as}) => {
          location.href = as;
        });
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                {/* <Provider store={reduxStore}> */}
                    <Component {...pageProps} />
                {/* </Provider> */}
            </Container>
        )
    }
}

export default MyApp
