export const baseActions = {
    PENDING: state => ({
        ...state,
        loading: true,
    }),
    REJECTED: state => ({
        ...state,
        loading: false,
    }),
}
