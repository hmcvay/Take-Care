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
import { collection, getDocs, doc, Timestamp } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { windowHeight, windowWidth } from "../utilities/Dimensions";
import { posts } from './../seed/data';
import { fonts } from "react-native-elements/dist/config";
import PostCard from './PostCard';

function PostList({navigation}){

  const [posts, setPosts] = useState({empty: true});
  // const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
      async function getData(){
        const list=[];
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach(doc => {
          const {title, description, location } = doc.data();
          list.push({
            title,
            description,
            location
          });
        })
        setPosts(list);
        setIsLoading(false);
      };
      getData();
    }
  );

  return (
    <View style={styles.pageLayout}>
      <FlatList 
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item=>item.id}
      />
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
              style={{color: '#ed4b2a', fontSize:30, bottom: 2}}
              name="eye"
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

  // useEffect(() => {
  //   getData();
  // }, [update]);

  // useFocusEffect(() => {
  //   () => getList();
  // });

  // useEffect(() => {
  // }, [isLoading]);

  // const checkIfLoading = () => {
  //   if (isLoading === true || postList.empty === true){
  //     return (
  //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //         <Image 
  //           source={require('./../assets/takeCareTransparent.png')}
  //           opacity={0.5}
  //           style={{width: 200, height: 200}}
  //         />
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <View style={{height: windowHeight - 200}}>
  //         <FlatList 
  //           data={postList}
  //           renderItem={({post}) => <>{postDisplayBlock(post)}</>}
  //         />
  //       </View>
  //     );
  //   }
  // };

  // const postDisplayBlock = post => {
  //   console.log("THESE ARE POSTS!!!!" + {post})
  //   return (
  //     <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {post})}
  //       style = {styles.post}>
  //       <View style={styles.postDisplay}>
  //         <View style={styles.postBody}>
  //           <Text style={styles.postTitle}>{post.title}</Text>
  //           <Text style={styles.postLocation}>{post.location}</Text>
  //           <Text style={styles.postDescription} numberOfLines={5}>{post.description}</Text>
  //         </View>
  //         <View>
  //           <Text style={styles.postUrgent}>
  //             {post.is_urgent ? `this post is urgent!` : ``}
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  // ---------------------STATIC DATA--------------------------

  // return (
  //   <View style={styles.pageLayout}>
  //    {/* {checkIfLoading()} */}
  //     <View style={styles.post}>
  //       <Text style={styles.postTitle}>NEED BOOTS</Text>
  //       <Text style={styles.postLocation}>sullivan's gulch: holladay and 25th</Text>
  //       <Text style={styles.postDescription}>Mutual PDX is collecting as many pairs of durable, warm, new, or gently used boots as possible for our unhoused neighbors! We will be out collecting donations until late evening May 15, down on the stretch of Holladay between 23rd and 28th</Text>
  //       <View style={styles.postButtons}>
  //         <Icon
  //           style={{fontSize: 25, paddingRight: 20 }}
  //           name="paper-clip"
  //         />
  //         <Icon
  //           style={{fontSize: 25}} 
  //           name="heart"
  //         />
  //       </View>
  //     </View>
      // <View>
      //   <TouchableOpacity>
      //     <View style={styles.buttons}>
      //       <Icon 
      //         style={{color: '#ed4b2a', fontSize: 30, bottom: 2}}
      //         name="list"
      //         onPress={() => navigation.navigate('PostList')}
      //       />
      //       <Icon
      //         style={{color: '#ed4b2a', fontSize:30, bottom: 2}}
      //         name="pencil"
      //         onPress={() => navigation.navigate('AddPost')}
      //       />
      //       <Icon
      //         style={{color: '#ed4b2a', fontSize:30, bottom: 2}}
      //         name="paper-clip"
      //       />
      //       <Icon 
      //         style={{color: '#ed4b2a', fontSize: 30, bottom: 2}}
      //         name="emotsmile"
      //         onPress={() => navigation.navigate('Home')}
      //       />
      //     </View>
      //   </TouchableOpacity>
      // </View>
  //   </View>
  // )
};

export default PostList;

const styles = StyleSheet.create({
  pageLayout:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 3,
    backgroundColor: '#efeee9',
    width: windowWidth,
  },

  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: 'black',
    width: windowWidth - 6,
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
