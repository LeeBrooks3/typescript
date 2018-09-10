import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './dist/index.js',
    mode: 'production',
    optimization: {
        minimize: true,
    },
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};

export default config;
