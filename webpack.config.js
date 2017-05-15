


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
            contentBase: path.join(__dirname, 'dist'),
            publicPath: '/js'
          },
    
    module: {
        
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: [ "react-hot-loader", "babel-loader"] }
        ]
    }
    
}
