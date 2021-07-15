import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { bool, string } from 'prop-types';

function Hello(props) {
  const { children, bang } = props;
  return (
    <View>
      <Text style={styles.text}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
};

Hello.defaultProps = {
  bang: false,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
