import './i18n/i18n'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from '@store/store'

import 'sanitize.css/sanitize.css'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

import App from '@containers/app'

const initialState = window.initialReduxState
const store = configureStore(history, initialState)

const rootElement = document.getElementById('root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    rootElement
)
