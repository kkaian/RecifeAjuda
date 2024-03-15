import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TelaLogin } from './src/pages/login'; 


export default function App() {
  return (

      <View style={styles.container}>
        <TelaLogin />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


//lembrete:não é nessa pag que se programa, faça o index na devida página dentro de "pages"
