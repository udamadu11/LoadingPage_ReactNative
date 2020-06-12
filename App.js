/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {Router , Scene} from 'react-native-router-flux';

import LoadingSecne from './src/scenes/loadingScene';
import AuthScene from './src/scenes/AuthScene';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Scene key="root">
            <Scene key="loading" component={LoadingSecne} hideNavBar={true} initial={true}></Scene>
            <Scene key="auth" component={AuthScene} hideNavBar={true}></Scene>
        </Scene>
      </Router>
    );
  }
};

export default App;
