import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Speaker from "../../assets/svg/Speaker";
import Amp from "../../assets/svg/Amp";
import BackgroundBtn from "../../assets/svg/BackgroundBtn";

import { styles } from "./styles";
import { styles as globalStyles } from "../../global/styles";

export default function PressItem({ item, onPress, keyVal, data }) {
    const [imageBg, setImageBg] = useState(item.success ? "#56972E" : "#BE3030");
    const [image, setImage] = useState(item.name == "speaker" ? <Speaker color={imageBg} /> : <Amp color={imageBg} />);

    function modifyData() {
        onPress(keyVal, (data[keyVal[0]][keyVal[1]] + 1))
    }

    return (
        <AnimatedButton style={styles.btn} onPress={modifyData}>
            <BackgroundBtn style={{position: "absolute"}}/>
            <View style={[styles.layoutHeader, {backgroundColor: imageBg}]}>
                <Text style={styles.text}>{String(data[keyVal[0]][keyVal[1]])}</Text>
            </View>
            <View style={globalStyles.centerBtnText}>
                {image}
            </View>
        </AnimatedButton>
    );
}``