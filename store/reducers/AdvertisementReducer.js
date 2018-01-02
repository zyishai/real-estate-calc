import { UPDATE_SRC } from '../actions'

const initialState = {
    src: ''
}

export default function(state=initialState, action) {
    switch(action.type) {
        case UPDATE_SRC:
            let newState = Object.assign({}, state, action.src)
            return newState
        default:
            return state
    }
}