import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles/HomePage.styles'
import Header from '../components/header'
import Footer from '../components/footer'
import TaskCard from '../components/taskcard'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <TaskCard task={'Task One'}></TaskCard>
          <TaskCard task={'Task Two'}></TaskCard>
          <TaskCard task={'Task Three'}></TaskCard>
          <TaskCard task={'Task Four'}></TaskCard>
          <TaskCard task={'Task Five'}></TaskCard>
          <TaskCard task={'Task Six'}></TaskCard>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer></Footer>
      </View>
    </View>
  )
}

export default HomePage