import styled from '@emotion/styled'
import { Colors } from '@shared/constants/colors'

const AppHeaderContainer = styled.div`
    height: 111px;
    background-color: ${Colors.white};
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    font-size: 30px;
    position: relative;
`

const AppHeaderTitles = styled.div`
    text-align: center;
    max-width: 80%;
`

const BackButton = styled.div`
    position: absolute;
    left: 10px;
    cursor: pointer;
    padding: 3px;

    svg {
        width: 18px;
    }
`

export { BackButton, AppHeaderTitles, AppHeaderContainer }
