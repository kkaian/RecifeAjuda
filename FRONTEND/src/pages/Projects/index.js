import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export function Projects() {
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
    
    </LinearGradient>
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
});

export default Projects;