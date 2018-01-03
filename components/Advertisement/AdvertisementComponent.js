import React, { Component } from 'react'
import {
    Image,
    View,
    TouchableNativeFeedback
} from 'react-native'

import styles from './styles'

class AdvertisementComponent extends React.Component {
    renderAdvertisementContent() {
        if (this.props.advertisement.src) {
            return (
                <Image
                    source={{ uri: this.props.advertisement.src }}
                    style={[styles.advertisementImageStyle]} />
            )
        } else {
            return (
                <TouchableNativeFeedback 
                    background={TouchableNativeFeedback.SelectableBackground()} 
                    onPress={this.props.updateSource.bind(this)}>
                    <View 
                        style={[styles.advertisementImageStyle]} />
                </TouchableNativeFeedback>
            )
        }
    }

    render() {
        return (
            <View style={[styles.advertisementImageContainer]}>
                { this.renderAdvertisementContent() }
            </View>
        )
    }
}

export default AdvertisementComponent