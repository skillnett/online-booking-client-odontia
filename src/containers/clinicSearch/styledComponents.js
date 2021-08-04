import styled from '@emotion/styled'
import {
    Input,
    withStyles,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@material-ui/core'
import { CenteredVerticalFlex } from '@shared/components/styledComponents'
import { Colors } from '@shared/constants/colors'

const StyledExpansionPanel = withStyles(() => ({
    root: {
        boxShadow: 'none',
        '&::before': {
            display: 'none',
        },
        '&.Mui-expanded': {
            margin: 0,
        },
        '& .MuiIconButton-edgeEnd': {
            marginRight: 0,
        },
    },
}))(Accordion)

const StyledAccordionSummary = withStyles(() => ({
    root: {
        padding: 0,
        backgroundColor: Colors.green[300],
        borderRadius: 16,
        paddingLeft: 20,
        marginBottom: 10,
        fontWeight: 600,
        '&.Mui-expanded': {
            minHeight: 40,
        },
        '& .MuiSvgIcon-root': {
            backgroundColor: Colors.white,
            color: Colors.black,
            padding: 2,
            borderRadius: '50%',
        },
    },
    content: {
        fontSize: 18,
        '&.Mui-expanded': {
            margin: '12px 0',
        },
    },
}))(AccordionSummary)

const StyledAccordionDetails = withStyles(() => ({
    root: {
        padding: 0,
        display: 'block',
        marginBottom: 12,
    },
}))(AccordionDetails)

const AccordionItem = styled.div`
    ${CenteredVerticalFlex};
    justify-content: space-between;
    padding: 10px 16px;
    background-color: ${Colors.green[100]};
    margin: 6px 8px 16px;
    border-radius: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.2s ease;

    &:hover {
        background-color: ${Colors.white};
        border: 1px solid ${Colors.border};
    }
`

const AccordionItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const AccordionItemInfoWrp = styled.div`
    ${CenteredVerticalFlex};
`

const ClinicName = styled.span`
    font-size: 18px;
    font-weight: 600;
`

const ClinicAddress = styled.span`
    font-size: 14px;
`

const ArrowWrapper = styled.div`
    width: 12px;
    margin-left: 5px;
`

const StyledSearchInput = withStyles(() => ({
    root: {
        width: '100%',
        marginBottom: 16,
        borderRadius: 16,
        backgroundColor: Colors.green[100],
        padding: 14,
        paddingRight: 0,

        '&::before, &::after': {
            display: 'none',
        },

        '& .MuiButtonBase-root': {
            backgroundColor: Colors.white,
            padding: 5,
            marginRight: 5,
        },
    },
}))(Input)

const StyledSearchInputWrp = styled.div`
    margin: 0 8px;
`

const DisableSearch = styled.div`
    margin-bottom: 10px;
    margin-top: -5px;
`

const DisableSearchMessage = styled.span`
    font-size: 14px;
`

const DisableSearchBtn = styled.span`
    color: ${Colors.green[300]};
    font-weight: 600;
    cursor: pointer;
`

export {
    ClinicName,
    ArrowWrapper,
    DisableSearch,
    ClinicAddress,
    AccordionItem,
    DisableSearchBtn,
    StyledSearchInput,
    AccordionItemInfo,
    DisableSearchMessage,
    StyledSearchInputWrp,
    AccordionItemInfoWrp,
    StyledExpansionPanel,
    StyledAccordionSummary,
    StyledAccordionDetails,
}
