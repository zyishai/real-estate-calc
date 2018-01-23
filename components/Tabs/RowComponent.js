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

    onTabPress(tabIndex) {
        this.props.setActive(this.props.tabs.tabLabels.length - tabIndex - 1)
    }

    render() {
        const screenWidth = Dimensions.get('screen').width
        return (
            <View 
                style={[styles.tabRowStyle, this.rowStyle]}>
            {
                this.props.tabs.tabLabels.map((label, index, tabs) => (
                    <Tab 
                        key={index}
                        width={screenWidth / this.props.tabs.tabLabels.length}
                        selected={index === (tabs.length - this.props.tabs.currentTab - 1)}
                        label={this.lang[label]}
                        onPress={this.onTabPress.bind(this, index)} />
                ))
            }
            </View>
        )
    }
}