import React, { useEffect, useState } from 'react'
import { BookingStepsEnum } from '@containers/onlineBooking/configurations/BookingStepsEnum'
import { AppHeader } from '@shared/components/appHeader/AppHeader'
import { AppLayout } from '@shared/components/appLayout/AppLayout'
import { translate } from '@moduleUtils/translationUtils'
import { Text } from './styledComponents'
import { PractitionerSection } from './components/PractitionerSection'
import { useHistory, useParams } from 'react-router'
import { getBookingDetails } from '@store/reducers/booking'
import {
    StyledExpansionPanel,
    StyledAccordionDetails,
    StyledAccordionSummary,
} from '@containers/clinicSearch/styledComponents'
import { getAccordionConfig } from './configurations/AccordionConfig'
import { ConfirmationModal } from './components/ConfirmationModal'
import { PrimaryButton } from '@shared/components/buttons/PrimaryButton'
import { Routes } from '@shared/constants/routes'
import Box from '@material-ui/core/Box'
import { withConnectedStore } from '@moduleHocs/withConnectedStore'
import { withExpandedPanelsFunctionality } from '@moduleHocs/withExpandedPanelsFunctionality'

const BookingResults = ({
    store,
    dispatch,
    scrollTop,
    handleChange,
    renderExpandIcon,
    setExpandedPanels,
}) => {
    const { push } = useHistory()
    const { bookingId } = useParams()
    const { loading, bookingDetails } = store.booking

    const accordionConfig = getAccordionConfig(bookingDetails.treatment.tips)

    const [isCanceledBooking, setCanceledBooking] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    const toggleModal = () => setModalOpen(!isModalOpen)

    const redirectToBooking = () => push(Routes.onlineBooking)

    useEffect(() => {
        dispatch(getBookingDetails(bookingId))
    }, [])

    useEffect(() => {
        scrollTop()
    }, [isCanceledBooking])

    useEffect(() => {
        const configIds = accordionConfig.map(({ id }) => id)
        setExpandedPanels(configIds)
    }, [bookingDetails.treatment.tips?.length])

    if (isCanceledBooking) {
        return (
            <AppLayout loading={loading}>
                <AppHeader
                    activeStep={BookingStepsEnum.Clinic}
                    headerText={bookingDetails.clinic.name}
                />
                <Text centered mb={40}>
                    {translate('appointmentHasBeenCanceled')}
                </Text>

                <Box display="flex" justifyContent="center">
                    <PrimaryButton
                        onClick={redirectToBooking}
                        text={translate('bookNew')}
                    />
                </Box>
            </AppLayout>
        )
    }

    return (
        <AppLayout loading={loading}>
            <AppHeader
                activeStep={BookingStepsEnum.Clinic}
                headerText={bookingDetails.clinic.name}
            />

            <Text mb={20}>{translate('thanksForBooking')}</Text>
            <Text mb={20}>{translate('appointmentConfirmationMsg')}</Text>

            <PractitionerSection {...{ bookingDetails, toggleModal }} />

            <Text mb={20}>{translate('pleasedToWelcome')}</Text>

            {accordionConfig.map(({ id, title, Component }) => (
                <StyledExpansionPanel
                    key={id}
                    onChange={handleChange(id)}
                    defaultExpanded
                >
                    <StyledAccordionSummary expandIcon={renderExpandIcon(id)}>
                        {title}
                    </StyledAccordionSummary>

                    <StyledAccordionDetails>
                        <Component {...bookingDetails} />
                    </StyledAccordionDetails>
                </StyledExpansionPanel>
            ))}

            <ConfirmationModal
                {...{
                    bookingId,
                    isModalOpen,
                    toggleModal,
                    setCanceledBooking,
                    penaltyFee: bookingDetails.clinic.penalty_fee,
                    cancellationTime: bookingDetails.clinic.cancellation_time,
                }}
            />
        </AppLayout>
    )
}

export default withConnectedStore(
    withExpandedPanelsFunctionality(BookingResults)
)
