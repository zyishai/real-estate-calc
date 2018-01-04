import { connect } from 'react-redux'

import RowComponent from './RowComponent'

const mapStateToProps = state => ({
    tabs: state.tabs,
    language: state.settings.language,
    direction: state.settings.direction
})

export default connect(mapStateToProps)(RowComponent)