import React from 'react';
import { View, StatusBar } from 'react-native';

import AppContainer from './AppContainer';

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <AppContainer />
  </View>
);

export default App;
