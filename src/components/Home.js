import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Logo from './../assets/takeCareTransparent.png';

function Home({navigation}){
  return(
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efeee9',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PostList')}
        style={{
          width: '80%',
          padding: 15,
          // color: '#fcc9a8',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image 
            className="logo"
            source={Logo}
            style={{width:400, resizeMode: 'contain'}}
          />
          <Text>Click to enter app</Text>

        </View>
      </TouchableOpacity>
    </SafeAreaView> 
  )
};

export default Home;