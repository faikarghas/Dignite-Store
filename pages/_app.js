import App, { Container } from 'next/app';
import React from 'react';
// import withReduxStore from '../lib/with-redux-store';
import withRedux from 'next-redux-wrapper'
import store, { initializeStore } from '../redux/initStore'
import { Provider } from 'react-redux';
import Router from 'next/router';
import NProgress from 'nprogress'

import '../sass/main.scss'


// NProgress
Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    // NProgress
    // static async getInitialProps ({ Component, router, ctx }) {
    //     let pageProps = {}
    //     if (Component.getInitialProps) {
    //       pageProps = await Component.getInitialProps(ctx)
    //     }
    //     return { pageProps }
    // }

    // handler refresh back button history
    componentDidMount() {
        Router.beforePopState(({as}) => {
          location.href = as;
        });
    }
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(initializeStore)(MyApp)
