import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './src/index.js',
    mode: 'production',
    optimization: {
        minimize: true,
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};

export default config;
