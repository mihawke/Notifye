import { Button, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { Component, useState } from 'react'
import TaskCard from './taskcard'
import { styles } from './styles/tasks.styles'

const Tasks = () => {
    const [data, setData] = useState([
        { id: 1, item: 'Task One' },
        { id: 2, item: 'Task Two' },
        { id: 3, item: 'Task Three' },
        { id: 4, item: 'Task Four' },
        { id: 5, item: 'Task Five' },
        { id: 6, item: 'Task Six' },
        { id: 7, item: 'Task Seven' },
        { id: 8, item: 'Task Eight' },
        { id: 9, item: 'Task Nine' },
        { id: 10, item: 'Task Ten' }
    ])
    const [newItem, setNewitem] = useState()
    const handleChange = (value) => {
        setNewitem(value)
    }
    const handleSubmit = () => {
        const newTask = { id: data.length + 1, item: newItem };
        if (newItem == "") {

        }
        else {
            setData([...data, newTask]);
            setNewitem("");
        }
    };
    const handleDelete = () => {
        setData(data.slice(0, -1));
    }

    return (
        <View>
            <View style={styles.container}>
                {data.map((item) =>
                    <TaskCard key={item.id} task={item.item}></TaskCard>
                )}
                <View style={styles.input}>
                    <TextInput clearButtonMode='always' onChangeText={handleChange} style={styles.textInput} placeholder="Placeholder"></TextInput>
                    <View style={styles.button}>
                        <Button title="Add Task" color="#042234" onPress={handleSubmit}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Remove Task" color="#042234" onPress={handleDelete}></Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tasks