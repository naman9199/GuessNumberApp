import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleText = (props) => (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const BodyText = (props) => (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 17,
    },
    body: {
        fontFamily: "open-sans",
        fontSize: 17,
    },
});

export { BodyText, TitleText };
