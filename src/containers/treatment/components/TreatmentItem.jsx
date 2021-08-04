import React, { useState } from 'react'
import { ArrowWrapper } from '@containers/clinicSearch/styledComponents'
import { ArrowRight } from '@shared/svg/index'
import {
    AccordionTreatmentInfo,
    AccordionTreatmentItem,
    ShowMore,
    TreatmentDesc,
    TreatmentHeader,
} from '../styledComponents'
import { Box, Collapse } from '@material-ui/core'
import { translate } from '@moduleUtils/translationUtils'

export const TreatmentItem = ({ treatment, onTreatmentClick }) => {
    const { title, price, long_description, short_description } = treatment
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = e => {
        e.stopPropagation()
        setExpanded(!expanded)
    }

    return (
        <AccordionTreatmentItem onClick={onTreatmentClick(treatment)}>
            <TreatmentHeader>
                <span>{title}</span>
                <span>{price}</span>
            </TreatmentHeader>

            <AccordionTreatmentInfo>
                <div>
                    <TreatmentDesc>{short_description}</TreatmentDesc>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box mt={2}>
                            <TreatmentDesc>{long_description}</TreatmentDesc>
                        </Box>
                    </Collapse>

                    <ShowMore onClick={handleExpandClick}>
                        {translate(expanded ? 'readLess' : 'readMore')}
                    </ShowMore>
                </div>

                <ArrowWrapper>
                    <ArrowRight />
                </ArrowWrapper>
            </AccordionTreatmentInfo>
        </AccordionTreatmentItem>
    )
}
