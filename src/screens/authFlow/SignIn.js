import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <TouchableOpacity style={{ backgroundColor: 'green', padding: 10 }} onPress={() => navigation.navigate('app')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
