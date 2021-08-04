import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CenteredVerticalFlex = css`
    display: flex;
    align-items: center;
`

export const CenteredFlex = css`
    ${CenteredVerticalFlex};
    justify-content: center;
`

export const PageContainer = styled.div`
    padding-bottom: 15px;
    margin: 0 7px;
    min-height: 600px;
`
