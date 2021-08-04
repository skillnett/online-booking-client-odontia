import React from 'react'
import ClinicSearch from '@containers/clinicSearch/index'
import Treatment from '@containers/treatment/index'
import TimeSlot from '@containers/timeSlot/index'
import ClientInfo from '@containers/clientInfo/index'
import { BookingStepsEnum } from './BookingStepsEnum'

class BookingStepsFactory {
    list = {
        [BookingStepsEnum.Clinic]: ClinicSearch,
        [BookingStepsEnum.Treatment]: Treatment,
        [BookingStepsEnum.TimeSlot]: TimeSlot,
        [BookingStepsEnum.ClientInfo]: ClientInfo,
    }

    getActiveStepComponent(step, options) {
        const ActiveStepComponent = this.list[step]

        return <ActiveStepComponent {...options} />
    }
}

export const bookingStepsFactory = new BookingStepsFactory()
