import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TitleText, BodyText } from "../components/MyText";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import ShowNumber from "../components/ShowNumber";
import MyButton from "../components/MyButton";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelected] = useState(); // making the as int
    // const [otherRound, setOtherRound] = useState(false)

    const checkNumberInput = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    };

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number!",
                `${chosenNumber} is not a Valid Number`,
                [
                    {
                        text: "okay",
                        style: "destructive",
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }
        setConfirmed(true);
        setSelected(chosenNumber);
        setEnteredValue("");
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <View>
                <Card style={styles.numberCard}>
                    <Text>Your selected number:</Text>
                    <ShowNumber>{selectedNumber}</ShowNumber>
                    <MyButton
                        style={styles.startButton}
                        onPress={() => {
                            props.onStartGame(selectedNumber);
                        }}
                    >
                        Start Game
                    </MyButton>
                </Card>
            </View>
        );
    }

    // let list;
    // if (props.guessList) {
    //     list = (
    //         <View>
    //             <Text>We have a List {props.guessList}</Text>
    //         </View>
    //     );
    // }

    return (
        // TouchableWithoutFeedback is for IOS perticularly
        // <TouchableWithoutFeedback
        //     onPress={() => {
        //         Keyboard.dismiss();
        //     }}
        // >
        <View style={styles.screen}>
            <TitleText>Start Game</TitleText>
            <Card style={styles.inputContainer}>
                <BodyText>Enter a Number</BodyText>
                <Input
                    blurOnSubmit
                    autoCapitalize="none"
                    keyboardType="numeric"
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={checkNumberInput}
                    value={enteredValue}
                    style={styles.inputBox}
                />
                <View style={styles.buttonContainer}>
                    <MyButton
                        style={styles.resetButton}
                        onPress={() => {
                            resetInputHandler();
                        }}
                    >
                        Reset
                    </MyButton>
                    <MyButton
                        style={styles.confirmButton}
                        onPress={() => {
                            confirmInputHandler();
                        }}
                    >
                        Confirm
                    </MyButton>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        // </TouchableWithoutFeedback>
    );
};

// there is one exception in React-Native that the styles do not pass to the children elements but with Text it is true that styles passes to text element which is a child of a Text

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    inputContainer: {
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        marginBottom: 20,
    },
    inputBox: {
        textAlign: "center",
        width: 30,
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    startButton: {
        width: 150,
        // width: "80%",
    },
    confirmButton: {
        width: 100,
    },
    resetButton: {
        width: 100,
        backgroundColor: Colors.secondary,
    },
    numberCard: {
        alignItems: "center",
    },
});

export default StartGameScreen;
