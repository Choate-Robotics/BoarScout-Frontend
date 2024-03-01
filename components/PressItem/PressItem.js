import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Speaker from "../../assets/svg/Speaker";
import Amp from "../../assets/svg/Amp";
import NoteFromFloor from "../../assets/svg/NoteFromFloor";
import BotClose from "../../assets/svg/BotClose";
import BotFar from "../../assets/svg/BotFar";
import Climb from "../../assets/svg/Climb";
import Harmony from "../../assets/svg/Harmony";
import Trap from "../../assets/svg/Trap";
import SpotLight from "../../assets/svg/Spotlight";

import { styles } from "./styles";
import { styles as globalStyles } from "../../global/styles";

export default function PressItem({ item, onPress, keyVal, data, ...props }) {
    const [imageBg, setImageBg] = useState(null);
    const [heightWidth, setHeightWidth] = useState({});
    const [image, setImage] = useState();

    useEffect(() => {
        let newImage;
        let newHeightWidth;

        switch(item.name) {
            case "speaker":
                newHeightWidth = { height: item.tiny ? hp(13) : hp(18), width: item.tiny ? hp(13) : hp(18) };
                newImage = <Speaker color={imageBg} width={item.tiny ? wp(15) : wp(20)} height={item.tiny ? hp(10) : hp(12)} />;
                setImageBg(item.amped ? "#ccb809" : item.success ? "#56972E" : "#BE3030");
                break;
            case "amp":
                newHeightWidth = { height: item.tiny ? hp(13) : hp(18), width: item.tiny ? hp(13) : hp(18) };
                newImage = <Amp color={imageBg} width={item.tiny ? wp(20) : wp(25)} height={item.tiny ? hp(12) : hp(15)} />;
                setImageBg(item.amped ? "#ccb809" : item.success ? "#56972E" : "#BE3030");
                break;
            case "botclose":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <BotClose color={imageBg} />;
                setImageBg("#ffffff");
                break;
            case "botfar":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <BotFar color={imageBg} />;
                setImageBg("#ffffff");
                break;
            case "autoSelect":
                newHeightWidth = { height: hp(16), width: wp(82.5) };
                setImageBg("#ffffff");
                break;
            case "autoSelectStart":
                newHeightWidth = { height: hp(20), width: wp(82.5) };
                setImageBg("#ffffff");
                break;
            case "autoSelectStart4":
                newHeightWidth = { height: hp(24), width: wp(82.5) };
                setImageBg("#ffffff");
                break;
            case "notefromfloor":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <Text style={[styles.renameVal, {fontFamily: "Satoshi-Bold"}]}>NFF</Text>
                setImageBg("#ffffff");
                break;
            case "notefromsource":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <Text style={[styles.renameVal, {fontFamily: "Satoshi-Bold"}]}>NFS</Text>
                setImageBg("#ffffff");
                break;
            case "climb":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <Climb color={imageBg} />;
                setImageBg("#ffffff");
                break;
            case "harmony":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <Harmony color={imageBg} />;
                setImageBg("#ffffff");
                break;
            case "trap":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <Trap color={imageBg} />;
                setImageBg("#ffffff");
                break;
            case "spotlight":
                newHeightWidth = { height: hp(10), width: hp(18) };
                newImage = <SpotLight color={imageBg} />;
                setImageBg("#ffffff");
                break;
        }

        setHeightWidth(newHeightWidth);
        setImage(newImage);
        
    }, [item.name, imageBg]);

    function modifyData(index=null) {
        if(item.selecter) {
            onPress(keyVal[index], !data[keyVal[index][0]][keyVal[index][1]]);
        } else {
            onPress(keyVal, typeof data[keyVal[0]][keyVal[1]] == 'boolean' ? !data[keyVal[0]][keyVal[1]] : (data[keyVal[0]][keyVal[1]] + 1));
            if(props.attemptsVal) {
                onPress(props.attemptsVal, (data[props.attemptsVal[0]][props.attemptsVal[1]] + 1));
            }
            if(props.attemptsVal2) {
                onPress(props.attemptsVal2, (data[props.attemptsVal2[0]][props.attemptsVal2[1]] + 1));
            }
        }
    }

    if(item.selecter) {

        const items = Array.from({ length: props.count });

        return (
            <View style={heightWidth}>
                <View style={[styles.largeBg, heightWidth]}/>
                <View style={[styles.largeBgBorder, heightWidth]}/>
                <View style={[globalStyles.centerBtnText, {alignItems: "flex-start", alignSelf: "center"}]}>
                    {items.map((_, index) => (
                        <View key={index} style={[globalStyles.row, {marginVertical: hp(0.5)}]}>
                            <AnimatedButton style={[styles.checkBox, {backgroundColor: data[keyVal[index][0]][keyVal[index][1]] ? "#56972E": null}]} onPress={() => modifyData(index)}/>
                            <Text style={styles.renameVal}>{props.nameVal[index]}</Text>
                        </View>
                    ))}
                </View>
            </View>

        );
        

    } else {

        return (
            <AnimatedButton style={heightWidth} onPress={modifyData}>
                <View style={[styles.largeBg, heightWidth]}/>
                <View style={[styles.largeBgBorder, heightWidth]}/>
                <View style={[styles.layoutHeader, {backgroundColor: imageBg}]}>
                    <Text style={[styles.text, {color: imageBg == "#ffffff" ? "#000" : "#ffffff"}]}>{String(data[keyVal[0]][keyVal[1]]) === "false" ? "F" : String(data[keyVal[0]][keyVal[1]]) == "true" ? "T" : String(data[keyVal[0]][keyVal[1]])}</Text>
                </View>
                <View style={globalStyles.centerBtnText}>
                    {image}
                </View>
            </AnimatedButton>
        );

    }
}