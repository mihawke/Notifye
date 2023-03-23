import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles/HomePage.styles'
import Header from '../components/header'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <View style={styles.bodyContainer}>
      </View>
      <View style={styles.footer}>
        <Footer></Footer>
      </View>
    </View>
  )
}

export default HomePage