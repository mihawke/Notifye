import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React,{useState} from 'react'
import { styles } from './styles/HomePage.styles'
import Header from '../components/header'
import Tasks from '../components/tasks'
import AddNew from '../components/addnew';

const HomePage = () => {
  const [show, setShow] = useState(false)
  return (
    <TouchableHighlight style={styles.container}>
      <View style={styles.container}>
        <View>
          <Header></Header>
        </View>
        <View>
          <AddNew></AddNew>
        </View>
        <ScrollView>
          <Tasks></Tasks>
        </ScrollView>
        <View >
          <TouchableHighlight
            onPress={() => alert('Pressed!')}>
            <View style={styles.float}>
              <Feather name="plus" size={24} color="white" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default HomePage