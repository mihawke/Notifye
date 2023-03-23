import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles/header.styles'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
    </View>
  )
}

export default Header