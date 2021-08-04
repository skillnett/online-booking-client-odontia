import { Button, withStyles } from '@material-ui/core'
import { Colors } from '@shared/constants/colors'

const btnRoot = {
    minWidth: 145,
    boxShadow: 'none',
    fontSize: 14,
    padding: '7px 16px',
    backgroundColor: Colors.green[300],
    textTransform: 'initial',
    borderRadius: 4,
    color: Colors.text,
    '&:hover': {
        backgroundColor: Colors.green[200],
    },
    '&:disabled': {
        backgroundColor: Colors.border,
    },
}

export const StyledPrimaryButton = withStyles({
    root: btnRoot,
})(Button)

export const StyledPrimaryRedButton = withStyles({
    root: {
        ...btnRoot,
        backgroundColor: Colors.red,
        color: Colors.white,
        '&:hover': {
            backgroundColor: 'rgba(252,0,0,0.6)',
        },
    },
})(Button)

export const StyledSecondaryButton = withStyles({
    root: {
        minWidth: 145,
        boxShadow: 'none',
        fontSize: 14,
        padding: '7px 16px',
        backgroundColor: Colors.white,
        textTransform: 'initial',
        borderRadius: 4,
        color: Colors.text,
        '&:hover': {
            backgroundColor: Colors.white,
        },
        '&:disabled': {
            backgroundColor: Colors.border,
        },
    },
})(Button)
