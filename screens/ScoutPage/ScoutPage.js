import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import PressItem from "../../components/PressItem/PressItem";

import { styles } from "./styles";
import { styles as globalStyles } from "../../global/styles";

export default function ScoutPage({ navigation, ...props }) {
	const [data, setData] = useState({
		auto: {
			attemptsSpeaker: 0,
			successSpeaker: 0,
			attempsAmp: 0,
			successAmp: 0,
			closeNote: false,
			farNote: false,
		},
		teleop: {
			attemptsSpeaker: 0,
			successSpeaker: 0,
			attempsAmp: 0,
			successAmp: 0,
			noteFromFloor: 0,
		},
		endgame: {
			climb: false,
			trap: false,
			coOp: false,
			spotlight: false,
			comments: "",
		},
	});

    console.log(data)

	const team = props.route.params.team;
	const event = props.route.params.event;

	const [mode, setMode] = useState("auto");

    function changeData(key, value) {
        setData(prevData => ({
            ...prevData,
            [key[0]]: {
                ...prevData[key[0]],
                [key[1]]: value
            }
        }));
    }    


	function undo() {
		// TODO
	}

	switch (mode) {
		case "auto":
			return (
				<LinearGradient
					style={globalStyles.containerVertical}
					colors={["#072F6C", "#072F6C", "#01060D"]}
				>
					<View style={styles.reOrderAbs}>
						<Text style={styles.bgAbsAuto}>Auto</Text>
					</View>
					<View style={styles.body}>
						<View style={styles.headerRow}>
							<Text style={styles.autoText}>Auto</Text>
							<AnimatedButton
								style={styles.undoBtn}
								onPress={undo}
							>
								<View style={globalStyles.centerBtnText}>
									<Text style={styles.undoText}>UNDO</Text>
								</View>
							</AnimatedButton>
						</View>
						<View style={styles.alignViewBody}>
							<View style={globalStyles.row}>
								<PressItem
									item={{ name: "speaker", success: false }}
									onPress={changeData}
									data={data}
									keyVal={["auto", "attemptsSpeaker"]}
								/>
								<PressItem
									item={{ name: "speaker", success: true }}
									onPress={changeData}
									data={data}
									keyVal={["auto", "successSpeaker"]}
								/>
							</View>
						</View>
					</View>
				</LinearGradient>
			);
			break;
		case "teleop":
			return (
				<LinearGradient
					style={globalStyles.containerVertical}
					colors={["#072F6C", "#072F6C", "#01060D"]}
				>
					<View style={styles.reOrderAbs}>
						<Text style={styles.bgAbsAuto}>Teleop</Text>
					</View>
				</LinearGradient>
			);
	}
}
