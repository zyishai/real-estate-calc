import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    tabStyle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabLabel: {
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    tabRowStyle: {
        height: 50,
        width: Dimensions.get('screen').width,
        backgroundColor: '#f3f3f3'
    }
})