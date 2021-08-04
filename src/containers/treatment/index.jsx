import React, { useEffect } from 'react'
import { AppHeader } from '@shared/components/appHeader/AppHeader'
import { translate } from '@utils/translationUtils'
import {
    StyledExpansionPanel,
    StyledAccordionDetails,
    StyledAccordionSummary,
} from '@containers/clinicSearch/styledComponents'
import { withExpandedPanelsFunctionality } from '@hocs/withExpandedPanelsFunctionality'
import { TreatmentItem } from './components/TreatmentItem'
import { withConnectedStore } from '@hocs/withConnectedStore'
import { AppLayout } from '@shared/components/appLayout/AppLayout'
import { getTreatments, saveTreatment } from '@store/reducers/treatments'
import { TreatmentSubTitle, TreatmentTitle } from './styledComponents'

const Treatment = ({
    store,
    dispatch,
    activeStep,
    increaseStep,
    decreaseStep,
    handleChange,
    renderExpandIcon,
    setExpandedPanels,
}) => {
    const { categories, loading } = store.treatments
    const { id, name, phone } = store.clinics.selectedClinic

    useEffect(() => {
        const categoriesIds = categories.map(({ id }) => id)
        setExpandedPanels(categoriesIds)
    }, [categories.length])

    const onTreatmentClick = treatment => () => {
        dispatch(saveTreatment(treatment))
        increaseStep()
    }

    useEffect(() => {
        dispatch(getTreatments(id))
    }, [])

    return (
        <AppLayout loading={loading}>
            <AppHeader {...{ activeStep, decreaseStep }} headerText={name} />

            <TreatmentTitle>{translate('chooseTreatment')}</TreatmentTitle>
            {phone && (
                <TreatmentSubTitle>
                    {translate('treatmentAcuteQuestion')}
                    <br />
                    {translate('callUs')} {phone}
                </TreatmentSubTitle>
            )}

            {categories.map(({ id, name, treatments }) =>
                treatments?.length ? (
                    <StyledExpansionPanel
                        key={id}
                        onChange={handleChange(id)}
                        defaultExpanded
                    >
                        <StyledAccordionSummary
                            expandIcon={renderExpandIcon(id)}
                        >
                            {name}
                        </StyledAccordionSummary>

                        <StyledAccordionDetails>
                            <div>
                                {treatments?.map(item => (
                                    <TreatmentItem
                                        key={item.id}
                                        treatment={item}
                                        onTreatmentClick={onTreatmentClick}
                                    />
                                ))}
                            </div>
                        </StyledAccordionDetails>
                    </StyledExpansionPanel>
                ) : null
            )}
        </AppLayout>
    )
}

export default withConnectedStore(withExpandedPanelsFunctionality(Treatment))
