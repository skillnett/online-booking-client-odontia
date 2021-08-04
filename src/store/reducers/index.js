import { combineReducers } from 'redux'
import clinics from './clinics'
import booking from './booking'
import treatments from './treatments'
import timeSlots from './timeSlots'
import { connectRouter } from 'connected-react-router'

export const getReducers = history =>
    combineReducers({
        clinics,
        booking,
        timeSlots,
        treatments,
        router: connectRouter(history),
    })
