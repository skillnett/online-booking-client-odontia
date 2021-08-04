import React from 'react'
import { LoaderContentWrapper, LoaderWrapper } from './styledComponents'
import CircularProgress from '@material-ui/core/CircularProgress'

export const Loader = ({ children, loading }) => (
    <LoaderContentWrapper>
        {loading && (
            <LoaderWrapper>
                <CircularProgress />
            </LoaderWrapper>
        )}

        {children}
    </LoaderContentWrapper>
)
