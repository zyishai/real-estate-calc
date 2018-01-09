import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Text
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
            <View style={[styles.pageStyle]}>
                <Text style={[styles.pageTitleStyle]}>
                    { this.lang[this.props.pageTitle] }
                </Text>
                <ScrollView style={[styles.pageInputsStyle]}>
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
                                value={result.calc} />
                        ))
                    }
                </View>
            </View>
        )
    }
}