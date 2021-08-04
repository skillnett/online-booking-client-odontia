import styled from '@emotion/styled'
import { CenteredVerticalFlex } from '@shared/components/styledComponents'
import { Colors } from '@shared/constants/colors'

const AccordionTreatmentItem = styled.div`
    background-color: ${Colors.green[100]};
    margin: 10px 0;
    border-radius: 16px;
    cursor: pointer;
    overflow: hidden;
`

const TreatmentHeader = styled.div`
    ${CenteredVerticalFlex};
    justify-content: space-between;
    background-color: ${Colors.green[300]};
    padding: 10px 16px;
    font-weight: 600;
`

const AccordionTreatmentInfo = styled.div`
    ${CenteredVerticalFlex};
    justify-content: space-between;
    padding: 10px 16px;
`

const TreatmentDesc = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
`

const ShowMore = styled.div`
    cursor: pointer;
    font-size: 13px;
    text-decoration: underline;
    margin-top: 10px;
`

const TreatmentTitle = styled.h5`
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0;
`

const TreatmentSubTitle = styled.p`
    text-align: center;
`

export {
    ShowMore,
    TreatmentDesc,
    TreatmentTitle,
    TreatmentHeader,
    TreatmentSubTitle,
    AccordionTreatmentItem,
    AccordionTreatmentInfo,
}
