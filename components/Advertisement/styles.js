import { StyleSheet, Dimensions } from 'react-native'

const screen = Dimensions.get('screen')

export default StyleSheet.create({
    advertisementImageContainer: {
        height: 50,
        width: screen.width,
        backgroundColor: 'lightgray'
    },
    advertisementImageStyle: {
        height: 50,
        width: screen.width
    }
})