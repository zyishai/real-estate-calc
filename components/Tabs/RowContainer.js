import { connect } from 'react-redux'

import { SET_ACTIVE_TAB } from '../../store/actions'
import RowComponent from './RowComponent'

const mapStateToProps = state => ({
    tabs: state.tabs,
    language: state.settings.language,
    direction: state.settings.direction
})

const setActive = (tabIndex) => ({
    type: SET_ACTIVE_TAB,
    payload: {
        currentTab: tabIndex
    }
})

export default connect(mapStateToProps, { setActive })(RowComponent)