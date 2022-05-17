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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const AddPost = ({navigation}) => {

  const [titleInput, setTitle] = useState('');
  const onChangeTitle = titleValue => setTitle(titleValue);
  const [descriptionInput, setDescription] = useState('');
  const onChangeDescription = descriptionValue => setDescription(descriptionValue);
  const [locationInput, setLocation] = useState('');
  const onChangeLocation = locationValue => setLocation(locationValue);
  const [isUrgentBox, setIsUrgentBox] = useState(false);


  async function sendToFirebase() {
    if (titleInput !== ''){
      try{
        await addDoc(collection(db, 'posts'), {
          title: titleInput,
          description: descriptionInput,
          location: locationInput,
          time: Timestamp.fromDate(new Date),
          is_urgent: isUrgentBox,
          is_met: false,
        });
        console.log('yoo')
        navigation.navigate('PostList', {updated: true});
      } catch (error){
        console.log('ERROR:', error);
      }
   
    } else {
      alert('Please add a Title');
    }

  };  
  return(
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efeee9',
      }}>
      <View>
        <View>
          <TextInput 
            placeholder="Title"
            onChangeText={onChangeTitle}
            maxLength={50}
            autoCapitalize="words"
          />
          <TextInput 
            placeholder="Description"
            onChangeText={onChangeDescription}
            maxLength={150}
            autoCapitalize="sentences"
          />
          <TextInput 
            placeholder="Portland, Oregon"
            onChangeText={onChangeLocation}
            maxLength={30}
            autoCapitalize="words"
          />
        </View>
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CheckBox
            center
              // <Icon 
              //   name="exclamation"
              //   type="material"
              //   color="#FFFFFF"
              //   size={25}
              //   iconStyle={{marginRight: 10}}
              // />
            
            // uncheckedIcon={
            //   <Icon 
            //     name="exclamation"
            //     type="material"
            //     color="#D3D3D3"
            //     size={25}
            //     iconStyle={{marginRight: 10}}
            //   />
            // }
            checked={isUrgentBox}
            onPress={() => setIsUrgentBox(!isUrgentBox)}
          />
          <Text style={{fontSize: 16, width: windowWidth -90, marginTop: 20}}>
            {isUrgentBox
              ? "This ask is urgent!"
              : "Urgent?"}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 35,
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: "#efeee9",
          }}>
          <View>
            <Text>
              <SimpleLineIcons onPress={sendToFirebase} name='plus' style={{color: 'red', fontSize: 20,}} />
              
            </Text> 
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddPost;