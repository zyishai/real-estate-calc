import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableNativeFeedback, 
} from 'react-native'

import styles from './styles'

export default class Tab extends Component {
    constructor(props) {
        super(props)

        const { width, selected } = this.props

        const unselectedColor = this.props.unselectedColor || 'silver'
        const selectedColor = this.props.selectedColor || 'white'
        const unselectedTextColor = this.props.unselectedTextColor || 'black'
        const selectedTextColor = this.props.selectedTextColor || 'black'

        this.tabStyle = {
            backgroundColor: selected ? selectedColor : unselectedColor,
            width
        }
        this.labelStyle = {
            fontWeight: selected ? 'bold' : 'normal',
            color: selected ? selectedTextColor : unselectedTextColor
        }
    }

    componentWillUpdate(nextProps) {
        const { width, selected } = nextProps

        const unselectedColor = nextProps.unselectedColor || 'silver'
        const selectedColor = nextProps.selectedColor || 'white'
        const unselectedTextColor = nextProps.unselectedTextColor || 'black'
        const selectedTextColor = nextProps.selectedTextColor || 'black'

        this.tabStyle = {
            backgroundColor: selected ? selectedColor : unselectedColor,
            width
        }
        this.labelStyle = {
            fontWeight: selected ? 'bold' : 'normal',
            color: selected ? selectedTextColor : unselectedTextColor
        }
    }

    render() {
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this.props.onPress}>
                <View
                    style={[styles.tabStyle, this.tabStyle]}>
                    <Text
                        style={[styles.tabLabel, this.labelStyle]}>
                        { this.props.label }
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}