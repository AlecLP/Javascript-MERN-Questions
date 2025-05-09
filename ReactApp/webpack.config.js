//entry point (file name + path) ==> next the module dependencies
//default config - src/index.js
//once - minification, transpilation, reference resoultion, bundling is done
//output path and the name of the file <bundle.js>
//default output path od distribution folder => dist
//all modules that webpack is dependent on is termed as loaders needed

const HtmlWebpackPlugin = require("html-webpack-plugin")
let path = require("path")
//HtmlWebpackPlugin = require("html-webpack-plugin") //to load the index html on request

config = {
    output: {
        path : path.join(__dirname, '/dist'), //dist - distribution
        filename: 'bundle.js' //the file name will be bundle.js
    },
    //webpack 5 comes with devserver which loads in development mode
    devServer: {
        port: 9090, //localhost:9090
        historyApiFallback: true //localhost:9090/user - works as a server to respond with index.html for any request
    },
    //Rules of how webpack will take our files, compile & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jph|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})] //localhost:900 - loads this html
}
module.exports = config