import React, { useEffect } from 'react'
import { AppHeader } from '@shared/components/appHeader/AppHeader'
import { translate } from '@moduleUtils/translationUtils'
import {
    ClinicName,
    AccordionItem,
    ClinicAddress,
    AccordionItemInfo,
    AccordionItemInfoWrp,
    StyledExpansionPanel,
    StyledAccordionDetails,
    StyledAccordionSummary,
    ArrowWrapper,
} from './styledComponents'
import { ImageSources } from '@shared/constants/imageSources'
import { ArrowRight } from '@shared/svg/index'
import { ClinicSearchField } from './components/ClinicSearchField'
import { withConnectedStore } from '@moduleHocs/withConnectedStore'
import { AppLayout } from '@shared/components/appLayout/AppLayout'
import { withExpandedPanelsFunctionality } from '@moduleHocs/withExpandedPanelsFunctionality'
import { saveClinic } from '@store/reducers/clinics'
import { Text } from '@containers/bookingResults/styledComponents'

const ClinicSearch = ({
    store,
    dispatch,
    activeStep,
    increaseStep,
    handleChange,
    renderExpandIcon,
    setExpandedPanels,
}) => {
    const { regions, loading } = store.clinics

    const onClinicClick = clinic => () => {
        dispatch(saveClinic(clinic))
        increaseStep()
    }

    useEffect(() => {
        const regionsIds = regions.map(({ id }) => id)
        setExpandedPanels(regionsIds)
    }, [regions.length])

    return (
        <AppLayout loading={loading}>
            <AppHeader
                activeStep={activeStep}
                headerText={translate('chooseClinic')}
            />

            <ClinicSearchField />

            {!regions.length && <Text>{translate('noClinicsFound')}</Text>}

            {regions.map(({ id, name, clinics }) => (
                <StyledExpansionPanel
                    key={id}
                    onChange={handleChange(id)}
                    defaultExpanded
                >
                    <StyledAccordionSummary expandIcon={renderExpandIcon(id)}>
                        {name}
                    </StyledAccordionSummary>

                    <StyledAccordionDetails>
                        <div>
                            {clinics.map(clinic => {
                                const { id, zip, city, name, address1 } = clinic

                                return (
                                    <AccordionItem
                                        key={id}
                                        onClick={onClinicClick(clinic)}
                                    >
                                        <AccordionItemInfoWrp>
                                            <img
                                                src={ImageSources.clinicIcon}
                                                alt="clinic ico"
                                            />
                                            <AccordionItemInfo>
                                                <ClinicName>{name}</ClinicName>
                                                <ClinicAddress>
                                                    {`${address1}, ${zip} ${city}`}
                                                </ClinicAddress>
                                            </AccordionItemInfo>
                                        </AccordionItemInfoWrp>

                                        <ArrowWrapper>
                                            <ArrowRight />
                                        </ArrowWrapper>
                                    </AccordionItem>
                                )
                            })}
                        </div>
                    </StyledAccordionDetails>
                </StyledExpansionPanel>
            ))}
        </AppLayout>
    )
}

export default withConnectedStore(withExpandedPanelsFunctionality(ClinicSearch))
