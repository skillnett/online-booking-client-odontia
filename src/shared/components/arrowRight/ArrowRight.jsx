import React from 'react'
import { MaterialIcon } from '../MaterialIcon'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { ArrowRightWrapper } from './styledComponents'

export const ArrowRight = (width = 12) => (
    <ArrowRightWrapper width={width}>
        <MaterialIcon Icon={ArrowForwardIosIcon} />
    </ArrowRightWrapper>
)
