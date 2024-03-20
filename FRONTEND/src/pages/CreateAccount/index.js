import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from '../home';
import TelaLogin from '../login';


export function CriarConta() {
  const [nome, setNome] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [password, setPassword] = useState('');
  const [hasSign, setHasSign] = useState(false);

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

    if(hasSign){
      return <TelaLogin/>;
    }
    

  return (
    <LinearGradient
      colors={['#5de0e6', '#004aad']}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <View style={styles.content}>

        <Image
          source={require("../../../assets/logo-recifeajuda+.png")}
          style={styles.logo}
        />
        
        <Text style={styles.Text}>CADASTRE-SE</Text>
        <Text style={[styles.Text1, { marginBottom: 25 }]}>INFORME SEUS DADOS A SEGUIR:</Text>



        <Text style={styles.label}>NOME COMPLETO</Text>
        <TextInput
          placeholder="Qual é seu nome?"
          style={styles.TextInput}
          onChangeText={text => setNome(text)}
        />

        <Text style={styles.label}>DATA DE NASCIMENTO</Text>
        <TextInput
          placeholder="XX/XX/XXXX"
          style={styles.TextInput}
          onChangeText={text => setDatanascimento(text)}
        />
        <Text style={styles.label}>TELEFONE</Text>
        <TextInput
          placeholder="(XX) XXXXX-XXXX"
          style={styles.TextInput}
          onChangeText={text => setTelefone(text)}
        />
         <Text style={styles.label}>CPF</Text>
        <TextInput
          placeholder="___.___.___-__"
          style={styles.TextInput}
          onChangeText={text => setCpf(text)}
        />
         <Text style={styles.label}>EMAIL</Text>
        <TextInput
          placeholder="Exemplo@gmail.com"
          style={styles.TextInput}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          placeholder="Crie sua senha"
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
         <Text style={styles.label}>CEP</Text>
        <TextInput
          placeholder="XXXXX-XXX"
          style={styles.TextInput}
          onChangeText={text => setCep(text)}
        />


<TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <LinearGradient
            colors={['#15a63a', '#7ed957']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginLeft: 15,
    marginTop:-40,
    width: 150,
    height: 150,
  },
  TextInput: {
    width: 300,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 5,
    paddingHorizontal: 10,
    
    //textAlign: 'left'
  },
  buttonText: {
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    width: '60%',
    height: 50,
    borderRadius: 100,
    marginTop: 20,
    overflow: 'hidden', // Evita que o gradiente ultrapasse os limites do botão
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
    width:'70%',
    //marginLeft: -150
  },
  Text: {
    marginTop: -23, 
    marginBottom: 0,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Text1: {
    marginTop: 5, 
    marginBottom: 0,
    color: 'white',
    fontSize: 15,
  },

  
});

export default CriarConta;