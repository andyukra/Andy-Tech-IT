const path = require('path');

module.exports = {
    mode : 'development',
    entry : path.join(__dirname, 'src'),
    output : {
        path : path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /(\.js|\.jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    devServer : {
        contentBase : path.join(__dirname, 'public')
    }
}