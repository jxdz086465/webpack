const path = require("path");
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),//入口
    output: {//出口
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /.vue$/,
            loader: 'vue-loader'
        }, {
            test: /.css$/,
            use: ['vue-style-loader', 'css-loader']
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};