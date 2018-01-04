import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback, 
} from 'react-native'

import styles from './styles'

export default class Tab extends Component {
    constructor(props) {
        super(props)

        this.setStyles(this.props)
    }
    
    componentWillUpdate(nextProps) {
        this.setStyles(nextProps)
    }

    setStyles(props) {
        const { width, selected } = props

        const unselectedTextColor = props.unselectedTextColor || 'black'
        const selectedTextColor = props.selectedTextColor || 'royalblue'

        this.tabStyle = {
            width
        }
        this.labelStyle = {
            fontWeight: selected ? 'bold' : 'normal',
            color: selected ? selectedTextColor : unselectedTextColor
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onPress}>
                <View
                    style={[styles.tabStyle, this.tabStyle]}>
                    <Text
                        style={[styles.tabLabel, this.labelStyle]}>
                        { this.props.label }
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}