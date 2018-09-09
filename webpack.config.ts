import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: [
        './src/Http/Clients/Client.js',
        './src/Http/Clients/ClientInterface.js',
        './src/Http/Responses/ResponseInterface.js',
        './src/Models/Model.js',
        './src/Models/ModelInterface.js',
        './src/Repositories/ModelRepository.js',
        './src/Repositories/ModelRepositoryInterface.js',
    ],
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

export default config;
