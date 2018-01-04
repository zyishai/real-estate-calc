import React, { Component } from 'react'
import {
    View,
    Dimensions
} from 'react-native'

import Tab from './TabComponent'
import styles from './styles'
import langFunc from '../../lang'

export default class Row extends Component {
    constructor(props) {
        super(props)

        const { language, direction } = this.props

        this.lang = langFunc(language)
        this.rowStyle = {
            flexDirection: direction === 'rtl' ? 'row-reverse' : 'row'
        }
    }

    render() {
        const screenWidth = Dimensions.get('screen').width
        return (
            <View 
                style={[styles.tabRowStyle, this.rowStyle]}>
            {
                this.props.tabs.tabLabels.map((label, index) => (
                    <Tab 
                        key={index}
                        width={screenWidth / this.props.tabs.tabLabels.length}
                        selected={index === 0 ? true : false}
                        label={this.lang[label]} />
                ))
            }
            </View>
        )
    }
}