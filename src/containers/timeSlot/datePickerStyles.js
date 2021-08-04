import { createMuiTheme } from '@material-ui/core'
import { Colors } from '@shared/constants/colors'

export const datePickerTheme = selectedDate =>
    createMuiTheme({
        overrides: {
            MuiPickersBasePicker: {
                container: {
                    alignItems: 'center',
                    backgroundColor: Colors.green[100],
                    borderRadius: 12,
                },
                pickerView: { minHeight: 380 },
            },
            MuiButtonBase: {
                root: { backgroundColor: 'transparent' },
            },
            MuiTypography: {
                body1: {
                    fontSize: 16,
                    fontWeight: 600,
                    color: Colors.text,
                },
                body2: { fontSize: 13 },
                caption: {
                    fontSize: 12,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                },
            },
            MuiPickersCalendarHeader: {
                dayLabel: {
                    color: Colors.text,
                    width: 40,
                },
                iconButton: {
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
                switchHeader: {
                    marginTop: -65,
                },
            },
            MuiPickersCalendar: {
                week: { marginBottom: 7 },
            },
            MuiIconButton: {
                root: { borderRadius: 0 },
            },
            MuiPickersDay: {
                day: {
                    color: Colors.text,
                    width: 40,
                    height: 40,
                },
                daySelected: {
                    color: Colors.text,
                    backgroundColor: selectedDate
                        ? Colors.green[300]
                        : 'transparent',
                    '&:hover': {
                        backgroundColor: Colors.green[200],
                    },
                },
                dayDisabled: {
                    color: Colors.border,
                },
            },
        },
    })
