import { connect } from 'react-redux'

import PageComponent from './PageComponent'

const mapStateToProps = state => ({
    language: state.settings.language
})

export default connect(mapStateToProps)(PageComponent)