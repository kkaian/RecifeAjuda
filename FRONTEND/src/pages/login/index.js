import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CriarConta from '../CreateAccount';
import { Routes } from '../../routes';
import { useTranslation } from 'react-i18next';
import LangButton from '../../LangButton';

export function TelaLogin() {

  const [t] = useTranslation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(); // Estado para controlar se o usuário está autenticado
  const [cadastro, setCadastro] = useState(false);
  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulando uma autenticação bem-sucedida
    setIsLoggedIn(true);

  };

  const SignUp = () => {

    setCadastro(true);

  }

  if (isLoggedIn) {
    // Se o usuário estiver autenticado, renderize a tela Home
    return <Routes />;
  }

  if (cadastro) {

    return <CriarConta />;
  }

  return (
    <LinearGradient
      colors={['#5de0e6', '#004aad']}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <LangButton/>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/logo-recifeajuda.png")}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder={t('Email')}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder={t('senha')}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={SignUp}
        >
          <Text style={styles.button_siginText}>{t('CADASTRE-SE')}</Text>
        </TouchableOpacity>

        <Pressable style={styles.button} onPress={handleLogin}>
          <LinearGradient
            colors={['#15a63a', '#7ed957']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}

          >
            <Text style={styles.buttonText}>{t('Entrar')}</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 15,
    width: 250,
    height: 250,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '60%',
    height: 50,
    borderRadius: 100,
    marginTop: 40,
    overflow: 'hidden', // Evita que o gradiente ultrapasse os limites do botão
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  button_siginText: {
    fontSize: 14,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaLogin;
