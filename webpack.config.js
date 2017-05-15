/*
    npm i react react-dom --save
    npm i --save-dev webpack
    npm i --save-dev babel-loader babel-core
    npm install --save-dev babel-preset-react
    npm install --save-dev babel-preset-es2015
    npm i --save-dev webpack-dev-server
    npm install --save-dev react-hot-loader
*/


const path = require('path');

module.exports = {
    
    context: path.join(__dirname,'src'),
    
    entry: {
        main: './main.js'
    },
    
    output: {
        path:  path.join(__dirname,'dist/js'),
        publicPath: '/',
        filename: "[name].js",
        library: 'home'
    },
    
    devServer: {
            contentBase: path.join(__dirname, 'dist/js'),
            publicPath: '/'
          },
    
    module: {
        
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: [ "react-hot-loader", "babel-loader"] }
        ]
    }
    
}