import React from 'react';
import { 
  View, 
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux'

import store from './store'
import { SET_ACTIVE_TAB } from './store/actions'

import Advertisement from './components/Advertisement'
import Tabs from './components/Tabs'
import Pager from './components/PagerViewer/'

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  componentDidMount() {
    const currentTab = store.getState().settings.direction === 'rtl' ? 1 : 0
    
    store.dispatch({
      type: SET_ACTIVE_TAB,
      payload: {
        currentTab
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={[styles.appStyle]}>
          <Advertisement />
          <Tabs />
          <View style={[styles.pagerStyle]}>
            <Pager />
          </View>
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