import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'

import numeral from 'numeral'
import styles from './styles'
import langFunc from '../../../lang'

export default class ResultLabelComponent extends Component {
    constructor(props) {
        super(props)

        this.setSettings(props)
        this.setStyles(props)
    }

    componentWillUpdate(nextProps) {
        this.setSettings(nextProps)
        this.setStyles(nextProps)
    }

    setStyles(props) {
        this.resultStyle = {
            flexDirection: props.direction === 'rtl' ? 'row-reverse' : 'row'
        }
        this.fontStyle = {
            fontSize: 18
        }
    }

    setSettings(props) {
        this.lang = langFunc(props.language)
    }

    render() {
        // Determine how to display label and value.
        const { label, value } = this.props
        let resultLabel = ''
        let resultValue = ''
        if (label && value && !isNaN(value)) {
            resultLabel = this.lang[label] + ':'
            resultValue = numeral(value).format('0,0.[00]') + '₪'
        } else {
            console.log('ResultLabelComponent: label or value props are not in correct format..')
        }

        return (
            <View style={[styles.resultStyle, this.resultStyle]}>
                <View style={[styles.resultLabelContainer, this.resultStyle]}>
                    <Text style={[styles.resultLabelStyle, this.fontStyle]}>
                        { resultLabel }
                    </Text>
                </View>
                <View style={[styles.resultValueContainer, this.resultStyle]}>
                    <Text style={[styles.resultValueStyle, this.fontStyle]}>
                        { resultValue }
                    </Text>
                </View>
            </View>
        )
    }
}