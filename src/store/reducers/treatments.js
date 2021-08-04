import typeToReducer from 'type-to-reducer'
import Axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { baseActions } from '@store/baseActions'
import { APIUrlProvider } from '@store/apiUrlProviders/APIUrlProvider'

const apiUrlProvider = new APIUrlProvider()

const initialState = {
    loading: false,
    categories: [],
    selectedTreatmentId: {},
}

// ACTIONS
export const getTreatments = createAction('GET_TREATMENTS', clinicId => {
    const url = apiUrlProvider.treatmentsUrl(clinicId)

    return {
        payload: Axios.get(url),
    }
})

export const saveTreatment = createAction('SAVE_TREATMENT', treatment => ({
    payload: treatment,
}))

// REDUCERS
const reducer = {
    [getTreatments]: {
        ...baseActions,
        FULFILLED: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                categories: payload.data.categories,
            }
        },
    },
    [saveTreatment]: (state, { payload }) => ({
        ...state,
        selectedTreatment: payload,
    }),
}

export default typeToReducer(reducer, initialState)
