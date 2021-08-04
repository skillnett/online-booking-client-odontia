import React from 'react'
import Box from '@material-ui/core/Box'
import {
    Practitioner,
    PractitionerName,
    PractitionerInfo,
    PractitionerPoint,
    PractitionerImage,
    PractitionerPosition,
} from '../styledComponents'
import { ImageSources } from '@shared/constants/imageSources'

export const PractitionerPicker = ({
    practitioners,
    selectedPractitioner,
    setSelectedPractitioner,
}) => {
    if (practitioners.length) {
        return (
            <Box mt={2}>
                {practitioners.map(practitioner => {
                    const { id, name, image, title } = practitioner
                    const isSelected = id === selectedPractitioner.id

                    return (
                        <Practitioner
                            key={id}
                            onClick={() =>
                                setSelectedPractitioner(practitioner)
                            }
                        >
                            <PractitionerInfo>
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
                            </PractitionerInfo>

                            <PractitionerPoint selected={isSelected} />
                        </Practitioner>
                    )
                })}
            </Box>
        )
    }

    return null
}
