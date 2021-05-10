import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Color from "../constants/colors";

const ShowNumber = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: Color.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginTop: 30,
    },
    number: {
        fontSize: 30,
        color: Color.primary,
        alignItems: "center",
    },
});

export default ShowNumber;
