import React from 'react'
import { FormControlLabel, FormGroup, Box } from '@material-ui/core'
import { StyledMUICheckbox } from './styledComponents'

const StyledCheckbox = ({ isChecked, handleChange, name, label }) => (
    <FormGroup>
        <FormControlLabel
            control={
                <StyledMUICheckbox
                    checked={isChecked}
                    onChange={handleChange}
                    name={name}
                    color="default"
                />
            }
            label={
                <Box component="div" fontSize={14}>
                    {label}
                </Box>
            }
        />
    </FormGroup>
)

export default StyledCheckbox
