import React from 'react'
import { Loader } from '../loader/Loader'
import { PageContainer } from '../styledComponents'

export const AppLayout = ({ children, loading }) => (
    <PageContainer>
        <Loader loading={loading}>{children}</Loader>
    </PageContainer>
)
