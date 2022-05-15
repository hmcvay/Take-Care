import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';


function PostDetails({navigation}){
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DETAILS</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('PostList')} >
        <View style={{fontSize: 20}}>
          <Text>Back to list</Text>
        </View>
      </TouchableOpacity>
    </View>

  );
};

export default PostDetails;