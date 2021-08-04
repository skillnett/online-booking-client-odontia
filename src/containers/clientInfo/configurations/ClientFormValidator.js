import { string, object } from 'yup'

export const ClientFormValidator = object().shape({
    phone: string().required('Phone Number is required'),
    first_name: string().required('First Name is required'),
    last_name: string().required('Last Name is required'),
    email: string().required('E-mail is required'),
    ssn: string().required(
        'Social Security Number is required'
    ),
})
