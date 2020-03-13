import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';
import App from 'next/app';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        // Resolution order
        //
        // On the server:
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. document.getInitialProps
        // 4. app.render
        // 5. page.render
        // 6. document.render
        //
        // On the server with error:
        // 1. document.getInitialProps
        // 2. app.render
        // 3. page.render
        // 4. document.render
        //
        // On the client
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. app.render
        // 4. page.render

        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />),
        });

        return {
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()], 
        }
    }
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* OPEN GRAP */}

                    {/* favicon */}
                    <link rel="shortcut icon" href="../static/image/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="../static/image/favicon.ico" type="image/x-icon"></link>
                    {/* bootstrap */}
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossOrigin="anonymous" />
                    {/* slider slick */}
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    {/* Import CSS for nprogress */}
                    <link rel='stylesheet' type='text/css' href='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
                    <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-asNY1L7yi37gWth1"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}


