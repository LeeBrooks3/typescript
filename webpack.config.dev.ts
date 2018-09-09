import config from './webpack.config';

const BundleAnalyzerPlugin: any = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // tslint:disable-line no-var-requires max-line-length

config.plugins.push(new BundleAnalyzerPlugin());

export default config;
