import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, 
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

function PostCard({item}){
  
  return (
    // <View style={styles.pageLayout}>
      <View style={styles.post}>
        {/* <Text style={styles.postUser}></Text> */}
        <View>
          <Text style={styles.postTitle}>{item.title.toUpperCase()}</Text>
        </View> 
        <View>
          <Text style={styles.postLocation}>{item.location}</Text>
        </View>
        <View>
          <Text style={styles.postDescription}>{item.description}</Text>
        </View>
        <View style={styles.postButtons}>
          <Icon
            style={{fontSize: 25, paddingRight: 20 }}
            name="eye"
          />
          <Icon
            // onPress = {(heartColor)}
            style={{fontSize: 25}} 
            name="heart"
          />
        </View>
      </View>
    // </View>  
  )
};

export default PostCard;

const styles = StyleSheet.create({
  pageLayout:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // padding: 1,
    backgroundColor: '#efeee9',
    alignContent: 'center',
  },

  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 40,
    marginRight: 40,
    height: 80,
    
  },

  post:{
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    height: 320,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',

  },

  postTitle:{
    
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 15,
  },

  postLocation: {
    
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
    marginTop:10,
  },

  postDescription:{
    
    textAlign: 'center',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 12,
    marginRight: 12,
  },

  postButtons: {
    
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginTop: 10,
    marginBottom: 10,
  }

});

