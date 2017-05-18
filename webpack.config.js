


const path = require('path');

module.exports = {
    
    context: path.join(__dirname,'src'),
    
    entry: {
        main: './main'
    },
    
    output: {
        path:  path.join(__dirname,'dist/js'),
        publicPath: '/',
        filename: "[name].js",
        library: 'home'
    },
     resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    devServer: {
            contentBase: path.join(__dirname, 'dist'),
            publicPath: '/js'
          },
    
    module: {
        
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: [ "react-hot-loader", "babel-loader"] }
        ]
    }
    
}
