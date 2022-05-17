import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { db } from './../firebase/firebase-config';
import { collection, getDocs, doc, addDoc, Timestamp } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { windowHeight, windowWidth } from "../utilities/Dimensions";
import { Dimensions } from 'react-native';


function PostList({navigation, route}){

  const [postList, setPostList] = useState({empty: true});
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {params} = route;

  const messageDisplay = () => {
    if (params) {
      const now = new Date().getTime();
      if (params.message && now - params.messageTimeOut < 1000) {
        return (
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {params.message}
            </Text>
          </View>
        );
      }
    }
  };

  const getList = async () => {
    setIsLoading(true);
    const postsCollection = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCollection);
    const newPostList = postSnapshot.docs.map(p => p.data());
    newPostList.map(post => {
      post.time; 
    });
    setPostList(newPostList);
    setIsLoading(false);
    const date = new Date();
  };

  const checkIfLoading = () => {
    if (isLoading === true || postList.empty === true){
      return (
        <View>
          <Image 
            source={require('./../assets/takeCareTransparent.png')}
            opacity={0.5}
            style={{width: 200, height: 200}}
          />
        </View>
      );
    } else {
      return (
        <View style={{height: windowHeight - 200}}>
          {messageDisplay()}
          <FlatList 
            data={postList}
            renderItem={({post}) => <>{postDisplayBlock(post)}</>}
          />
        </View>
      )
    }
  }

  useEffect(() => {
    const now = new Date().getTime();
  }, [isLoading]);

  useFocusEffect(() => {
    () => getList();
  }, [update]);

  useEffect(() => {
    getList();
  }, [update]);

  return (
    <View style={styles.pageLayout}>
      {checkIfLoading()}
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
