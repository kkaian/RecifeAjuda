import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Aboutus from '../about';
import { FontAwesome6 } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';


export function Home() {
  const t = useTranslation()
  const projects = [
    { id: 1, title: 'Projeto 1', image: require('../../../assets/cacarprea.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
    { id: 2, title: 'Projeto 2', image: require('../../../assets/cozinhacomunitaria.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
    { id: 3, title: 'Projeto 3', image: require('../../../assets/catarlixo.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
    { id: 4, title: 'Projeto 4', image: require('../../../assets/plantiocomunitario.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
    { id: 5, title: 'Projeto 5', image: require('../../../assets/cacarprea.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
    { id: 6, title: 'Projeto 6', image: require('../../../assets/cacarprea.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
    { id: 7, title: 'Projeto 7', image: require('../../../assets/cacarprea.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
    { id: 8, title: 'Projeto 8', image: require('../../../assets/cacarprea.png'), recicoin: '30', date: '21/05/2003', hour: '16:20 - 17:20' },
  
  ];

  const [about, setAbout] = useState(false);

  const PressIcon = () => {

    setAbout(true);

  }

  if (about) {

    return <Aboutus/>;
  }
  
  return (
    
    <View style={styles.container}>
      <View>
        <LinearGradient
          colors={["#5de0e6", "#004aad"]}
          start={{ x: 0.5, y: 0.0 }}
          end={{ x: 0.5, y: 1.0 }}
          style={styles.gradiente}
        >
          <Image
            style={styles.logo}
            source={require("../../../assets/logo-recifeajuda.png")}
          />

          <TouchableOpacity onPress={PressIcon}>
          <Image
            style={styles.sobrenos}
            source={require("../../../assets/icon-sobrenos.png")} 
          />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <ScrollView 
      showsVerticalScrollIndicator={false}
     
      >
      <View style={styles.contPrincipal}> 
      {projects.map(project => (
       <View key={project.id} style={styles.centralizarProj}>
       
          <View style={styles.boxTitulo}>
            <Text style={styles.titulo}>{project.title}</Text>
          </View>
          <View style={styles.conteudo}>
          <Image
            style={styles.imagem}
            source={project.image}
          />
          </View>
          <View style={styles.boxInfo}>
            <View style={styles.boxCalenHour}>
          <View style={[styles.calen]}>
            <Image
              style={[styles.icone, styles.calen]}
              source={require("../../../assets/calendario.png")}
            />
            <Text style={[styles.calen]}>{project.date}</Text>
          </View>
          <View style={[styles.calen]}>
            <Image
              style={[styles.icone, styles.calen]}
              source={require("../../../assets/icon-relogio.png")}
            />
            <Text style={[styles.calen]}>{project.hour}</Text>
          </View>
          </View>
          <View style={[styles.calen, styles.recicoinBorda]}>
            <FontAwesome6
                name='coins' color='gold' size={15}
              style={[styles.recicoinAjuste]}
              
            />
            <Text style={[styles.calen, styles.recicoinAjuste]}>{project.recicoin}</Text>
          </View>
          </View>
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
       );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradiente: {
    flex: 0,
    height: 100,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
  },

  logo: {
    width: 130,
    height: 130,
    top: -5,
    right: 130,
    margin: 0,
  },
  sobrenos: {
    width: 25,
    height: 25,
    margin: 0,
    top: -83,
    left: 160,
    opacity: 0.4,
  },

  contPrincipal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: 'wrap', 
    
    
  },
  centralizarProj: {

    backgroundColor: '#E6E3E3',
    borderRadius:20,
   
    marginLeft: '3%',
    marginTop: '3%',
    marginRight: '1%',
    marginBottom: '5%',
    width: '45%',
    height: '22.5%',
    alignItems: "center",
    justifyContent: "center",
   
   
  },
  
  boxTitulo: {
    flex: 1,
    borderRadius: 30,
    borderColor: "#CAC8C",

  },

  titulo: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: '4%',
    marginBottom: '4%',
   
  },
  conteudo: {
    width: 155, 
    height: 155, 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 20,
    marginBottom: 20,

  },
  imagem: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  boxInfo: {

    backgroundColor: "#fff",
    width: 155, 
    height: 50,
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: 'row', 
    alignItems: 'center',

  },

  boxCalenHour: {
    

  },

  icone: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  calen: {
    flexDirection: "row",
    fontSize: 12,
    marginLeft: 5,
    marginTop: '1.5%'
  },
 
  recicoinAjuste: {
     marginLeft: '9%',
      alignSelf: 'center',
  },
  recicoinBorda:{
    borderLeftWidth: 0.9,
   
    height: '70%',
    
  }

});

export default Home;
