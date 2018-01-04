import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    tabStyle: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabLabel: {
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    tabRowStyle: {
        height: 80,
        width: Dimensions.get('screen').width
    }
})