import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const MyButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.buttonContainer, ...props.style }}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        // paddingHorizontal: 70,
        width: 200,
        alignItems: "center",
        borderRadius: 40,
        // marginTop: 20,
    },
    text: {
        color: "white",
        fontSize: 17,
        fontFamily: "open-sans",
    },
});

export default MyButton;
