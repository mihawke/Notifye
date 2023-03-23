import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles/HomePage.styles'
import Header from '../components/header'
import Footer from '../components/footer'
import Cards from '../components/cards'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <View style={styles.bodyContainer}>
        <Cards></Cards>
      </View>
      <View style={styles.footer}>
        <Footer></Footer>
      </View>
    </View>
  )
}

export default HomePage