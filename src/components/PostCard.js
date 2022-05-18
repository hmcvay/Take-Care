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
    <View style={styles.pageLayout}>
      <View style={styles.post}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postLocation}>{item.location}</Text>
        <Text style={styles.postDescription}>{item.description}</Text>
        <View style={styles.postButtons}>
          <Icon
            style={{fontSize: 25, paddingRight: 20 }}
            name="paper-clip"
          />
          <Icon
            style={{fontSize: 25}} 
            name="heart"
          />
        </View>
      </View>
    </View>  
  )
};

export default PostCard;

const styles = StyleSheet.create({
  pageLayout:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 3,
    backgroundColor: '#efeee9',
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
    flex: 2,
    height: 300,
    borderColor: 'black',
    borderWidth: 1,
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
    fontSize: 19,
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 12,
    marginRight: 12,
  },

  postButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginTop: 10,
  }

});

