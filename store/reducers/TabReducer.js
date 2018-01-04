import { SET_ACTIVE_TAB } from '../actions'

const initialState = {
    tabLabels: [
        'mortgageTabLabel',
        'returnTabLabel'
    ],
    currentTab: 0
}

export default function(state=initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_TAB: 
            const newState = Object.assign({}, state, action.payload)
            return newState
        default:
            return state
    }
}