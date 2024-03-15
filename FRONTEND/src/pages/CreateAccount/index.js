import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function CriarConta() {
  return (

      <View style={styles.container}>
        <Text>tela de criar conta</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default CriarConta;
