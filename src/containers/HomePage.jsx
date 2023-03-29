import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles/HomePage.styles'
import Header from '../components/header'
import Footer from '../components/footer'
import TaskCard from '../components/taskcard'
import Tasks from '../components/tasks'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <ScrollView>
        <View>
          <Tasks></Tasks>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer></Footer>
      </View>
    </View>
  )
}

export default HomePage