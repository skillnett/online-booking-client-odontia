import React, { useState } from 'react'
import { ImageSources } from '@shared/constants/imageSources'
import { translate } from '@moduleUtils/translationUtils'
import {
    PractitionerCard,
    PractitionerImage,
    PractitionerName,
    PractitionerPickerField,
    PractitionerPickerList,
    PractitionerPosition,
} from '../styledComponents'
import Box from '@material-ui/core/Box'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { MaterialIcon } from '@shared/components/MaterialIcon'

export const PractitionersDropdown = ({
    practitionersList,
    dropdownPractitioner,
    setDropdownPractitioner,
}) => {
    const practitionerText =
        dropdownPractitioner?.name || translate('choosePractitioner')

    const [dropdownOpened, setDropdownOpened] = useState(false)

    const toggleDropdown = () => setDropdownOpened(!dropdownOpened)

    const handlePractitionerClick = practitioner => () =>
        setDropdownPractitioner(practitioner)

    return (
        <PractitionerPickerField
            onClick={toggleDropdown}
            opened={dropdownOpened}
        >
            <Box display="flex" justifyContent="space-between">
                {practitionerText}
                <MaterialIcon Icon={KeyboardArrowDownIcon} />
            </Box>

            <PractitionerPickerList opened={dropdownOpened}>
                {practitionersList.map(practitioner => {
                    const { id, name, title, image } = practitioner

                    return (
                        <PractitionerCard
                            key={id}
                            onClick={handlePractitionerClick(practitioner)}
                        >
                            <PractitionerImage
                                src={image || ImageSources.defaultAvatarSrc}
                                alt="avatar"
                            />
                            <div>
                                <PractitionerName>{name}</PractitionerName>
                                <PractitionerPosition>
                                    {title}
                                </PractitionerPosition>
                            </div>
                        </PractitionerCard>
                    )
                })}
            </PractitionerPickerList>
        </PractitionerPickerField>
    )
}
