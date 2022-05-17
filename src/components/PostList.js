import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { db } from './../firebase/firebase-config';
import { collection, getDocs, doc, setDoc, Timestamp } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { windowWidth } from "../utilities/Dimensions";
import { Dimensions } from 'react-native';


function PostList({navigation, route}){

  const width = Dimensions.get('window').width;

  // const [postList, setPostList] = useState({empty: true});
  // const [update, setUpdate] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const {params} = route;

  // const getList = async () => {
  //   setIsLoading(true);
  //   const postCollection = collection(db, 'posts');
  //   const postSnapshot = await getDocs(postsCollection);
  //   const newPostList = postSnapshot.docs.map(p => p.data());
  //   newPostList.map(post => {
  //     post.time; 
  //   });
  //   setPostList(newPostList);
  //   setIsLoading(false);
  // };

  return (
    <View style={styles.pageLayout}>
      {/* {checkIfLoading()} */}
      <View>
        <TouchableOpacity>
          <View style={styles.buttons}>
            <Icon 
              style={{color: '#ed4b2a', fontSize: 30, bottom: 2}}
              name="reload"
              onPress={() => setUpdate(prevState => !prevState)}
            />
            <Icon
              style={{color: '#ed4b2a', fontSize:30, bottom: 2}}
              name="speech"
              onPress={() => navigation.navigate('AddPost')}
            />
            <Icon 
              style={{color: '#ed4b2a', fontSize: 30, bottom: 2}}
              name="user"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
   
  )
};

export default PostList;

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
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
    borderTopColor: 'black',
    borderTopWidth: 1,
    height: 80,
    
  },
});
