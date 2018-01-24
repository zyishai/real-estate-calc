import { connect } from 'react-redux'

import { UPDATE_USER_INPUT } from '../../../../store/actions'
import UserInputComponent from './UserInputComponent'

const mapStateToProps = state => ({
    direction: state.settings.direction,
    language: state.settings.language
})

const onChangeText = (key, value) => {
    return {
        type: UPDATE_USER_INPUT,
        payload: {
            [key]: value
        }
    }
}

export default connect(mapStateToProps, { onChangeText })(UserInputComponent)