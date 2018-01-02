import { combineReducers } from 'redux'

import advertisement from './AdvertisementReducer'
import calculator from './CalculatorReducer'

export default combineReducers({
    advertisement,
    calculator
})