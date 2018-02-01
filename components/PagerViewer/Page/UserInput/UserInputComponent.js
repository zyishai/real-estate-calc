import React, { Component } from 'react'
import {
    View
} from 'react-native'

import langFunc from '../../../../lang'
import styles from '../../styles'
import UserInputAndroid from './UserInputAndroid'
//import FloatingLabel from './FloatingLabel'

export default class UserInput extends Component {
    constructor(props) {
        super(props)

        this.setSettings(props)
        this.setStyles(props)
    }

    componentWillUpdate(nextProps) {
        this.setSettings(nextProps)
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

    setSettings(props) {
        this.lang = langFunc(props.language)
    }

    _onChangeText(val) {
        let value = !isNaN(Number.parseFloat(val)) ? Number.parseFloat(val) : 0
        
        this.props.onChangeText(this.props.label, val)
    }

    render() {
        const defaultValue = this.props.defaultValue ? this.props.defaultValue.toString() : null
        const direction = this.props.direction === 'rtl' ? true : false

        return (
            <UserInputAndroid
                controlled={false}
                keyboardType='numeric'
                onChangeText={this._onChangeText.bind(this)}
                rtl={direction}
                style={[styles.userInputStyle]}
                inputStyle={[styles.floatingLabelInputStyle]}
                //labelStyle={[styles.floatingLabelLabelStyle, this.labelStyle]}
                defaultValue={defaultValue}
                label={this.lang[this.props.label]} />
        )
    }
}