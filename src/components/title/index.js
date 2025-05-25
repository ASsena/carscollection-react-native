import React from "react";  
import { View, Text, StyleSheet } from "react-native";

export default function Title(){
    return(
        <Text style={styles.titulo}>WebCars</Text>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 30,
    }
})