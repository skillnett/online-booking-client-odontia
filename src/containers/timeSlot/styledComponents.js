import styled from '@emotion/styled'
import {
    CenteredFlex,
    CenteredVerticalFlex,
} from '@shared/components/styledComponents'
import { Colors } from '@shared/constants/colors'

const TimeSlotsWrapper = styled.div`
    background-color: ${Colors.green[100]};
    border-radius: 12px;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`

const TimeSlot = styled.div`
    text-align: center;
    margin: 3px;
    width: 18%;
    padding: 5px 7px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid
        ${({ selected }) => (selected ? 'transparent' : Colors.border)};
    background-color: ${({ selected }) =>
        selected ? Colors.green[300] : 'transparent'};
    font-size: 14px;
    transition: 0.2s ease;
    font-weight: 600;
`

const PractitionerPickerField = styled.div`
    background-color: ${Colors.green[100]};
    padding: 7px 10px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 12px;
    position: absolute;
    z-index: 9;
    width: 100%;
    transition: 0.2s ease all;
    max-height: ${({ opened }) => (opened ? 'none' : '35px')};
    min-height: ${({ opened }) => (opened ? '100px' : '35px')};
    overflow: ${({ opened }) => (opened ? 'initial' : 'hidden')};
    box-shadow: ${({ opened }) =>
        opened ? '0px 5px 8px 0px rgba(34, 60, 80, 0.2)' : 'none'};
`

const PractitionerPickerList = styled.div`
    opacity: ${({ opened }) => (opened ? '1' : '0')};
    transition: 0.5s ease all;
`

const PractitionerCard = styled.div`
    ${CenteredVerticalFlex};
    padding: 7px 0;
`

const PractitionerImage = styled.img`
    margin-right: 10px;
    width: 50px;
    border-radius: 50%;
`

const PractitionerName = styled.div`
    font-weight: 600;
    font-size: 14px;
`
const PractitionerPosition = styled.div`
    font-size: 12px;
`

const Practitioner = styled.div`
    padding: 16px;
    padding-right: 35px;
    background-color: ${Colors.green[100]};
    border-radius: 12px;
    margin-bottom: 10px;
    ${CenteredFlex};
    justify-content: space-between;
    cursor: pointer;
`

const PractitionerInfo = styled.div`
    ${CenteredVerticalFlex}
`

const PractitionerPoint = styled.div`
    width: 25px;
    height: 25px;
    border: 2px solid ${Colors.border};
    border-radius: 50%;
    margin-left: 5px;
    ${CenteredFlex};

    &::before {
    transition: 0.3s all ease-in-out;
        display: block;
        content: '';
        opacity: ${({ selected }) => (selected ? 1 : 0)};
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background-color: ${Colors.green[300]};
    }
`

export {
    TimeSlot,
    Practitioner,
    PractitionerInfo,
    PractitionerCard,
    TimeSlotsWrapper,
    PractitionerName,
    PractitionerPoint,
    PractitionerImage,
    PractitionerPosition,
    PractitionerPickerList,
    PractitionerPickerField,
}
