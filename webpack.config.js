const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, '.webpack'),
        filename: '[name].js',
    }
    // module: {
    //     loaders: [ ... ]
    // }
};
