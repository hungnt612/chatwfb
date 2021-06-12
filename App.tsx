/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/screen/login/loginScreen';
import JoinRoomScreen from "./src/screen/login/joinRoomScreen";
import AppNavigation from "./src/screen/appNavigation";
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={{flex: 1}}>
      {/*<JoinRoomScreen></JoinRoomScreen>*/}
      {/*<LoginScreen />*/}
      <AppNavigation></AppNavigation>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
