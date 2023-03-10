import {View, Text, Button, TextInput, Image, Dimensions} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({navigation}) {
  const [email, setemail] = useState('test@gmail.com');
  const [password, setpassword] = useState('Test');
  const [error, seterror] = useState('');
  const onLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        if (email == 'test@gmail.com' && password == 'Test') {
          navigation.navigate('App');
        } else {
          seterror('*wrong email or password');
        }
      } else {
        seterror('*all fields are required');
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          height: windowHeight / 3,
          width: 200,
        }}>
        <Image
          style={{flex: 1}}
          resizeMode="contain"
          source={require('../../assests/logo.jpg')}
        />
      </View>
      <View
        style={{
          backgroundColor: 'green',
          height: windowHeight,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 25,
          }}>
          <Text style={{fontSize: 38, color: 'white'}}>GRAB UR BAG</Text>
          <View style={{paddingTop: 20, paddingBottom: 20}}>
            <TextInput
              style={{
                width: windowWidth / 2 + 100,
                fontSize: 18,
                color: 'white',
                borderBottomWidth: 0.5,
                borderBottomColor: 'white',
              }}
              name="email"
              value={email}
              placeholder="Enter email"
              autoCapitalize="none"
              onChangeText={text => {
                setemail(text);
                seterror('');
              }}
            />
            <TextInput
              style={{
                width: windowWidth / 2 + 100,
                fontSize: 18,
                color: 'white',
                borderBottomWidth: 0.5,
                borderBottomColor: 'white',
              }}
              name="password"
              value={password}
              placeholder="Enter password"
              secureTextEntry
              onChangeText={text => {
                setpassword(text);
                seterror('');
              }}
            />
          </View>
          {error && <Text style={{color: 'red', fontSize: 20}}>{error}</Text>}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'white',
              width: 200,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}
            onPress={onLogin}>
            <Text style={{fontSize: 28, color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
