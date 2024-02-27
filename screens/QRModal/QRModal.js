import qrcode from "yaqrcode";
import { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { showMessage } from "react-native-flash-message";

import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";

import { styles } from "./styles";
import { styles as globalStyles } from "../../global/styles";
import { requestServer } from "../../api/requestServer";
import { storage } from "../../helpers/storage";

export default function QRModal({ navigation, ...props }) {
	const data = props.route.params.data;
	const formattedData = [
		data.event.name,
		`Game #${data.match}`,
		data.team.substring(3),
		data.auto.startLeft,
		data.auto.startMiddle,
		data.auto.startRight,
		data.auto.attemptsAmp,
		data.auto.successAmp,
		data.auto.attemptsSpeaker,
		data.auto.successSpeaker,
		data.auto.closeNote,
		data.auto.farNote,
		data.auto.leave,
		data.auto.midLine,
		data.teleop.attemptsAmp,
		data.teleop.successAmp,
        data.teleop.successChargedAmp,
		data.teleop.attemptsSpeaker,
		data.teleop.successSpeaker,
        data.teleop.successChargedSpeaker,
		data.teleop.noteFromFloor,
		data.teleop.noteFromSource,
		data.endgame.climb,
		data.endgame.harmony,
		data.endgame.trap,
		data.endgame.spotlight,
		data.endgame.over30,
		data.endgame.under30,
		data.endgame.wasDefenseBot,
		data.endgame.comments,
	];
	const [qrData, setQRData] = useState(null);

	useEffect(() => {
		generateQR().then((data) => setQRData(data));
	});

	async function generateQR() {
		let postingData = [
			await storage.getItem("team"),
			await storage.getItem("name"),
			...formattedData,
		];

		let qrData = qrcode(JSON.stringify(postingData), {
			size: 200,
		});
		return qrData.replace("gif", "png");
	}

	async function postData() {

        let postingData = [
			await storage.getItem("team"),
			await storage.getItem("name"),
			...formattedData,
		];

        const response = await requestServer({
            method: "POST",
            endpoint: "sheet",
            data: {
                teamCode: await storage.getItem("teamCode"),
                data: postingData,
            }
        });

        if(response === false) {
            showMessage({
                message: "Error: Could not post data",
                backgroundColor: "#9a1212",
                color: "white",
            });
            return;
        } else {
            showMessage({
                message: "Data posted successfully",
                backgroundColor: "#3a9a12",
                color: "white",
            });
        
        }

    }

    function backToBeg() {
        navigation.navigate("listmatches", {
            title: "listevents",
            wentBack: true,
        });
    
    }

	return (
		<View style={styles.containerVertical}>
			<View style={styles.modalAttributes}>
				<View style={styles.body}>
					<View style={styles.QRCover}>
						{qrData ? (
							<Image
								source={{ uri: qrData }}
								style={{ height: "90%", width: "90%" }}
							/>
						) : (
                            <ActivityIndicator size="large" color="#c9c9c9" />
                        )}
					</View>
					<View style={globalStyles.row}>
						<AnimatedButton
							style={[
								globalStyles.animatedBtnStyle,
								{
									marginTop: hp(5),
									width: wp(40),
									marginRight: wp(4),
									backgroundColor: "#FFE603",
									borderColor: "#343434",
								},
							]}
							onPress={() =>
								navigation.navigate("scoutpage", {
									wentBack: true,
								})
							}
						>
							<View style={globalStyles.centerBtnText}>
								<Text
									style={[
										globalStyles.startBtnText,
										{ fontSize: wp(7), color: "#000" },
									]}
								>
									Back
								</Text>
							</View>
						</AnimatedButton>
						<AnimatedButton
							style={[
								globalStyles.animatedBtnStyle,
								{
									marginTop: hp(5),
									width: wp(40),
									marginLeft: wp(4),
								},
							]}
                            onPress={postData}
						>
							<View style={globalStyles.centerBtnText}>
								<Text
									style={[
										globalStyles.startBtnText,
										{ fontSize: wp(7) },
									]}
								>
									Post Data
								</Text>
							</View>
						</AnimatedButton>
					</View>
                    <AnimatedButton
							style={[
								globalStyles.animatedBtnStyle,
								{
									marginTop: hp(2.5),
                                    width: wp(90),
                                    backgroundColor: "#BE3030",
									borderColor: "#343434",
								},
							]}
                            onPress={backToBeg}
						>
							<View style={globalStyles.centerBtnText}>
								<Text
									style={[
										globalStyles.startBtnText,
										{ fontSize: wp(10) },
									]}
								>
									Back to Events
								</Text>
							</View>
				</AnimatedButton>
				</View>
			</View>
		</View>
	);
}
