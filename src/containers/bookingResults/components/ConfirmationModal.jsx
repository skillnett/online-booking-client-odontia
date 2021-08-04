import React from 'react'
import { ModalComponent } from '@shared/components/modal/Modal'
import {
    ModalButtonsWrapper,
    Text,
} from '@containers/bookingResults/styledComponents'
import { translate } from '@moduleUtils/translationUtils'
import { PrimaryButton } from '@shared/components/buttons/PrimaryButton'
import { PrimaryRedButton } from '@shared/components/buttons/PrimaryRedButton'
import { withConnectedStore } from '@moduleHocs/withConnectedStore'
import { cancelBooking } from '@store/reducers/booking'

const ConfirmationModal = ({
    dispatch,
    bookingId,
    penaltyFee,
    isModalOpen,
    toggleModal,
    cancellationTime,
    setCanceledBooking,
}) => {
    const handleCancelBooking = async () => {
        try {
            await dispatch(cancelBooking(bookingId))
            toggleModal()
            setCanceledBooking(true)
        } catch (error) {
            showErrorMessage(error)
        }
    }

    return (
        <ModalComponent {...{ isModalOpen, toggleModal }}>
            {!!penaltyFee && (
                <Text centered={true} fontsize={14} mb={16}>
                    {translate('penaltyFeeMessageStart')} {cancellationTime}{' '}
                    {translate('penaltyFeeMessageEnd')} {penaltyFee} NOK.
                </Text>
            )}
            <Text centered={true} fontsize={14} mb={6}>
                {translate('cancelBookingQuestion')}
            </Text>

            <ModalButtonsWrapper>
                <PrimaryButton text={translate('wantToRebook')} />
                <PrimaryRedButton
                    text={translate('wantToCancel')}
                    onClick={handleCancelBooking}
                />
                <PrimaryButton
                    text={translate('goBack')}
                    onClick={toggleModal}
                />
            </ModalButtonsWrapper>
        </ModalComponent>
    )
}

const withStore = withConnectedStore(ConfirmationModal)

export { withStore as ConfirmationModal }
