import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useWindowDimensions } from 'react-native';
import TelaLogin from '../login';
import { useTranslation } from 'react-i18next';

export function CriarConta() {
  const  { t }   = useTranslation()
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');
  const [nome, setNome] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [password, setPassword] = useState('');
  const [hasSign, setHasSign] = useState(false);

  useEffect(() => {
    const isPortrait = window.height > window.width;
    setOrientation(isPortrait ? 'portrait' : 'landscape');
  }, [window]);

  const handleSignUp = () => {
    // Verifique se todos os campos estão preenchidos
    if (nome && datanascimento && telefone && cpf && email && cep && password) {
      // Faça algo com os dados, como enviar para um servidor ou armazenar localmente
      // Por exemplo, você pode enviar os dados para um endpoint de API para criar uma conta
      console.log('Cadastro realizado com sucesso:', {
        nome,
        datanascimento,
        telefone,
        cpf,
        email,
        cep,
        password,
      });

      // Limpe os campos após o cadastro
      setNome('');
      setDatanascimento('');
      setTelefone('');
      setCpf('');
      setEmail('');
      setCep('');
      setPassword('');

      // Exiba uma mensagem de sucesso (opcional)
      alert('Cadastro realizado com sucesso!');
      setHasSign(true);
    } else {
      // Se algum campo estiver vazio, exiba um alerta pedindo ao usuário que preencha todos os campos
      alert('Por favor, preencha todos os campos.');
    }
  };

  if (hasSign) {
    return <TelaLogin />;
  }

  return (
    <LinearGradient
      colors={['#5de0e6', '#004aad']}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image
            source={require("../../../assets/logo-recifeajuda.png")}
            style={styles.logo}
          />
          <Text style={styles.Text}>{t('CADASTRE-SE')}</Text>
          <Text style={[styles.Text1, { marginBottom: 25 }]}>{t('Informe seus dados a seguir:')}</Text>

          <Text style={styles.label}>{t('Nome Completo')}</Text>
        <TextInput
          placeholder={t("Qual é seu nome?")}
          style={styles.TextInput}
          onChangeText={text => setNome(text)}
        />

        <Text style={styles.label}>{t("DATA DE NASCIMENTO")}</Text>
        <TextInput
          placeholder="XX/XX/XXXX"
          style={styles.TextInput}
          onChangeText={text => setDatanascimento(text)}
        />
        <Text style={styles.label}>{t("Telefone")}</Text>
        <TextInput
          placeholder="(XX) XXXXX-XXXX"
          style={styles.TextInput}
          onChangeText={text => setTelefone(text)}
        />
         <Text style={styles.label}>{t("CPF")}</Text>
        <TextInput
          placeholder="___.___.___-__"
          style={styles.TextInput}
          onChangeText={text => setCpf(text)}
        />
         <Text style={styles.label}>{t("EMAIL")}</Text>
        <TextInput
          placeholder={t("Exemplo@gmail.com")}
          style={styles.TextInput}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>{t("senha")}</Text>
        <TextInput
          placeholder={t("Crie sua senha")}
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
         <Text style={styles.label}>{t("CEP")}</Text>
        <TextInput
          placeholder="XXXXX-XXX"
          style={styles.TextInput}
          onChangeText={text => setCep(text)}
        />

          <TouchableOpacity style={orientation === 'landscape' ? styles.buttonLandscape : styles.button} 
            onPress={handleSignUp}>
            <LinearGradient
              colors={['#15a63a', '#7ed957']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>{t("Confirmar")}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'flex-start', 
    justifyContent: 'center',
    paddingHorizontal: '10%', 
  },
  logo: {
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginTop: -25,
    width: 150,
    height: 150,
  },
  TextInput: {
    width: '100%', 
    height: 35,
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    width: '60%',
    height: 50,
    borderRadius: 100,
    marginTop: 10,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#000000',
    textAlign: 'left',
    fontSize: 12,
    width: '100%', 
  },
  Text: {
    marginTop: -25,
    marginBottom: 0,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  Text1: {
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 15,
   alignSelf: 'center',
  },
  buttonLandscape: {
    width: '50%',
    height: 50,
    borderRadius: 100,
    marginTop: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 20,
  },
});


export default CriarConta;