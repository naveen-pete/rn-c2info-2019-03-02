import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';

import styles from './styles';
import { saveSettings, getSettings } from '../../storage';
import Header from '../Header';

class Settings extends Component {
   state = {
      explicit: false,
      nerdy: false
   };

   componentDidMount = () => {
      this.getSettings();
   };

   getSettings = async () => {
      try {
         const settings = await getSettings();
         this.setState({
            explicit: settings.explicit,
            nerdy: settings.nerdy
         });
      } catch (error) {
         Alert.alert('Error!', 'Get settings failed!', [{ text: 'Ok' }]);

         console.log('Error: Get settings failed!');
         console.log(error);
      }
   };

   saveSettings = () => {
      try {
         saveSettings(this.state);
         Alert.alert('Success!', 'Save settings successful!', [{ text: 'Ok' }]);
      } catch (error) {
         Alert.alert('Error!', 'Save settings failed!', [{ text: 'Ok' }]);

         console.log('Error: Save settings failed!');
         console.log(error);
      }
   };

   render = () => {
      const {
         container,
         content,
         text,
         checkboxGroup,
         checkboxText,
         footer,
         button
      } = styles;

      const { explicit, nerdy } = this.state;

      return (
         <View style={container}>
            <Header
               title="Settings"
               subtitle="App settings"
               type="settings"
            />

            <View style={content}>
               <Text style={text}>Select a joke category</Text>
               <View style={checkboxGroup}>
                  <Checkbox
                     status={explicit ? 'checked' : 'unchecked'}
                     onPress={() => { this.setState({ explicit: !explicit }); }}
                  />
                  <Text style={checkboxText}>Explicit</Text>
               </View>
               <View style={checkboxGroup}>
                  <Checkbox
                     status={nerdy ? 'checked' : 'unchecked'}
                     onPress={() => { this.setState({ nerdy: !nerdy }); }}
                  />
                  <Text style={checkboxText}>Nerdy</Text>
               </View>
            </View>

            <View style={footer}>
               <Button
                  style={button}
                  icon="save"
                  mode="contained"
                  onPress={() => this.saveSettings()}
               >
                  Save
               </Button>
            </View>
         </View>
      );
   };
}

export default Settings;
