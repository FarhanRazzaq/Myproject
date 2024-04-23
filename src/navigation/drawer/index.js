import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { width } from 'react-native-dimension';
import AppNavigation from '../../navigation/appNavigation';

const MainDrawer = createDrawerNavigator();

const MainSideDrawer = () => {
  return (
    <MainDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width(60),
        },
      }}
      initialRouteName={'app'}
      useLegacyImplementation={true}
      drawerContent={props => {
        return <CustomDrawerContent {...props} focused={true} />;
      }}>
      <MainDrawer.Screen
        name={'app'}
        component={AppNavigation}
        options={{
          headerShown: false,
        }}
      />
    </MainDrawer.Navigator>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 1</Text>
      <Text>Screen 2</Text>
    </View>
  );
};

export default MainSideDrawer;
