import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';

const app = express();

// set the static diretory
app.use(express.static('public'));

app.get('*', (req, res) => {
    // generate string
    const htmlMarkup = renderToString(<App/>);
    // send browser
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>react-ssr</title>
            <link rel="stylesheet" href="/css/main.css">
            <script src="/bundle.js"></script>
        </head>
        <body>
            <div id="root">${htmlMarkup}</div>
        </body>
        </html>
    `)
})

app.listen(3000, () => {
    console.log('server is listening');
})