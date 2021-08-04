import { baseActions } from './baseActions'

export const baseReducer = {
    ...baseActions,
    FULFILLED: state => ({
        ...state,
        loading: false,
    }),
}
