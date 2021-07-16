import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput value="Email Address" style={styles.input} />
        <TextInput value="Password" style={styles.input} />
        <Button label="Submit" />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign Up here!!</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#dddddd',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerContainer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
});
