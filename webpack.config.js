const path = require('path');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: devMode ? "development" : "production",
    entry: [
        __dirname + '/src/js/app.js',
        __dirname + '/src/scss/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'js/app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};