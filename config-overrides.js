const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@store': 'src/store',
        '@containers': 'src/containers',
        '@shared': 'src/shared',
        '@utils': 'src/utils',
        '@svg': 'src/shared/svg',
        '@infrastructure': 'src/infrastructure',
        '@hocs': 'src/hocs',
    })(config)

    return config
}
