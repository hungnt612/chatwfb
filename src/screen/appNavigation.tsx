import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from './login/loginScreen';
import JoinRoomScreen from './login/joinRoomScreen';
import React from 'react';

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  //     useEffect(()=>{
  //         AsyncStorage.getItem('UserData').then(value => {
  //             const data = JSON.parse(value);
  //             store.dispatch(login(data));
  //             console.log(data);
  //         }).catch(e=>console.log(e));
  //     })
  //     console.log(store.getState())
  //     const isLogin=store.getState().authenticateReducer?.name;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*{isLogin? (*/}
        {/*    <Stack.Screen name="Home" component={Home} />*/}
        {/*) : (*/}
        {/*  <>*/}
        {/*      <Stack.Screen name="Login" component={LoginScreen} />*/}
        {/*  </>*/}
        {/*)}*/}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinRoomScreen"
          component={JoinRoomScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
