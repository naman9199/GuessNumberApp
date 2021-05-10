import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Card from "../components/Card";
import Color from "../constants/colors";
import { TitleText, BodyText } from "../components/MyText";
import MyButton from "../components/MyButton";

const GameOverScreen = ({ guessCount, userChoice, resetFun }) => {
    return (
        <View style={styles.container}>
            <TitleText style={styles.gameOver}>Game is Over !</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/Success.jpg")}
                    // source={{uri: 'Image.url'}} using the network image
                    style={styles.img}
                    resizeMode="contain"
                    // contain fits the img in the box reserved for it
                    // cover just maintains aspect ratio
                />
            </View>
            <Card style={styles.card}>
                <BodyText>
                    Attempts :{" "}
                    <Text style={styles.resultText}>{guessCount}</Text>
                </BodyText>
            </Card>
            <Card style={styles.card}>
                <BodyText>
                    The Number was :{" "}
                    <Text style={styles.resultText}>{userChoice}</Text>
                </BodyText>
            </Card>
            <MyButton onPress={resetFun} style={styles.button}>
                Play Again
            </MyButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        maxWidth: "80%",
        width: 300,
        margin: 20,
        alignItems: "center",
    },
    button: {
        marginTop: 30,
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 150,
        borderWidth: 4,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    img: {
        width: 350,
        height: 350,
    },
    resultText: {
        color: "red",
        fontFamily: "open-sans-bold",
    },
    gameOver: {
        color: Color.secondary,
        fontFamily: "open-sans-bold",
        marginBottom: 40,
        fontSize: 25,
    },
});

export default GameOverScreen;
