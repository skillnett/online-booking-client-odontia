import styled from '@emotion/styled'
import { CenteredFlex } from '@shared/components/styledComponents'
import { Colors } from '@shared/constants/colors'

const Text = styled.p`
    font-size: ${({ fontsize }) => fontsize || 16}px;
    margin: 0;
    margin-bottom: ${({ mb }) => mb || 0}px;
    text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`

const PractitionerWrapper = styled.div`
    background-color: ${Colors.green[300]};
    border-radius: 20px;
    padding: 20px;
    flex-direction: column;
    margin-bottom: 26px;
    ${CenteredFlex};
`

const PractitionerImg = styled.img`
    border-radius: 50%;
    margin: 16px 0;
    max-width: 120px;
    min-width: 120px;
    max-height: 120px;
`

const PhoneNumber = styled.a`
    color: ${Colors.text};
    margin-bottom: 15px;
    display: block;

    svg {
        font-size: 18px;
        margin-right: 3px;
    }
`

const ModalButtonsWrapper = styled.div`
    flex-direction: column;
    ${CenteredFlex};

    button {
        width: 200px;
        margin-top: 10px;
    }
`

export {
    Text,
    PhoneNumber,
    PractitionerImg,
    PractitionerWrapper,
    ModalButtonsWrapper,
}
