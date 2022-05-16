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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


function PostList({navigation, route}){

  const [postList, setPostList] = useState({empty: true});
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {params} = route;

  const getList = async () => {
    setIsLoading(true);
    const postCollection = collection(db, 'posts');
    const postSnapshot = await getDocs(postCollection);
    const newPostList = postSnapshot.docs.map(p => p.data());
    newPostList.map(post => {
      post.time; 
    });
    setPostList(newPostList);
    setIsLoading(false);
  };

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
