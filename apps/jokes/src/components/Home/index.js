import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';
import Header from '../Header';
import { getJoke, getJokeForCategories } from '../../api';
import { getSelectedSettings } from '../../storage';

class Home extends Component {
   state = {
      joke: 'Loading...'
   };

   getJoke = async () => {
      this.setState({ joke: 'Loading...' });
      try {
         const settings = await getSelectedSettings();
         console.log('settings:', settings);
         let joke = '';

         if (settings.length > 0) {
            joke = await getJokeForCategories(settings);
         } else {
            joke = await getJoke();
         }

         this.setState({ joke });
      } catch (error) {
         Alert.alert('Error!', error.message, [{ text: 'Ok' }]);

         console.log('Error: Get joke failed!');
         console.log(error);
      }
   }

   componentDidMount = () => {
      this.getJoke();
   }

   render = () => {
      const { container, content, text, button } = styles;

      return (
         <View style={container}>
            <Header
               title="Home"
               subtitle="Best jokes!"
               type="home"
            />
            <View style={content}>
               <Text style={text}>{this.state.joke.replace(/&quot;/g, '"')}</Text>

               <Button
                  style={button}
                  icon="sentiment-very-satisfied"
                  mode="contained"
                  onPress={() => this.getJoke()}
               >
                  Another Joke
               </Button>
            </View>
         </View>
      )
   };
}

export default Home;
