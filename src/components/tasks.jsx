import { Button, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from 'react'
import TaskCard from './taskcard'
import { styles } from './styles/tasks.styles'

const Tasks = () => {
    const [data, setData] = useState([
        'Task One',
        'Task Two',
        'Task Three',
        'Task Four',
        'Task Five',
        'Task Six',
        'Task Seven',
        'Task Eight',
        'Task Nine',
        'Task Ten'
    ])
    const handleAdd = () => {
        setData()
    }
    return (
        <View>
            <View style={styles.container}>
                {data.map((item) =>
                    <TaskCard task={item}></TaskCard>
                )}
                <View style={styles.input}>
                    <TextInput onChange={handleAdd} style={styles.textInput} placeholder="Placeholder"></TextInput>
                    <View style={styles.button}>
                        <Button title="Add Task" color="#042234"></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Remove Task" color="#042234"></Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tasks