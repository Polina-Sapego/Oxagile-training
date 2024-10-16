const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'components/')
        },
        extensions: ['.js', '.jsx', '.json'],
    },
}
