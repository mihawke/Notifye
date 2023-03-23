import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from './styles/header.styles'
import { Feather } from '@expo/vector-icons';


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Feather name="menu" size={24} color="white" />
      </TouchableHighlight>
      <TouchableHighlight>
        <a><Feather name="search" size={24} color="white" /></a>
      </TouchableHighlight>
      <TouchableHighlight>
        <a><Feather name="bell" size={24} color="white" /></a>
      </TouchableHighlight>
    </View>
  )
}

export default Header