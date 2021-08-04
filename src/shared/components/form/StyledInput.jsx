import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    Input,
    InputError,
    InputLabel,
    InputWrapper,
    InputMessage,
} from './styledComponents'
import { Controller } from 'react-hook-form'

export const StyledInput = ({
    label,
    errors,
    message,
    element,
    control,
    fieldProps,
}) => {
    const { name, defaultValue, placeholder } = fieldProps

    const { t } = useTranslation()

    const hasError = errors && !!errors[name]

    const FieldComponent = element || Input

    return (
        <InputWrapper>
            {label && <InputLabel>{label}</InputLabel>}

            <Controller
                render={({ field }) => (
                    <FieldComponent
                        {...field}
                        {...fieldProps}
                        placeholder={t(placeholder)}
                    />
                )}
                control={control}
                name={name}
                defaultValue={defaultValue || ''}
            />

            {hasError && <InputError>{errors[name].message}</InputError>}
            {message && <InputMessage>{message}</InputMessage>}
        </InputWrapper>
    )
}
