import React, { useState } from 'react';
import {
  StyleSheet, View, KeyboardAvoidingView, TextInput, Alert,
} from 'react-native';
import firebase from 'firebase';
import CircleBotton from '../components/CircleBotton';
import { translateErrors } from '../utils';

export default function MemoCreateScreen({ navigation }) {
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        const errorMsg = translateErrors(error);
        Alert.alert(errorMsg.title, errorMsg.desctiption);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>
      <CircleBotton
        name="check"
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
