import { combineReducers } from 'redux'

import advertisement from './AdvertisementReducer'
import calculator from './CalculatorReducer'
import tabs from './TabReducer'
import settings from './SettingsReducer'

export default combineReducers({
    advertisement,
    calculator,
    tabs,
    settings
})