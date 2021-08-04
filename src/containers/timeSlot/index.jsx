import React, { useEffect, useState } from 'react'
import { AppHeader } from '@shared/components/appHeader/AppHeader'
import { translate } from '@moduleUtils/translationUtils'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import updateLocale from 'dayjs/plugin/updateLocale'
import { AppLayout } from '@shared/components/appLayout/AppLayout'
import { PrimaryButton } from '@shared/components/buttons/PrimaryButton'
import Box from '@material-ui/core/Box'
import { DatePicker } from './components/DatePicker'
import { TimePicker } from './components/TimePicker'
import { PractitionersDropdown } from './components/PractitionersDropdown'
import { withConnectedStore } from '@moduleHocs/withConnectedStore'
import {
    getPractitioners,
    getTimeSlots,
    saveTimeSlotData,
} from '@store/reducers/timeSlots'
import { PractitionerPicker } from './components/PractitionerPicker'

dayjs.extend(updateLocale)
dayjs.extend(utc)

dayjs.updateLocale('en', {
    weekStart: 1,
})

const TimeSlot = ({
    store,
    dispatch,
    activeStep,
    increaseStep,
    decreaseStep,
}) => {
    const { loading, timeSlots, practitioners } = store.timeSlots
    const { id, name } = store.clinics.selectedClinic
    const treatmentId = store.treatments.selectedTreatment.id

    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [dropdownPractitioner, setDropdownPractitioner] = useState(
        practitioners[0]
    )
    const [selectedMonthDate, setSelectedMonthDate] = useState(new Date())
    const [availableTimeSlots, setAvailableTimeSlots] = useState([])
    const [selectedPractitioner, setSelectedPractitioner] = useState({})
    const [
        practitionersForSelectedTimeSlot,
        setPractitionersForSelectedTimeSlot,
    ] = useState([])

    const handleDateChange = date => {
        const hasTimeSlots = !!Object.keys(timeSlots).length

        if (hasTimeSlots) {
            const day = dayjs(date).get('date')
            const slots = timeSlots[day]

            setSelectedDate(date)

            if (slots) {
                setAvailableTimeSlots(Object.keys(timeSlots[day]))
            }
        }
    }

    const disableDates = date => {
        const day = dayjs(date).get('date')
        const isDisabled = !timeSlots[day]

        return isDisabled
    }

    const isDisabledBtn =
        !selectedDate || !selectedTime || !selectedPractitioner.id

    const handleNext = () => {
        const day = dayjs(selectedDate).get('date')
        const slots = timeSlots[day][selectedTime].items
        const slot = slots.find(
            ({ practitioner }) => practitioner.id === selectedPractitioner.id
        )

        dispatch(saveTimeSlotData(slot))
        increaseStep()
    }

    const resetPickers = () => {
        setSelectedTime('')
        setSelectedPractitioner({})
    }

    useEffect(() => {
        dispatch(getPractitioners(id))
    }, [])

    useEffect(() => {
        dispatch(getTimeSlots(selectedMonthDate, treatmentId, id))
        resetPickers()
    }, [selectedMonthDate])

    useEffect(() => {
        resetPickers()
    }, [selectedDate])

    useEffect(() => {
        resetPickers()
        setSelectedDate('')

        dispatch(
            getTimeSlots(
                selectedMonthDate,
                treatmentId,
                id,
                dropdownPractitioner?.id
            )
        )
    }, [dropdownPractitioner])

    useEffect(() => {
        if (selectedTime) {
            const day = dayjs(selectedDate).get('date')
            const practitioners = timeSlots[day][selectedTime].items.map(
                ({ practitioner }) => practitioner
            )

            setPractitionersForSelectedTimeSlot(practitioners)
        } else {
            setPractitionersForSelectedTimeSlot([])
        }
    }, [selectedTime])

    return (
        <AppLayout loading={loading}>
            <AppHeader {...{ activeStep, decreaseStep }} headerText={name} />

            <PractitionersDropdown
                {...{
                    practitionersList: practitioners,
                    dropdownPractitioner,
                    setDropdownPractitioner,
                }}
            />

            <Box mt={6}>
                <DatePicker
                    {...{
                        selectedDate,
                        disableDates,
                        handleDateChange,
                        setSelectedMonthDate,
                    }}
                />

                <TimePicker
                    {...{
                        selectedTime,
                        selectedDate,
                        setSelectedTime,
                        selectedMonthDate,
                        timeSlots: availableTimeSlots,
                    }}
                />

                <PractitionerPicker
                    selectedPractitioner={selectedPractitioner}
                    practitioners={practitionersForSelectedTimeSlot}
                    setSelectedPractitioner={setSelectedPractitioner}
                />
            </Box>

            <Box mt={4} display="flex" justifyContent="center">
                <PrimaryButton
                    onClick={handleNext}
                    text={translate('next')}
                    disabled={isDisabledBtn}
                />
            </Box>
        </AppLayout>
    )
}

export default withConnectedStore(TimeSlot)
