import React, { useState } from 'react'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

export const withExpandedPanelsFunctionality = WrappedComponent => {
    const Component = props => {
        const [expandedPanels, setExpandedPanels] = useState([])

        const handleChange = panelId => (_, isExpanded) => {
            if (isExpanded) {
                setExpandedPanels([...expandedPanels, panelId])
            } else {
                setExpandedPanels(expandedPanels.filter(id => id !== panelId))
            }
        }

        const renderExpandIcon = panelId => {
            const isExpanded = expandedPanels.some(id => id === panelId)

            return isExpanded ? <RemoveIcon /> : <AddIcon />
        }

        return (
            <WrappedComponent
                {...props}
                {...{ handleChange, setExpandedPanels, renderExpandIcon }}
            />
        )
    }

    return Component
}
