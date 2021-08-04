import { envConfig } from '@infrastructure/envConfig'
import { getFormattedDateNumber } from '@moduleUtils/dateUtils'
import dayjs from 'dayjs'

export class APIUrlProvider {
    baseUrl = `${envConfig.API_URL}`

    searchUrl = () => `${this.baseUrl}/search`

    treatmentsUrl = clinicId =>
        `${this.baseUrl}/clinics/${clinicId}/client-treatments`

    bookingUrl = () => `${this.baseUrl}/bookings`

    bookingDetailsUrl = id => `${this.baseUrl}/bookings/${id}`

    practitionersUrl = clinicId =>
        `${this.baseUrl}/clinics/${clinicId}/client-practitioners`

    timeSlotsUrl = (date, treatmentId, clinicId, practitionerId) => {
        const selectedDate = dayjs(date)
        const year = selectedDate.get('year')
        const month = getFormattedDateNumber(selectedDate.get('month') + 1)

        let url = `${this.baseUrl}/timeslots?year=${year}&month=${month}&treatment_id=${treatmentId}&clinic_id=${clinicId}`

        if (practitionerId) {
            url = `${url}&practitioner_id=${practitionerId}`
        }

        return url
    }

    cancelBookingUrl = bookingId => `${this.bookingUrl()}/${bookingId}/cancel`
}
