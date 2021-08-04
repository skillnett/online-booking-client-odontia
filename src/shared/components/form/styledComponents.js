import styled from '@emotion/styled'
import { Colors } from '@shared/constants/colors'
import { Checkbox, withStyles } from '@material-ui/core'

const InputError = styled.div`
    font-size: 14px;
    color: red;
`

const InputMessage = styled.div`
    font-size: 11px;
    color: ${Colors.border};
    font-weight: 500;
    line-height: 1.2;
    margin-left: 7px;
    margin-top: 10px;
`

const InputWrapper = styled.div`
    position: relative;
`

const InputLabel = styled.span`
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 600;
`

const Input = styled.input`
    padding: 10px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 10px;
    outline: none;
    background-color: ${Colors.green[100]};
`

const TextArea = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
    min-height: 120px;
`

const StyledMUICheckbox = withStyles({
    root: {
        color: Colors.green[300],
        fontSize: 16,
        '&$checked': {
            color: Colors.green[300],
        },
    },
    checked: {},
})(Checkbox)

export {
    Input,
    TextArea,
    InputError,
    InputLabel,
    InputWrapper,
    InputMessage,
    StyledMUICheckbox,
}
