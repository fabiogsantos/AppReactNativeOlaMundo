import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Olá Mundo!</Text>
        <Text>Fabio Gonçalves</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d594',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
