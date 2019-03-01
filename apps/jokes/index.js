import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import App from './src/components/App';

const Main = () => {
   return (
      <PaperProvider>
         <App />
      </PaperProvider>
   );
};

AppRegistry.registerComponent('jokes', () => Main);
