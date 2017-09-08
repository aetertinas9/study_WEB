module.exports= {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test:/.js$/,
                loader:'babel-loader',
                exclude:/(node_modules|bower_componetns)/,
                query:{
                    presets:['es2015']
                }
            }
        ]
    }
};
