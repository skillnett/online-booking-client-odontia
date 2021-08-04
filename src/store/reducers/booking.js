import typeToReducer from 'type-to-reducer'
import Axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { baseActions } from '@store/baseActions'
import { getHeaders, getJSONData } from '@utils/reguestUtils'
import { APIUrlProvider } from '@store/apiUrlProviders/APIUrlProvider'
import { baseReducer } from '@store/baseReducers'

const initialState = {
    loading: false,
    bookingDetails: {
        clinic: {},
        treatment: {},
        practitioner: {},
    },
}

const apiUrlProvider = new APIUrlProvider()

// ACTIONS
export const createBooking = createAction('CREATE_BOOKING', data => {
    const url = apiUrlProvider.bookingUrl()
    const formData = getJSONData(data)

    return {
        payload: Axios.post(url, formData, getHeaders()),
    }
})

export const getBookingDetails = createAction('GET_BOOKING_DETAILS', id => ({
    payload: Axios.get(apiUrlProvider.bookingDetailsUrl(id)),
}))

export const cancelBooking = createAction('CANCEL_BOOKING', bookingId => ({
    payload: Axios.post(apiUrlProvider.cancelBookingUrl(bookingId)),
}))

// REDUCERS
const reducer = {
    [createBooking]: baseReducer,
    [cancelBooking]: baseReducer,
    [getBookingDetails]: {
        ...baseActions,
        FULFILLED: (state, { payload }) => ({
            ...state,
            bookingDetails: payload.data,
            loading: false,
        }),
    },
}

export default typeToReducer(reducer, initialState)
