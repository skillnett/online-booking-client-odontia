import React from 'react'
import { MaterialIcon } from '@shared/components/MaterialIcon'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import { PhoneNumber, Text } from '../styledComponents'

export const HowArrive = ({ clinic }) => {
    const { name, address1, zip, city, phone } = clinic

    return (
        <>
            <Text mb={3}>{name}</Text>
            <Text mb={3}>{`${address1}, ${zip} ${city}`}</Text>

            <PhoneNumber href={`tel:${phone}`}>
                <MaterialIcon Icon={LocalPhoneIcon} />
                {'380680557790'}
            </PhoneNumber>
        </>
    )
}
