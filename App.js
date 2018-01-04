import React from 'react';
import { 
  View, 
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux'

import store from './store'

import Advertisement from './components/Advertisement'
import Tabs from './components/Tabs'

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.appStyle]}>
          <Advertisement />
          <View style={{ flex: 1 }} />
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  appStyle: {
    marginTop: 24,
    flex: 1
  }
})