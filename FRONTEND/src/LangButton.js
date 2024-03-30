import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import iconBr from '../assets/icon-lang-br.png'
import iconEn from '../assets/icon-lang-en.png'

import i18n from './utils/i18n';

const LangButton = () => {
  const [currentLang, setCurrentLang] = useState('pt_BR')

  const changeLang = value => {
    i18n.changeLanguage(value)
    .then(() => {
      setCurrentLang(value)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (  
    <View style={styles.languages}>
    <TouchableOpacity
      onPress={() => changeLang(currentLang === 'en_US' ? 'pt_BR' : 'en_US')}
    >
    <Image 
    source={currentLang === 'pt_BR'? iconBr : iconEn}/>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  languages: {
    flexDirection: 'row-reverse',
    overflow: 'hidden',
    marginTop: -5,
    marginRight: 5,
    borderRadius: 10,
  },
})

export default LangButton