import { StyleSheet } from 'react-native';

const styles = {
   container: {
      flex: 1
   },
   content: {
      borderColor: 'darkgray',
      justifyContent: 'center',
      borderWidth: 2,
      padding: 20,
      margin: 20
   },
   text: {
      fontSize: 25,
      textAlign: 'center',
   },
   checkboxGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 2,
      borderColor: 'lightgray'
   },
   checkboxText: {
      fontSize: 20
   },
   footer: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   button: {
      padding: 15
   }
};

export default StyleSheet.create(styles);
