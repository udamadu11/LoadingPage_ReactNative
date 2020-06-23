import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {Router , Scene} from 'react-native-router-flux';

import Screen from './src/scenes/Screen';
import LoginScene from './src/scenes/login';
import LoadingSecne from './src/scenes/loadingScene';
import AuthScene from './src/scenes/AuthScene';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Scene key="root">
            <Scene key="loading" component={LoadingSecne} hideNavBar={true} initial={true}></Scene>
            <Scene key="auth" component={AuthScene} hideNavBar={true}></Scene>
            <Scene key="login" component={LoginScene} hideNavBar={true}></Scene>
            <Scene key="screen" component={Screen} hideNavBar={true}></Scene>
        </Scene>
      </Router>
    );
  }
};

export default App;
