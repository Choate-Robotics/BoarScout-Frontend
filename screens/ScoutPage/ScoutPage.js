import { useState, useRef } from "react";
import { View, Text, ScrollView, TextInput, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import PressItem from "../../components/PressItem/PressItem";

import { styles } from "./styles";
import { styles as globalStyles } from "../../global/styles";
import { AUTO_ROWS, TELEOP_ROWS, ENDGAME_ROWS } from "../../helpers/rows";

export default function ScoutPage({ navigation, ...props }) {
	const team = props.route.params.team;
	const event = props.route.params.event;

	const [data, setData] = useState({
		auto: {
			attemptsSpeaker: 0,
			successSpeaker: 0,
			attemptsAmp: 0,
			successAmp: 0,
			closeNote: false,
			farNote: false,
			leave: false,
			midLine: false,
		},
		teleop: {
			attemptsSpeaker: 0,
			successSpeaker: 0,
			attemptsAmp: 0,
			successAmp: 0,
			noteFromFloor: 0,
		},
		endgame: {
			climb: false,
            harmony: false,
			trap: false,
			spotlight: false,
			comments: "",
		},
	});
	const [mode, setMode] = useState("Auto");
	const [rowsToRender, setRowsToRender] = useState(AUTO_ROWS);
	const [history, setHistory] = useState([]);
    const textInputRef = useRef();

	function changeData(key, value) {
		setHistory((prevHistory) => [...prevHistory, data]);
		setData((prevData) => ({
			...prevData,
			[key[0]]: {
				...prevData[key[0]],
				[key[1]]: value,
			},
		}));
	}

	function undo() {
		if (history.length > 0) {
			const previousState = history[history.length - 1];
			setHistory(history.slice(0, -1));
			setData(previousState);
		}
	}

	function nextPage() {
		if (mode === "Auto") {
			setMode("Tele");
			setRowsToRender(TELEOP_ROWS);
		} else if(mode === "Tele") {
            setMode("End");
            setRowsToRender(ENDGAME_ROWS);
        }
	}

    function prevPage() {
        if (mode === "Tele") {
            setMode("Auto");
            setRowsToRender(AUTO_ROWS);
        } else if(mode === "End") {
            setMode("Tele");
            setRowsToRender(TELEOP_ROWS);
        }
    }

    const updateComments = (newComment) => {
        setData(prevData => ({
          ...prevData,
          endgame: {
            ...prevData.endgame,
            comments: newComment,
          },
        }));
    };
      

	return (
        <TouchableWithoutFeedback onPress={() => textInputRef.current.blur()}>
            <LinearGradient
                style={globalStyles.containerVertical}
                colors={["#072F6C", "#072F6C", "#01060D"]}
            >
                <View style={styles.reOrderAbs}>
                    <Text style={styles.bgAbsAuto}>{mode}</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.headerRow}>
                        <Text style={styles.autoText}>{mode}</Text>
                        <AnimatedButton style={styles.undoBtn} onPress={undo}>
                            <View style={globalStyles.centerBtnText}>
                                <Text style={styles.undoText}>UNDO</Text>
                            </View>
                        </AnimatedButton>
                    </View>
                    <ScrollView
                        style={[
                            styles.alignViewBody,
                            mode === "Tele"
                                ? { paddingHorizontal: wp(10.5) }
                                : { paddingHorizontal: wp(0) },
                        ]}
                        showsVerticalScrollIndicator={false}
                    >
                        {rowsToRender.map((row, rowIndex) => (
                            <View
                                key={rowIndex}
                                style={[
                                    globalStyles.row,
                                    { marginBottom: hp(2) },
                                    row.style,
                                ]}
                            >
                                {row.items.map((item, itemIndex) => (
                                    <PressItem
                                        key={itemIndex}
                                        item={item}
                                        onPress={changeData}
                                        data={data}
                                        keyVal={item.keyVal}
                                        attemptsVal={item.attemptsVal}
                                        count={item.count}
                                        nameVal={item.nameVal}
                                    />
                                ))}
                            </View>
                        ))}
                        {mode === "End" ? (
                            <View style={{alignSelf: "center"}}>
                                <TextInput
                                    multiline
                                    ref={textInputRef}
                                    style={styles.input}
                                    value={data.endgame.comments}
                                    onChangeText={(value) => updateComments(value)}
                                    placeholder="comments..."
                                />
                            </View>
                        ): (
                            null
                        )}
                        {mode === "Auto" ? (
                            <AnimatedButton
                                style={[
                                    globalStyles.animatedBtnStyle,
                                    {
                                        alignSelf: "center",
                                        marginTop: hp(2),
                                        marginBottom: hp(5),
                                    },
                                ]}
                                onPress={nextPage}
                            >
                                <View style={globalStyles.centerBtnText}>
                                    <Text style={globalStyles.startBtnText}>
                                        Continue
                                    </Text>
                                </View>
                            </AnimatedButton>
                        ) : (
                            <View style={[globalStyles.row, {alignItems: "flex-start"}]}>
                                <AnimatedButton
                                    style={[
                                        globalStyles.animatedBtnStyle,
                                        {
                                            alignSelf: "center",
                                            marginTop: hp(2),
                                            marginBottom: hp(5),
                                            width: wp(40),
                                            marginRight: mode == "Tele" ? wp(5): 0,
                                            backgroundColor: "#FFE603",
                                            borderColor: "#343434"
                                        },
                                    ]}
                                    onPress={prevPage}
                                >
                                    <View style={globalStyles.centerBtnText}>
                                        <Text style={[globalStyles.startBtnText, {fontSize: wp(7), color: "#000"}]}>
                                            Back
                                        </Text>
                                    </View>
                                </AnimatedButton>
                                <AnimatedButton
                                    style={[
                                        globalStyles.animatedBtnStyle,
                                        {
                                            alignSelf: "center",
                                            marginTop: hp(2),
                                            marginBottom: hp(5),
                                            width: wp(40),
                                            marginLeft: wp(5),
                                        },
                                    ]}
                                    onPress={nextPage}
                                >
                                    <View style={globalStyles.centerBtnText}>
                                        <Text style={[globalStyles.startBtnText, {fontSize: wp(7)}]}>
                                            {mode == "End" ? "Submit" : "Continue"}
                                        </Text>
                                    </View>
                                </AnimatedButton>
                        </View>
                        )}
                    </ScrollView>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
	);
}
