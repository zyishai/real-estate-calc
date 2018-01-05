import React, { Component } from 'react'
import {
    View
} from 'react-native'

import styles from '../styles'
import FloatingLabel from './FloatingLabel'

export default class UserInput extends Component {
    constructor(props) {
        super(props)

        this.setStyles(props)
    }

    componentWillUpdate(nextProps) {
        this.setStyles(nextProps)
    }   

    // Set label, input and outer styles.
    setStyles(props) {
        if (props.direction === 'rtl') {
            this.labelStyle = {
                right: 7
            }
        } else {
            this.labelStyle = {
                left: 7
            }
        }
        this.floatingLabelStyle = this.props.width ? { width: this.props.width } : null
    }

    render() {
        const defaultValue = this.props.defaultValue ? this.props.defaultValue.toString() : null

        return (
            <View
                style={[styles.userInputStyle]}>
                <FloatingLabel
                    controlled={false}
                    keyboardType='numeric'
                    onChangeText={this.props.onChangeText}
                    selectTextOnFocus={true}
                    style={[styles.floatingLabelStyle, this.floatingLabelStyle]}
                    inputStyle={[styles.floatingLabelInputStyle]}
                    labelStyle={[styles.floatingLabelLabelStyle, this.labelStyle]}
                    value={defaultValue}>
                    {this.props.label}
                </FloatingLabel>
            </View>
        )
    }
}