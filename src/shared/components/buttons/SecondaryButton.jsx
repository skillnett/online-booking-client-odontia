import React from 'react'
import { StyledSecondaryButton } from './styledComponents'

export const SecondaryButton = ({ text, onClick, disabled }) => (
    <StyledSecondaryButton variant="contained" {...{ onClick, disabled }}>
        {text}
    </StyledSecondaryButton>
)
