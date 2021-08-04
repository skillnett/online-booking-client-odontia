import React from 'react'
import StyledCheckbox from '@shared/components/form/StyledCheckbox'
import Box from '@material-ui/core/Box'
import { translate } from '@utils/translationUtils'

export const ClientFormCheckboxes = () => {
    return (
        <Box pl={2} marginY={2}>
            <StyledCheckbox
                isChecked
                handleChange={() => {}}
                name="checkbox--test"
                label={translate('fearOfDentist')}
            />
            <StyledCheckbox
                isChecked
                handleChange={() => {}}
                name="checkbox--test"
                label={translate('emailApprove')}
            />
            <StyledCheckbox
                isChecked
                handleChange={() => {}}
                name="checkbox--test"
                label={translate('earlierTimeslots')}
            />
            <StyledCheckbox
                isChecked
                handleChange={() => {}}
                name="checkbox--test"
                label={translate('consentToDataProcessing')}
            />
        </Box>
    )
}
