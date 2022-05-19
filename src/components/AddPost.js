import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { db } from '../firebase/firebase-config';
// import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { doc, addDoc, getDocs, collection, Timestamp } from 'firebase/firestore';
import { CheckBox } from 'react-native-elements';
import {windowWidth, windowHeight} from '../utilities/Dimensions';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const AddPost = ({navigation}) => {

  const [titleInput, setTitle] = useState('');
  const onChangeTitle = titleValue => setTitle(titleValue);
  const [descriptionInput, setDescription] = useState('');
  const onChangeDescription = descriptionValue => setDescription(descriptionValue);
  const [locationInput, setLocation] = useState('');
  const onChangeLocation = locationValue => setLocation(locationValue);
  const [isUrgentBox, setIsUrgentBox] = useState(false);


  async function sendToFirebase() {
    if ((titleInput !== '') || (descriptionInput!=='') || (locationInput !== '')){
      try{
        await addDoc(collection(db, 'posts'), {
          title: titleInput,
          description: descriptionInput,
          location: locationInput,
          // time: Timestamp.fromDate(new Date),
          is_urgent: isUrgentBox,
          is_met: false,
        });
        navigation.navigate('PostList', {updated: true});
      } catch (error){
        console.log('ERROR:', error);
      }
   
    } else {
      alert('post is incomplete');
    }

  };  
  return(
  
    <View style={styles.pageLayout}>
      <View style={styles.addPostWrapper}>
        <View style={styles.border}>
          <TextInput
            style={styles.addTitle} 
            placeholder="Title"
            onChangeText={onChangeTitle}
            maxLength={100}
            autoCapitalize="words"
          />
          <TextInput style={styles.addLocation}
            placeholder="Portland, Oregon"
            onChangeText={onChangeLocation}
            maxLength={60}
            autoCapitalize="words"
          />
          <TextInput 
            style={styles.addDescription}
            placeholder="Description"
            onChangeText={onChangeDescription}
            maxLength={300}
            autoCapitalize="sentences"
            multiline={true}
            numberOfLines={10}
          />
          <View style={styles.urgentBox}>
            <CheckBox
              // style={styles.urgentBox}
              checked={isUrgentBox}
              onPress={() => setIsUrgentBox(!isUrgentBox)}
            />
            <Text style={{fontSize: 16, width: windowWidth -90, marginTop: 20}}>
              {isUrgentBox
                ? "This post is urgent!"
                : "Urgent?"}
            </Text>
          </View>
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
              name="plus"
              onPress={sendToFirebase}
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

export default AddPost;

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
    borderStyle: 'dashed',
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