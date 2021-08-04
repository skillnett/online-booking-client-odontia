import React from 'react'
import {
    AppHeaderContainer,
    AppHeaderTitles,
    BackButton,
} from './styledComponents'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Colors } from '@shared/constants/colors'
import { BookingStepsEnum } from '@containers/onlineBooking/configurations/BookingStepsEnum'
import { MaterialIcon } from '../MaterialIcon'

export const AppHeader = ({ activeStep, headerText, decreaseStep }) => {
    const needBackBtn = activeStep > BookingStepsEnum.Clinic

    return (
        <AppHeaderContainer>
            {needBackBtn && (
                <BackButton onClick={decreaseStep}>
                    <MaterialIcon
                        iconColor={Colors.text}
                        Icon={ArrowBackIosIcon}
                    />
                </BackButton>
            )}

            <AppHeaderTitles>{headerText}</AppHeaderTitles>
        </AppHeaderContainer>
    )
}
