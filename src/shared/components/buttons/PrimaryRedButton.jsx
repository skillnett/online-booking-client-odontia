import React from 'react'
import { StyledPrimaryRedButton } from './styledComponents'

export const PrimaryRedButton = ({ text, onClick, disabled }) => (
    <StyledPrimaryRedButton variant="contained" {...{ onClick, disabled }}>
        {text}
    </StyledPrimaryRedButton>
)
