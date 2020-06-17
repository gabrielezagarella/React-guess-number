import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.container, ...props.style}}/>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 10
        
    }
})

export default Input;