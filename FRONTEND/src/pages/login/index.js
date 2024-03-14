import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function TelaLogin() {
  return (
    <View style={styles.container}>
      <Text>teste tela de login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
