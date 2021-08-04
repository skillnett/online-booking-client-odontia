import { translate } from '@moduleUtils/translationUtils'
import { HowArrive } from '../components/HowArrive'
import { Text } from '../styledComponents'
import { BookingAccordionEnum } from './BookingAccordionEnum'

export const getAccordionConfig = (tips = []) => {
    const tipsConfig = tips.map(tip => ({
        ...tip,
        Component: () => <Text>{tip.description}</Text>,
    }))

    return [
        {
            id: BookingAccordionEnum.HowArrive,
            title: translate('howArrive'),
            Component: HowArrive,
        },
        ...tipsConfig,
    ]
}
