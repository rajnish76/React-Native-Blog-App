import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <AntDesign
        size={25}
        name="pluscircle"
        style={{ marginRight: 15 }}
        onPress={() => navigation.navigate('Create')}
      />
    ),
  });

  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.image}
    >
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default IndexScreen;
