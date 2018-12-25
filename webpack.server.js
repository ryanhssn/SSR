const path = require('path');

module.exports = {
    //inform webpack that we are building a bundle for node js instead of a browser
    target: 'node',

    //tell webpack the root file of our server application
    entry: './src/index.js',

    //tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    
    // tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }

}