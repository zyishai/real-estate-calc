import React from 'react';
import { 
  View, 
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux'

import langFunc from './lang'
import store from './store'

import Advertisement from './components/Advertisement'

console.ignoredYellowBox = ['Remote debugger'];

const lang = langFunc()

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.appStyle]}>
          <Advertisement />
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