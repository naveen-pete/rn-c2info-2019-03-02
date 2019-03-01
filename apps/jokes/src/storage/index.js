import { AsyncStorage } from 'react-native';

defaultSettings = {
   explicit: false,
   nerdy: false
};

export const saveSettings = async settings => {
   const keyValuePairs = convertToKeyValuePairs(settings);
   await AsyncStorage.multiSet(keyValuePairs);
   console.log('Save settings successful!');
};

export const getSettings = async () => {
   const keys = await AsyncStorage.getAllKeys();
   if (keys.length <= 0) {
      console.log('No keys!');
      return defaultSettings;
   }

   const keyValuePairs = await AsyncStorage.multiGet(keys);
   const settings = convertToObject(keyValuePairs);
   console.log('Get settings successful!');
   return settings;
};

export const getSelectedSettings = async () => {
   const keys = await AsyncStorage.getAllKeys();
   const keyValuePairs = await AsyncStorage.multiGet(keys);
   const selectedSettings = keyValuePairs
      .filter(([, value]) => value === 'true')
      .map(([key]) => key);
   return selectedSettings;
};

const convertToKeyValuePairs = obj => {
   console.log('convertToKeyValuePairs() - input:', obj);
   const keyValuePairs = Object.keys(obj).map(key => ([key, `${obj[key]}`]));
   console.log('convertToKeyValuePairs() - output:', keyValuePairs);

   return keyValuePairs;
};

const convertToObject = keyValuePairs => {
   console.log('convertToObject() - input:', keyValuePairs);
   const obj = keyValuePairs.reduce((obj, [key, value]) => {
      return {
         ...obj,
         [key]: (value === 'true')
      };
   }, {});
   console.log('convertToObject() - output:', obj);

   return obj;
};
