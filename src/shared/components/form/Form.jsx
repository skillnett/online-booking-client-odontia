import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { PrimaryButton } from '../buttons/PrimaryButton'
import { StyledInput } from './StyledInput'

export const Form = ({
    children = null,
    buttonMargin = 2,
    errors,
    control,
    register,
    onConfirm,
    isDisabled,
    buttonText,
    formConfig,
}) => (
    <form>
        <Grid container spacing={1}>
            {formConfig.map(config => (
                <Grid item xs={12} key={config.id}>
                    <StyledInput
                        {...config}
                        {...{
                            errors,
                            control,
                            register,
                        }}
                    />
                </Grid>
            ))}
        </Grid>

        <Box>{children}</Box>

        <Box mt={buttonMargin} display="flex" justifyContent="center">
            <PrimaryButton
                text={buttonText}
                onClick={onConfirm}
                disabled={isDisabled}
            />
        </Box>
    </form>
)
