import React, { useEffect, useState } from 'react';
import {
  Alert, StyleSheet, View, Text,
} from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleBotton from '../components/CircleBotton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => { };
    if (currentUser) {
      setIsLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
        setIsLoading(false);
      }, (error) => {
        console.log(error);
        setIsLoading(false);
        Alert.alert('エラーが起きました。');
      });
    }
    return unsubscribe;
  }, []);
  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成してみよう</Text>
          <Button
            label="作成する"
            onPress={() => { navigation.navigate('Create'); }}
            style={emptyStyles.botton}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <MemoList memos={memos} />
      <CircleBotton
        name="plus"
        onPress={() => { navigation.navigate('Create'); }}
      />
    </View>
  );
}

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  botton: {
    alignSelf: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
