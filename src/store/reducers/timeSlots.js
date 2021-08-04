import typeToReducer from 'type-to-reducer'
import Axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { baseActions } from '@store/baseActions'
import { APIUrlProvider } from '@store/apiUrlProviders/APIUrlProvider'
import { ImageSources } from '@shared/constants/imageSources'
import { translate } from '@moduleUtils/translationUtils'

const initialState = {
    loading: false,
    timeSlots: {},
    selectedTimeSlot: {},
    practitioners: [],
}

const apiUrlProvider = new APIUrlProvider()

// ACTIONS
export const getTimeSlots = createAction(
    'GET_TIME_SLOTS',
    (date, treatmentId, clinicId, practitionerId = null) => ({
        payload: Axios.get(
            apiUrlProvider.timeSlotsUrl(date, treatmentId, clinicId, practitionerId)
        ),
    })
)

export const getPractitioners = createAction('GET_PRACTITIONERS', clinicId => ({
    payload: Axios.get(apiUrlProvider.practitionersUrl(clinicId)),
}))

export const saveTimeSlotData = createAction('SAVE_TIME_SLOT_DATA', data => ({
    payload: data,
}))

// REDUCERS
const reducer = {
    [getTimeSlots]: {
        ...baseActions,
        FULFILLED: (state, { payload }) => ({
            ...state,
            timeSlots: payload.data,
            loading: false,
        }),
    },
    [saveTimeSlotData]: (state, { payload }) => ({
        ...state,
        selectedTimeSlot: payload,
    }),
    [getPractitioners]: {
        ...baseActions,
        FULFILLED: (state, { payload }) => ({
            ...state,
            practitioners: [
                {
                    id: 0,
                    image: ImageSources.odontiaIcoSrc,
                    name: translate('showAllTimeSlots'),
                    isDefault: true,
                },
                ...payload.data,
            ],
            loading: false,
        }),
    },
}

export default typeToReducer(reducer, initialState)
