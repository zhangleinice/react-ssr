const path = require('path');
const __dirname = path.resolve(__dirname, 'public');

// browser
const browser = {
    entry: './src/browser/index.js',
    output: {
        path: __dirname,
        filename: 'browser.js'
    }
}
// server
const server = {
    entry: './src/server/index.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    }
}

module.exports = {
    browser: browser,
    server: server
}