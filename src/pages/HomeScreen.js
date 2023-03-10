import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import axios from "axios";
import { useState,useEffect } from 'react';
export default function HomeScreen({navigation}) {
    const [user, setUser] = useState([]);

  onLogout = async () => {
    try {
      navigation.navigate('Auth');
    } catch (error) {
      alert(error);
    }
  };
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
      return setUser(response.data);
  }

  useEffect(() => {
    fetchData();
  },[])
  
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
      {user && user.length > 0 && user.map((userObj, index) => (
            <View key={userObj.id}><Text>{userObj.category}</Text></View>
          ))}
      <Button title="Logout" onPress={this.onLogout} />
    </View>
  );
}
