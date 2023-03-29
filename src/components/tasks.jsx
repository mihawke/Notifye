import { Button, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import TaskCard from './taskcard'
import { styles } from './styles/tasks.styles'

const Tasks = () => {
    const [data, setData] = useState([])
    return (
        <View>
            <View style={styles.container}>
                <TaskCard task={'Task One'}></TaskCard>
                <TaskCard task={'Task Two'}></TaskCard>
                <TaskCard task={'Task Three'}></TaskCard>
                <TaskCard task={'Task Four'}></TaskCard>
                <TaskCard task={'Task Five'}></TaskCard>
                <TaskCard task={'Task Six'}></TaskCard>
            </View>
            <View>
                <Button></Button>
                <Button></Button>
            </View>
        </View>
    )
}

export default Tasks