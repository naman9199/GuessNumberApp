import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
    // spreading the styles so that we can add the styling manually from the screen we are calling it in
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    },
});

export default Card;
