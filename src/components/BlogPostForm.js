import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import Textarea from 'react-native-textarea';

const BlogPostForm = ({ onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.image}
    >
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>

      <Textarea
        containerStyle={styles.textareaContainer}
        style={styles.textarea}
        value={content}
        onChangeText={(text) => setContent(text)}
        defaultValue={content}
        maxLength={10000}
        underlineColorAndroid={'transparent'}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </ImageBackground>
  );
};

BlogPostForm.defaultProps = {
  initialValue: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  textareaContainer: {
    height: '50%',
    padding: 5,
    backgroundColor: '#F5FCFF',
    width: '95%',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 25,
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: '100%',
    fontSize: 14,
    color: '#333',
  },
});

export default BlogPostForm;
