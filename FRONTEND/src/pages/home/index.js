import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Aboutus from '../about';

export function Home() {
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
            source={require("../../../assets/logo-recifeajuda+.png")}
          />
          <TouchableOpacity onPress={PressIcon}>
          <Image
            style={styles.sobrenos}
            source={require("../../../assets/icon-sobrenos.png")} 
          />
          </TouchableOpacity>
        </LinearGradient>
      </View>


      <View style={styles.contPrincipal}> 
       <View style={styles.centralizarProj}>
          <View style={styles.boxTitulo}>
            <Text style={styles.titulo}>PREA COMUNITARIO</Text>
          </View>
          <View style={styles.conteudo}>
          <Image
            style={styles.imagem}
            source={require("../../../assets/cacarprea.png")}
          />
          </View>
          <View style={[styles.calen]}>
            <Image
              style={[styles.icone, styles.calen]}
              source={require("../../../assets/calendario.png")}
            />
            <Text style={[styles.calen]}>21/09/2004</Text>
          </View>
          <View style={[styles.calen]}>
            <Image
              style={[styles.icone, styles.calen]}
              source={require("../../../assets/icon-relogio.png")}
            />
            <Text style={[styles.calen]}>16:00 - 19:00</Text>
          </View>
          <View style={[styles.calen, styles.centralizarRec]}>
            <Image
              style={[styles.icone, styles.calen]}
              source={require("../../../assets/icon-recicoin.png")}
            />
            <Text style={[styles.recicoin]}>30</Text>
          </View>
          </View>
      </View>
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

    backgroundColor: '#D8D6D6',
    borderRadius:20,
    marginLeft: '1.5%',
    marginTop: '5%',
    marginRight: '1%',
    marginBottom: '5%',
    width: '50%',
    height: '40%',
    alignItems: "center",
    justifyContent: "center",

   
  },
  
  boxTitulo: {
    flex: 1,
    borderRadius: 30,
    borderColor: "#CAC8C8",

  },

  titulo: {
    fontSize: 13,
    fontWeight: "700",
   
  },
  conteudo: {
    width: 155, 
    height: 155, 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 20,

  },
  imagem: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  icone: {
    width: 18,
    height: 18,
  },
  calen: {
    flexDirection: "row",

  },
 
  recicoin: {

  },
  centralizarRec: {

  },
  
});

export default Home;
