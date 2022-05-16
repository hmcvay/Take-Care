import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, 
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const Post = ({post, navigation}) => {
  const {title, description, location, id, time} = post;
  return(
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: 'solid black 1px',
        paddingBottom: 7,
        paddingTop: 7,
        paddingLeft: 5,
        margin: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View 
        style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        }}>
        <Image
          source={{uri: post.image_path}}
          style={{width: 75, height: 75, borderRadius: 8, marginRight: 5}}
        />
        <View style={{width: windowWidth - 180}}>
          <Text>
            {title}
          </Text>
          <Text numberOfLines={2} style={{fontSize: 18}}>
            {description}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{marginRight: 5}}>
          {location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Post;