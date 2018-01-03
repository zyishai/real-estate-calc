import { connect } from 'react-redux'
import { Dimensions } from 'react-native'

import { UPDATE_SRC } from '../../store/actions'
import AdvertisementComponent from './AdvertisementComponent'

const mapStateToProps = state => {
    return {
        advertisement: state.advertisement
    }
}

// Use that value to put different ads to different screen widths
const width = Dimensions.get('screen').width

const updateSource = () => ({
    type: UPDATE_SRC,
    payload: {
        src: 'https://picsum.photos/330/50/?random' // TODO: support different ads according to screen width
    }
})

export default connect(mapStateToProps , { updateSource })(AdvertisementComponent)