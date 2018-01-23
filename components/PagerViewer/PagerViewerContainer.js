import { connect } from 'react-redux'
import { SET_ACTIVE_TAB } from '../../store/actions'

import PagerViewerComponent from './PagerViewerComponent'

const mapStateToProps = state => ({
    direction: state.settings.direction,
    currentTab: state.tabs.currentTab
})

const setActive = (currentTab) => ({
    type: SET_ACTIVE_TAB,
    payload: {
        currentTab
    }
})

export default connect(mapStateToProps, { setActive })(PagerViewerComponent)