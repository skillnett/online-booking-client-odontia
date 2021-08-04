import { translate } from '@moduleUtils/translationUtils'

export const ClientFormConfig = [
    {
        id: 0,
        label: translate('phoneNumber'),
        fieldProps: {
            name: 'phone',
        },
    },
    {
        id: 1,
        label: translate('firstName'),
        fieldProps: {
            name: 'first_name',
        },
    },
    {
        id: 2,
        label: translate('lastName'),
        fieldProps: {
            name: 'last_name',
        },
    },
    {
        id: 3,
        label: translate('email'),
        fieldProps: {
            name: 'email',
        },
    },
    {
        id: 4,
        label: translate('socialSecurityNumber'),
        message: translate('dataEncrypted'),
        fieldProps: {
            name: 'ssn',
        },
    },
]
