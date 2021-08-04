import React, { useState, useCallback, useEffect } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import {
    DisableSearch,
    DisableSearchBtn,
    DisableSearchMessage,
    StyledSearchInput,
    StyledSearchInputWrp,
} from '../styledComponents'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import { MaterialIcon } from '@shared/components/MaterialIcon'
import { Colors } from '@shared/constants/colors'
import { debounce } from 'throttle-debounce'
import { searchClinics } from '@store/reducers/clinics'
import { withConnectedStore } from '@hocs/withConnectedStore'
import { showErrorMessage } from '@utils/notificationUtils'
import { translate } from '@utils/translationUtils'

const ClinicSearchField = ({ dispatch }) => {
    const defaultCoordinates = { lat: null, long: null }
    const [searchValue, setSearchValue] = useState('')
    const [coordinates, setCoordinates] = useState(defaultCoordinates)

    const handleClickLocation = () => getCurrentLocation()

    const onSearchChange = async (value, coordinates) => {
        const { lat, long } = coordinates
        const data = {}

        if (value) {
            data.term = value
        }

        if (lat) {
            data.lat = lat
            data.long = long
        }

        await dispatch(searchClinics(data))
    }

    const debouncedFunc = useCallback(
        debounce(750, (value, coordinates) =>
            onSearchChange(value, coordinates)
        ),
        []
    )

    const handleChange = ({ target }) => {
        debouncedFunc(target.value, coordinates)
        setSearchValue(target.value)
    }

    const success = position => {
        const { latitude, longitude } = position.coords
        const coordinates = { lat: latitude, long: longitude }

        setCoordinates(coordinates)
        onSearchChange(searchValue, coordinates)
    }

    const error = err => showErrorMessage({}, err.message)

    const getCurrentLocation = () =>
        navigator.geolocation.getCurrentPosition(success, error)

    const removeCoordinates = () => {
        setCoordinates(defaultCoordinates)
        onSearchChange(searchValue, defaultCoordinates)
    }

    useEffect(() => {
        dispatch(searchClinics())
    }, [])

    return (
        <StyledSearchInputWrp>
            <StyledSearchInput
                value={searchValue}
                onChange={handleChange}
                placeholder="Search for a clinic..."
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickLocation}>
                            <MaterialIcon
                                Icon={LocationIcon}
                                iconColor={Colors.black}
                            />
                        </IconButton>
                    </InputAdornment>
                }
            />

            {coordinates.lat && (
                <DisableSearch>
                    <DisableSearchMessage>
                        {translate('disableSearch')}
                    </DisableSearchMessage>
                    <DisableSearchBtn onClick={removeCoordinates}>
                        {translate('here')}
                    </DisableSearchBtn>
                </DisableSearch>
            )}
        </StyledSearchInputWrp>
    )
}

const withStore = withConnectedStore(ClinicSearchField)

export { withStore as ClinicSearchField }
