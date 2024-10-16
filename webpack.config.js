const { rules } = require('./config/build/webpack.loader');
const { plugins } = require('./config/build/webpack.plugins');
const { devServer } = require('./config/build/webpack.devServer');
const buildWebpack = require('./config/build/buildWebpack');
const {resolve} = require('./config/build/webpack.resolvers')

module.exports = {
    ...buildWebpack,
    module: {
        rules: rules,
    },
    plugins: plugins,
    devServer: devServer,
    resolve: resolve
};