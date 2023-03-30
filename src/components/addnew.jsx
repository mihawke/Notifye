import React, { useState } from "react";
import { TextInput, View, Button, Overlay, Text } from "react-native";
import styles from "./styles/addnew.styles";

const AddNew = () => {
    return (
        <View>
            <View style={styles.container}>
                <TextInput placeholder="Add New Task"></TextInput>
            </View>
        </View>
    )
}
export default AddNew