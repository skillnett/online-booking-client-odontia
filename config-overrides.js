const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@store': 'src/store',
        '@containers': 'src/containers',
        '@shared': 'src/shared',
        '@svg': 'src/shared/svg',
        '@infrastructure': 'src/infrastructure',
        '@moduleHocs': 'online-booking-client-core/src/hocs',
        '@moduleUtils': 'online-booking-client-core/src/utils',
        '@moduleI18n': 'online-booking-client-core/src/i18n',
    })(config)

    return config
}
