import React from 'react'
import { TimeSlot, TimeSlotsWrapper } from '../styledComponents'
import dayjs from 'dayjs'

export const TimePicker = ({
    timeSlots,
    selectedTime,
    selectedDate,
    setSelectedTime,
    selectedMonthDate,
}) => {
    const isSameMonth =
        dayjs(selectedDate).get('month') ===
        dayjs(selectedMonthDate).get('month')

    const needShowPicker = isSameMonth && selectedDate && timeSlots.length

    if (needShowPicker) {
        return (
            <TimeSlotsWrapper>
                {timeSlots.map(slot => (
                    <TimeSlot
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        selected={slot === selectedTime}
                    >
                        {slot}
                    </TimeSlot>
                ))}
            </TimeSlotsWrapper>
        )
    }

    return null
}
