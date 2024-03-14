import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TelaLogin } from './src/pages/login'; // Importe TelaLogin corretamente

export default function App() {
  return (
    <View style={styles.container}>
      <TelaLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


//lembrete:não é nessa pag que se programa, faça o index na devida página dentro de "pages"
//se não for definida a forma de navegação, será exibida essa pag, se quiser fazer
//alguma tela mas n existe ainda a nevegação, pode usar essa para visualizar, mas
//depois coloque na pasta correta!!