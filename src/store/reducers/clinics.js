import typeToReducer from 'type-to-reducer'
import Axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { baseActions } from '@store/baseActions'
import { APIUrlProvider } from '@store/apiUrlProviders/APIUrlProvider'

const apiUrlProvider = new APIUrlProvider()

const initialState = {
    loading: false,
    regions: [],
    selectedClinic: {},
}

// ACTIONS
export const searchClinics = createAction('SEARCH_CLINICS', data => {
    const url = apiUrlProvider.searchUrl()

    const params = data

    return {
        payload: Axios.get(url, {
            params,
        }),
    }
})

export const saveClinic = createAction('SAVE_CLINIC', clinic => ({
    payload: clinic,
}))

// REDUCERS
const reducer = {
    [searchClinics]: {
        ...baseActions,
        FULFILLED: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                regions: payload.data.regions.map(region => ({
                    ...region,
                    id: region.id || 0,
                })),
            }
        },
    },
    [saveClinic]: (state, { payload }) => ({
        ...state,
        selectedClinic: payload,
    }),
}

export default typeToReducer(reducer, initialState)
