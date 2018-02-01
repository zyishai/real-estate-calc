import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Text,
    KeyboardAvoidingView
} from 'react-native'

import langFunc from '../../../lang'
import styles from '../styles'

import UserInput from './UserInput'
import ResultLabel from './ResultLabel'

export default class Page extends Component {
    constructor(props) {
        super(props)

        this.setSettings(props)
    }

    componentWillUpdate(nextProps) {
        this.setSettings(nextProps)
    }

    setSettings(props) {
        this.lang = langFunc(props.language)
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={[styles.pageStyle]}
                behavior="padding"
                keyboardVerticalOffset={50}>
            <View style={[styles.pageStyle]}>
                <ScrollView 
                    style={[styles.pageInputsStyle]}
                        keyboardShouldPersistTaps="always">
                    {
                        this.props.inputLabels.map((label, index) => (
                            <UserInput
                                key={index}
                                label={label} />
                        ))
                    }
                </ScrollView>
                <View style={[styles.pageResultsStyle]}>
                    {
                        this.props.results.map((result, index) => (
                            <ResultLabel 
                                key={index}
                                label={result.label}
                                value={result.calc}
                                sign={result.sign} />
                        ))
                    }
                </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
}