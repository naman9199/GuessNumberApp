import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        // .ttf will not be taken automatically you have to manually tyoe it
    });
};

let PlayerID = 1;

export default function App() {
    const [userNum, setUserNum] = useState();
    const [gameRounds, setGameRounds] = useState(0);
    const [loadData, setLoadData] = useState(false);

    if (!loadData) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setLoadData(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    const gameRoundHandler = (rounds) => {
        setGameRounds(rounds);
    };

    const startGameHandler = (selectedNum) => {
        setUserNum(selectedNum);
    };

    const resetGameHandler = () => {
        setUserNum(null);
        setGameRounds(0);
    };

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if (userNum && gameRounds <= 0) {
        content = (
            <GameScreen userChoice={userNum} onGameOver={gameRoundHandler} />
        );
    } else if (gameRounds > 0) {
        content = (
            <GameOverScreen
                guessCount={gameRounds}
                userChoice={userNum}
                resetFun={resetGameHandler}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess the Number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
