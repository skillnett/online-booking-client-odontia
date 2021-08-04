import React from 'react'
import { StyledPrimaryButton } from './styledComponents'

export const PrimaryButton = ({ text, onClick, disabled }) => (
    <StyledPrimaryButton variant="contained" {...{ onClick, disabled }}>
        {text}
    </StyledPrimaryButton>
)
