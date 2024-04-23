import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/appFlow/Home';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      initialRouteName={'Home'}>
      <AppStack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      {/* <AppStack.Screen
        name={routes.MyWaves}
        component={App.MyWaves}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.Inbox}
        component={App.Inbox}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.MyFriends}
        component={App.MyFriends}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.MyFacebookFriends}
        component={App.MyFacebookFriends}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.FavoritePlaces}
        component={App.FavoritePlaces}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.AccountLogin}
        component={App.AccountLogin}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.EditProfile}
        component={App.EditProfile}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.Setting}
        component={App.Setting}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.General}
        component={App.General}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.MapDisplay}
        component={App.MapDisplay}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.Notifications}
        component={App.Notifications}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.Reminder}
        component={App.Reminder}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.Voice_Sound}
        component={App.Voice_Sound}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.BoatIcons}
        component={App.BoatIcons}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.Alert_Category}
        component={App.Alert_Category}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      />
      <AppStack.Screen
        name={routes.Alert_Update}
        component={App.Alert_Update}
        options={{
          headerShown: false,
          //title: 'Home'
        }}
      /> */}
    </AppStack.Navigator>
  );
};


export default AppNavigation;
