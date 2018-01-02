import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'

import langFunc from './lang'
import store from './store'

console.ignoredYellowBox = ['Remote debugger'];

const lang = langFunc()

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Provider store={store}>
        <View>
        </View>
      </Provider>
    );
  }
}