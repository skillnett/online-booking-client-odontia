import React from 'react'
import { ImageSources } from '@shared/constants/imageSources'
import { translate } from '@utils/translationUtils'
import { SecondaryButton } from '@shared/components/buttons/SecondaryButton'
import { PractitionerImg, PractitionerWrapper, Text } from '../styledComponents'
import dayjs from 'dayjs'
import Box from '@material-ui/core/Box'

export const PractitionerSection = ({ toggleModal, bookingDetails }) => {
    const {
        start,
        practitioner: { name, image },
    } = bookingDetails

    const treatmentDate = dayjs(start).format('DD/MM/YYYY HH:mm')

    return (
        <PractitionerWrapper>
            <Text centered={true}>{translate('yourAppointment')}</Text>

            <PractitionerImg
                src={image || ImageSources.defaultAvatarSrc}
                alt="practitioner img"
            />

            <Box fontSize={14}>{translate('checkUpNewPatient')}</Box>
            <Box fontSize={20}>{treatmentDate}</Box>
            <Box fontSize={14} mb={3}>
                {translate('with')} {name}
            </Box>

            <SecondaryButton
                onClick={toggleModal}
                text={translate('cancelRebookAppointment')}
            />
        </PractitionerWrapper>
    )
}
