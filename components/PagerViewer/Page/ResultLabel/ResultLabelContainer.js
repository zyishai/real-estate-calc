import { connect } from 'react-redux'

import ResultLabelComponent from './ResultLabelComponent'

const mapStateToProps = state => ({
    direction: state.settings.direction,
    language: state.settings.language,
    calculator: state.calculator
})

export default connect(mapStateToProps)(ResultLabelComponent)