import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class Header extends Component {
   goToSettings = () => {
      this.props.navigation.navigate('Settings');
   }

   goBack = () => {
      this.props.navigation.goBack();
   }

   render() {
      const { title, subtitle, type } = this.props;
      const isSettings = type === 'settings';

      return (
         <Appbar.Header>
            {
               isSettings &&
               <Appbar.BackAction
                  onPress={this.goBack}
               />
            }
            <Appbar.Content
               title={title}
               subtitle={subtitle}
            />
            {
               isSettings ||
               <Appbar.Action icon="settings" onPress={this.goToSettings} />
            }
         </Appbar.Header>
      );
   }
}

export default withNavigation(Header);
