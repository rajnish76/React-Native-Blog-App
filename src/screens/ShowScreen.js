import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  navigation.setOptions({
    headerTitle: <Text>{blogPost.title}</Text>,
    headerRight: () => (
      <EvilIcons
        name="pencil"
        size={35}
        onPress={() => navigation.navigate('Edit', { id })}
      />
    ),
  });

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.image}
    >
      <Text style={styles.text}>{blogPost.content}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    margin: 10,
  },
});

export default ShowScreen;
