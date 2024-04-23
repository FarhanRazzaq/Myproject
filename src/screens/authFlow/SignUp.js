import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <TouchableOpacity style={{ backgroundColor: 'green', padding: 10 }} onPress={() => navigation.navigate('SignIn')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
