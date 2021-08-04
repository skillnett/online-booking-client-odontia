import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const withConnectedStore = WrappedComponent => {
    const Component = props => {
        const dispatch = useDispatch()
        const store = useSelector(store => store)

        return <WrappedComponent {...props} {...{ dispatch, store }} />
    }
    

    return Component
}
