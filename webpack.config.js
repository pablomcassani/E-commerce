const path = require('path');
    
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve()
    },
    devServer: {
        static: path.resolve(),
        compress: true,
        port: 8080,
    },
    mode: 'development'
};