import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Animated, Image } from 'react-native';

import Header from '../../components/Header/Header';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';


export default function Onboarding({ navigation }) {
    const [displayedText, setDisplayedText] = useState("Welcome to BoarScout V2, let's get started.");
    const [textAnimation] = useState(new Animated.Value(0));

    useEffect(() => {

        const fullText = "Welcome to BoarScout V2, let's get started.";
        let index = 0;

        Animated.timing(textAnimation, {
            toValue: 1,
            duration: fullText.length * 100,
            useNativeDriver: true,
        }).start();

        const intervalId = setInterval(() => {

            // TODO Remove at PROD
            clearInterval(intervalId);
            return

            if (index < fullText.length || displayedText.length == fullText.length) {
                setDisplayedText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100); 

        return () => clearInterval(intervalId);

    }, []);

    return (
        <SafeAreaView style={globalStyles.containerVertical}>
            <Header />
            <View style={styles.welcome}>
                <Animated.Text style={[styles.largeText, { opacity: textAnimation }]}>
                    {displayedText}
                </Animated.Text>
            </View>
            <Animated.View style={{opacity: textAnimation}}>
                <Image source={require('../../assets/png/huber.png')} style={styles.boar} />
            </Animated.View>
        </SafeAreaView>
    );
}
