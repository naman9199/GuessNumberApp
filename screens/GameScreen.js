import React, { useState, useRef, useEffect } from "react";
import {
    View,
    StyleSheet,
    Alert,
    ScrollView,
    Text,
    FlatList,
} from "react-native";
import ShowNumber from "../components/ShowNumber";
import Card from "../components/Card";
import { BodyText, TitleText } from "../components/MyText";
import MyButton from "../components/MyButton";
import { AntDesign } from "@expo/vector-icons";
import { render } from "react-dom";

const randomNumBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rnd = Math.floor(Math.random() * (max - min)) + min;
    if (rnd === exclude) {
        return randomNumBetween(min, max, exclude);
    } else {
        return rnd;
    }
};

// for scrollView
// const renderList = (value, numOfRounds) => {
//     return (
//         <View key={value} style={styles.listItems}>
//             <BodyText>#{numOfRounds}</BodyText>
//             <BodyText>{value}</BodyText>
//         </View>
//     );
// };

// for FlatList
const renderList = (listLength, itemData) => {
    return (
        <View style={styles.listItem}>
            <BodyText>#{listLength - itemData.index}</BodyText>
            <BodyText>{itemData.item}</BodyText>
        </View>
    );
};

const GameScreen = ({ userChoice, onGameOver }) => {
    const MinNum = useRef(1);
    const MaxNum = useRef(100);
    const initialGuess = randomNumBetween(1, 100, userChoice);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    useEffect(() => {
        if (userChoice === currentGuess) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice]);

    const AddSubHandler = (choice) => {
        if (
            (choice === "increase" && currentGuess > userChoice) ||
            (choice === "decrease" && currentGuess < userChoice)
        ) {
            Alert.alert(
                "Trying to Cheat?",
                "Hehe, not allowed to cheat Computer !!",
                [{ text: "Sorry!", style: "default" }]
            );
            return;
        }

        if (choice === "increase") {
            MinNum.current = currentGuess;
        } else {
            MaxNum.current = currentGuess;
        }

        const nextNum = randomNumBetween(
            MinNum.current + 1,
            MaxNum.current - 1,
            currentGuess
        );
        setCurrentGuess(nextNum);
        // setRounds((curRounds) => curRounds + 1);
        setPastGuesses((curGuess) => [nextNum.toString(), ...curGuess]);
    };

    return (
        <View style={styles.screen}>
            {/* <TitleText>Opponent's Guess :</TitleText> */}
            <ShowNumber>{currentGuess}</ShowNumber>
            <Card style={styles.buttonContainer}>
                <MyButton
                    onPress={AddSubHandler.bind(this, "decrease")}
                    style={styles.buttons}
                >
                    <AntDesign name="minuscircleo" size={24} color="white" />
                </MyButton>
                <MyButton
                    onPress={AddSubHandler.bind(this, "increase")}
                    style={styles.buttons}
                >
                    <AntDesign name="pluscircleo" size={24} color="white" />
                </MyButton>
            </Card>
            <View style={styles.listContainer}>
                {/* this is working scrollView 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                >
                    {pastGuesses.map((guess, index) =>
                        renderList(guess, pastGuesses.length - index)
                    )}
                </ScrollView> */}
                <FlatList
                    data={pastGuesses}
                    keyExtractor={(item) => item}
                    renderItem={renderList.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    },
    buttons: {
        width: 100,
    },
    listContainer: {
        flex: 1,
        width: "70%",
    },
    list: {
        flexGrow: 1,
    },
    listItem: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
});

export default GameScreen;
