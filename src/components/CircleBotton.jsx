import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleBotton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleBotton, style]} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CircleBotton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleBotton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleBotton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467fd3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleBottonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});
