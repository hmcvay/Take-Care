import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';


function PostList({navigation}){
  return (
    <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#efeee9',
    }}>
    <View >
      <Text>POST LIST</Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('AddPost')}
      style={{
        width: '80%',
        padding: 15,
        color: '#fcc9a8',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Text style={{fontSize: 100}}>+</Text>
      </View>
    </TouchableOpacity>
  </SafeAreaView> 
   
  )
};

export default PostList;
