const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');

require('dotenv').config()
const port      = process.env.PORT || 3012;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = app.getRequestHandler();


app.prepare()
.then(()=>{
    const server = express()
    server.use(compression());
    server.use(cookieParser());


    server.get('/account/change-password', (req, res) => {
        const actualPage = '/chpassword'
        return app.render(req, res, actualPage)
    })

    server.get('/account/orders', (req, res) => {
        const actualPage = '/orders'
        return app.render(req, res, actualPage)
    })

    server.get('/account/downloads', (req, res) => {
        const actualPage = '/downloads'
        return app.render(req, res, actualPage)
    })

    server.get('/account/wishlist', (req, res) => {
        const actualPage = '/wishlist'
        return app.render(req, res, actualPage)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err =>{
        if (err) throw err
        console.log(`> Ready on ${port}`);
    })
})
.catch(ex=>{
    console.error(ex.stack);
    process.exit(1)
})
