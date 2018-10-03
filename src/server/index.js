import React from 'react';
import express from 'express';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import App from '../shared/App';

const app = express();

// set the static diretory
app.use(express.static('public'));

// app.get('*', (req, res) => {
//     // generate string
//     const htmlMarkup = renderToString(<App/>);
//     // send browser
//     res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <title>react-ssr</title>
//             <link rel="stylesheet" href="main.css">
//         </head>
//         <body>
//             <div id="root">${htmlMarkup}</div>
//             <script src="bundle.js"></script>
//         </body>
//         </html>
//     `)
// })

// renderToNodeStream 方法，采用流的形式渐进式渲染，减少ttfb
app.get('*', (req, res) => {
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>react-ssr</title>
            <link rel="stylesheet" href="main.css">
        </head>
        <body>
    `);
    res.write('<div id="root">');
    const stream = renderToNodeStream(<App/>);
    stream.pipe(res, { end: false});
    stream.on('end', () => {
        res.write('<script src="bundle.js"></script>')
        res.write('</div></body></html>');
        res.end();
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('server is listening');
})