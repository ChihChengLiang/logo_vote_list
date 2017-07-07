var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        // path: __dirname,
        path: 'public',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            applicationStyles: 'app/styles/app.css',
            etherScan: 'app/api/etherScan.jsx',
            Nav: 'app/components/Nav.jsx',
            Board: 'app/components/Board.jsx',
            Howto: 'app/components/Howto.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};