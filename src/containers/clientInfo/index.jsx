import React from 'react'
import { AppHeader } from '@shared/components/appHeader/AppHeader'
import { translate } from '@utils/translationUtils'
import { AppLayout } from '@shared/components/appLayout/AppLayout'
import { showErrorMessage } from '@utils/notificationUtils'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from '@shared/components/form/Form'
import { ClientFormConfig } from './configurations/ClientFormConfig'
import { ClientFormValidator } from './configurations/ClientFormValidator'
import { StyledInput } from '@shared/components/form/StyledInput'
import { TextArea } from '@shared/components/form/styledComponents'
import { ClientFormCheckboxes } from './components/ClientFormCheckboxes'
import { withConnectedStore } from '@hocs/withConnectedStore'
import { createBooking } from '@store/reducers/booking'
import { getRouteWithBookingId } from '@utils/routeUtils'
import { Routes } from '@shared/constants/routes'
import { useHistory } from 'react-router'

const ClientInfo = ({ store, dispatch, activeStep, decreaseStep }) => {
    const history = useHistory()

    const { id, name } = store.clinics.selectedClinic
    const { end, start, practitioner } = store.timeSlots.selectedTimeSlot
    const treatmentId = store.treatments.selectedTreatment.id
    const loading = store.booking.loading

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ClientFormValidator),
    })

    const onSubmit = async data => {
        try {
            data.clinic_id = id
            data.treatment_id = treatmentId
            data.practitioner_id = practitioner.id
            data.time_start = start
            data.time_end = end

            const res = await dispatch(createBooking(data))

            history.push(
                getRouteWithBookingId(Routes.bookingResults, res.value.data.url)
            )
        } catch (error) {
            showErrorMessage(error)
        }
    }

    return (
        <AppLayout loading={loading}>
            <AppHeader {...{ activeStep, decreaseStep }} headerText={name} />

            <Form
                {...{
                    errors,
                    control,
                    isDisabled: false,
                    buttonText: translate('sendBooking'),
                    onConfirm: handleSubmit(onSubmit),
                    formConfig: ClientFormConfig,
                }}
            >
                <ClientFormCheckboxes />

                <StyledInput
                    label={translate('needToKnow')}
                    fieldProps={{
                        name: 'needToKnow',
                        as: TextArea,
                    }}
                    {...{
                        errors,
                        control,
                        register,
                    }}
                />
            </Form>
        </AppLayout>
    )
}

export default withConnectedStore(ClientInfo)
