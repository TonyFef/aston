const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@env': 'src/env',
        '@hoc': 'src/hoc',
        '@utils': 'src/utils',
        '@pages': 'src/pages',
    })(config);

    return config;
}