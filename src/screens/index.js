import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);
  console.log(data);
  return <View>
    <Text>Index screen</Text>
    <Button title="Add post" onPress={addBlogPost} />
    <FlatList 
      data={data}
      keyExtractor={(post) =>post.title}
      renderItem={({item}) => {
        return <View>
          <Text>{item.title}</Text>
        </View>
      }}
    />
  </View>

};

const styles = StyleSheet.create({});

export default IndexScreen;