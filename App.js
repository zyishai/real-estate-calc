import React from 'react';
import { 
  View, 
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux'

import store from './store'

import Advertisement from './components/Advertisement'
import Tabs from './components/Tabs'
import Pager from './components/PagerViewer/'

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.appStyle]}>
          <Advertisement />
          <View style={[styles.pagerStyle]}>
            <Pager />
          </View>
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
  },
  pagerStyle: {
    flex: 1
  }
})