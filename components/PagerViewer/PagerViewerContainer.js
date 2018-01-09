import { connect } from 'react-redux'

import PagerViewerComponent from './PagerViewerComponent'

const mapStateToProps = state => ({
    direction: state.settings.direction
})

export default connect(mapStateToProps)(PagerViewerComponent)