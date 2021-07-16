import React from 'react';
import {
  StyleSheet, View, Text, ScrollView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleBotton from '../components/CircleBotton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年7月15日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          書体やレイアウトを確認するために用います。
          本文様なので使い方を間違えると不自然に見えることもあります。
        </Text>
      </ScrollView>
      <CircleBotton style={{ top: 160, bottom: 'auto' }}>+</CircleBotton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
  },
  memoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
