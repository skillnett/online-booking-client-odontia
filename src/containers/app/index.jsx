import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { AppRoute } from '@shared/components/appRoute/AppRoute'
import { Routes } from '@shared/constants/routes'
import OnlineBooking from '@containers/onlineBooking/index'
import { toastConfig } from '@utils/notificationUtils'
import { toast } from 'react-toastify'
import BookingResults from '@containers/bookingResults/index'

const App = () => {
    useEffect(() => {
        toast.configure(toastConfig)
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <AppRoute
                    path={Routes.onlineBooking}
                    component={OnlineBooking}
                    exact
                />
                <AppRoute
                    path={Routes.bookingResults}
                    component={BookingResults}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
