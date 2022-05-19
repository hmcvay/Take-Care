import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {windowWidth, windowHeight} from '../utilities/Dimensions';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


function PostWatching({navigation}){
  return(
    <View style={styles.pageLayout}>
    <View style={styles.addPostWrapper}>
      <View style={styles.border}>
        <Text>POSTS I'M CURRENTLY "WATCHING"</Text>
      </View>
    </View>
  
    <View>
      <TouchableOpacity>
        <View style={styles.buttons} >
          <Icon 
            style={{color: '#ed4b2a', fontSize: 30, bottom: 2}}
            name="list"
            onPress={() => navigation.navigate('PostList')}
          />
          <Icon
            style={{color: '#ed4b2a', fontSize:30, bottom: 2}}
            name="pencil"
            onPress={() => navigation.navigate('AddPost')}
          
          />
          <Icon 
            style={{color: '#ed4b2a', fontSize: 30, bottom: 2}}
            name="emotsmile"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </TouchableOpacity>
    </View>
  </View>

  );
};

export default PostWatching;

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeee9',
    // width: windowWidth,
    // height: windowHeight,
  },

  addPostWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeee9',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: windowHeight - 175,
    width: windowWidth - 7,
  },

  border: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    height: 350,
    width: windowWidth - 20,
  },

  addTitle: {
    // fontFamily: "PlayfairDisplaySC-Bold",
    height: 50,
    padding: 10,
    fontSize: 26,
  },

  addDescription:{
    // height: 65,
    padding: 35,
    fontSize: 18,
  },

  addLocation: {
    height: 30,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 14,
  },

  urgentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    height: 60,
    // borderTopWidth: 1,
    // borderTopColor: 'black',
    width: windowWidth - 6,
  }
})