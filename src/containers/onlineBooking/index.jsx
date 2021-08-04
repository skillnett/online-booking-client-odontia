import React, { useEffect, useState } from 'react'
import { BookingStepsEnum } from './configurations/BookingStepsEnum'
import { bookingStepsFactory } from './configurations/BookingStepsFactory'

const OnlineBooking = ({ scrollTop }) => {
    const [activeStep, setActiveStep] = useState(BookingStepsEnum.Clinic)

    const increaseStep = () => setActiveStep(activeStep + 1)
    const decreaseStep = () => setActiveStep(activeStep - 1)

    useEffect(() => {
        scrollTop()
    }, [activeStep])

    return (
        <div>
            {bookingStepsFactory.getActiveStepComponent(activeStep, {
                activeStep,
                increaseStep,
                decreaseStep,
            })}
        </div>
    )
}

export default OnlineBooking
