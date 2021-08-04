import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createBrowserHistory } from 'history'
import { getReducers } from './reducers'

export const history = createBrowserHistory()

export default function configureStore(history, initialState) {
    const enhancers = []
    const middleware = [thunk, promise, routerMiddleware(history)]

    if (process.env.NODE_ENV === 'development') {
        const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }

    const rootReducer = getReducers(history)
    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    )

    return createStore(rootReducer, initialState, composedEnhancers)
}
