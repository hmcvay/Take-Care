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
import { collection, getDocs, doc, Timestamp, DocumentData } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { windowHeight, windowWidth } from "../utilities/Dimensions";


function PostList({navigation, route}){

  const [postList, setPostList] = useState({empty: true});
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getData(){
    setIsLoading(true);
    // let array = [];
    const postCollection = collection(db, "posts");
    const postSnapshot = await getDocs(postCollection);
    const newPostList = postSnapshot.docs.map(d => d.data());

    // postSnapshot.forEach((doc) => {
    //   array.push(doc.data());
    //   console.log(doc.data());
    // });
    // setPostList(newPostList);
    setPostList(newPostList);
    setIsLoading(false);
    // console.log('ARRAYYYYY!!!!!' + array);
  };

  useEffect(() => {
    getData();
  }, [update]);
  
  // getData();
 
  
  // const [postList, setPostList] = useState({empty: true});
  // const [update, setUpdate] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const {params} = route;

  // const messageDisplay = () => {
  //   if (params) {
  //     const now = new Date().getTime();
  //     if (params.message && now - params.messageTimeOut < 1000) {
  //       return (
  //         <View>
  //           <Text style={{fontWeight: 'bold', fontSize: 18}}>
  //             {params.message}
  //           </Text>
  //         </View>
  //       );
  //     }
  //   }
  // };

  // const getList = async () => {
  //   setIsLoading(true);
  //   const postsCollection = collection(db, 'posts');
  //   const postsSnapshot = await getDocs(postsCollection);
  //   const newPostList = Object.entries(postsSnapshot);
  //   // newPostList.map(post => {
  //   //   post.title
  //   // });
  //   setPostList(newPostList);
  //   console.log('NEW POSTLIST = ' + newPostList);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getList();
  // }, [update]);

  // useFocusEffect(() => {
  //   () => getList();
  // });

  useEffect(() => {
    const now = new Date().getTime();
    console.log('isLoading = ' + ' ' + now);
  }, [isLoading]);

  const checkIfLoading = () => {
    if (isLoading === true || postList.empty === true){
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
          {/* {messageDisplay()} */}
          <FlatList 
            data={postList}
            renderItem={({post}) => <>{postDisplayBlock(post)}</>}
          />
        </View>
      );
    }
  };

  const postDisplayBlock = post => {
    console.log("THESE ARE POSTS!!!!" + {post})
    return (
      <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {post})}
        style = {styles.post}>
        <View style={styles.postDisplay}>
          <View style={styles.postBody}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postLocation}>{post.location}</Text>
            <Text style={styles.postDescription} numberOfLines={5}>{post.description}</Text>
          </View>
          <View>
            <Text style={styles.postUrgent}>
              {post.is_urgent ? `this post is urgent!` : ``}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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

    // -------------------------


  // const [postList, setPostList] = useState([]);
  // const postCollectionRef = collection(db, 'posts');

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getDocs(postCollectionRef);
  //     setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   };

  //   getData();
  //   console.log('POST LIST HERRRRRRRE' + postList)
  // }, []);

  // const postDisplayed = post => {
  //   return (
  //     <Text>{post}</Text>
  //   )
  // }
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
