import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
    // {...props} is just forwarding the props like style (we are using the style prop so we used to ...styles.input + ...props.style) so we can stay away from overriding the prop even if the user add the styles it will just be added and in the conflicting scenario the prop entered by the user will be overrided the styling by us
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 20,
        height: 30,
        // paddingHorizontal: 10,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        // we can overwrite
    },
});

export default Input;
