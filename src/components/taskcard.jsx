import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import { styles } from './styles/taskcard.styles';

const TaskCard = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
            </View>
            <Text style={styles.title}>{props.task}</Text>
        </View>
    );
};

export default TaskCard