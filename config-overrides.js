const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@env': 'src/env',
        '@hoc': 'src/hoc',
        '@utils': 'src/utils',
        '@pages': 'src/pages',
        '@images': 'src/images',
        '@hooks': 'src/hooks',
        '@store': 'src/store',
    })(config);

    return config;
}