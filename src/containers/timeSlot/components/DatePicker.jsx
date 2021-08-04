import React from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import { ThemeProvider } from '@material-ui/styles'
import DateJsUtils from '@date-io/dayjs'
import { datePickerTheme } from '../datePickerStyles'

export const DatePicker = ({
    selectedDate,
    disableDates,
    handleDateChange,
    setSelectedMonthDate,
}) => (
    <ThemeProvider theme={datePickerTheme(selectedDate)}>
        <MuiPickersUtilsProvider utils={DateJsUtils}>
            <KeyboardDatePicker
                variant="static"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                onMonthChange={setSelectedMonthDate}
                shouldDisableDate={disableDates}
                disableToolbar
                disablePast
            />
        </MuiPickersUtilsProvider>
    </ThemeProvider>
)
