import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Animated
} from 'react-native'

export default class UserInputAndroid extends Component {
    state = {
        isFocused: false,
        value: ''
    }

    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(!this.props.defaultValue ? 0 : 1)
    }

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: (this.state.isFocused || this.state.value) ? 1 : 0,
            duration: 200
        }).start()
    }

    handleFocus = () => this.setState({ isFocused: true })
    handleBlur = () => this.setState({ isFocused: false }) 
    onChangeText = (value) => {
        this.setState({ value })

        if (this.props.onChangeText) {
            this.props.onChangeText(value)
        }
    }

    render() {
        const { label, ...props } = this.props
        const { isFocused } = this.state
        const labelStyle = {
            position: 'absolute',
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 0]
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 14]
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: ['#aaa', '#000']
            })
        }
        const labelSide = this.props.rtl ? { right: 0 } : { left: 0 }

        return (
            <View style={[{ paddingTop: 18, marginVertical: 10 }, this.props.style]}>
                <Animated.Text style={[labelStyle, labelSide, this.props.labelStyle]}>
                    { label }
                </Animated.Text>
                <TextInput 
                    {...props}
                    style={[{ height: 26, fontSize: 20, color: '#000', 
                    borderBottomWidth: 1, borderBottomColor: '#555' }, this.props.inputStyle]}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChangeText={this.onChangeText}
                    underlineColorAndroid='transparent'
                    selectTextOnFocus={true} />
            </View>
        )
    }
}