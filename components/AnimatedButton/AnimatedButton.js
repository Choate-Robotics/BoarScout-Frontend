import { useState } from "react";
import { Pressable, Animated  } from "react-native";

import { styles } from "./styles";
import { styles as globalStyles } from "../../global/styles";
import { sendHaptic } from "../../helpers/sendHaptic";

export default function AnimatedButton({ style, onPress, children }) {
    const [animation, setAnimation] = useState(new Animated.Value(1));

    function handlePress() {
        sendHaptic.impactMedium();
        onPress();
    }

    function pressIn() {
        Animated.timing(animation, {
            toValue: 0.9,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }

    function pressOut() {
        Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }

    return (
        <Pressable onPressIn={pressIn} onPressOut={pressOut} onPress={handlePress}>
            <Animated.View style={[styles.container, { transform: [{ scale: animation }]}, style]}>
                {children}
            </Animated.View>
        </Pressable>
    );

}