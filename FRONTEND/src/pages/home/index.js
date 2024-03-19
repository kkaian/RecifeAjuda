import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function Home() {
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
          <Image
            style={styles.sobrenos}
            source={require("../../../assets/icon-sobrenos.png")}
          />
        </LinearGradient>
      </View>

      <View style={styles.contPrincipal}>
       <View style={styles.centralizarProj}>
        <View>
          <View style={styles.boxTitulo}>
            <Text style={[styles.conteudo, styles.titulo]}>PREA COMUNITARIO</Text>
          </View>
          <Image
            style={[styles.conteudo]}
            source={require("../../../assets/cacarprea.png")}
          />
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

        <View>
        <View style={styles.centralizarProj}>
          <View style={styles.boxTitulo}>
            <Text style={[styles.conteudo, styles.titulo]}>
              COZINHA COMUNITARIA
            </Text>
          </View>
          <Image
            style={[styles.conteudo]}
            source={require("../../../assets/cozinhacomunitaria.png")}
          />
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

        <View>
        <View style={styles.centralizarProj}>
          <View style={styles.boxTitulo}>
            <Text style={[styles.conteudo, styles.titulo]}>
              PLANTIO COMUNITARIO
            </Text>
          </View>
          <Image
            style={[styles.conteudo]}
            source={require("../../../assets/plantiocomunitario.png")}
          />
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

        <View>
        <View style={styles.centralizarProj4}>
          <View style={styles.boxTitulo}>
            <Text style={[styles.conteudo, styles.titulo]}>
              LIXO COMUNITARIO
            </Text>
          </View>
          <Image
            style={[styles.conteudo]}
            source={require("../../../assets/catarlixo.png")}
          />
          <View style={styles.box1}>
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
  },

  contPrincipal: {
    flex: 1,

    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
  },
  centralizarProj: {
    alignItems: 'flex-start',
   
  },
  centralizarProj4: {
    backgroundColor: '#E7E7E7',
    borderRadius: 30,
    height: 180,
    width: 200,
    borderColor: '#D1CDCD',
    
  },
  
  boxTitulo: {
    flex: 0,
    borderRadius: 30,
    alignItems: "center",
    borderColor: "#CAC8C8",
    marginTop: 5,
    marginBottom: -10,
    alignSelf: "center",
    

  },

  titulo: {
    fontSize: 13,
    fontWeight: "700",
    
    marginBottom: 1,
    textDecorationLine: 'underline',
   
  },
  conteudo: {
    margin: 25,
    marginBottom: 10,
    maxHeight: 155,
    maxWidth: 155,
    borderRadius: 20,
  },
  icone: {
    width: 18,
    height: 18,
  },
  calen: {
    flexDirection: "row",
    marginLeft: 15,
    
  },
 
  recicoin: {
    paddingLeft: 0,
    marginLeft: 15,
  },
  centralizarRec: {
    marginLeft: 17,
  },
  box1: {
    backgroundColor: 'white',
    borderRadius: 30,
  }
  
});

export default Home;
