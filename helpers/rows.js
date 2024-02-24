import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { styles } from "../global/styles";

export const AUTO_ROWS = [
	{
		items: [
			{ name: "speaker", keyVal: ["auto", "attemptsSpeaker"] },
			{
				name: "speaker",
				success: true,
				keyVal: ["auto", "successSpeaker"],
				attemptsVal: ["auto", "attemptsSpeaker"],
			},
		],
	},
	{
		items: [
			{ name: "amp", keyVal: ["auto", "attemptsAmp"] },
			{
				name: "amp",
				success: true,
				keyVal: ["auto", "successAmp"],
				attemptsVal: ["auto", "attemptsAmp"],
			},
		],
	},
	{
		items: [
			{ name: "botclose", single: true, keyVal: ["auto", "closeNote"] },
			{ name: "botfar", single: true, keyVal: ["auto", "farNote"] },
		],
	},
	{
		items: [
			{
				name: "autoSelect",
				single: true,
				selecter: true,
				count: 2,
				nameVal: ["Leave", "Mid-Line"],
				keyVal: [
					["auto", "leave"],
					["auto", "midLine"],
				],
			},
		],
		style: { justifyContent: "center" },
	},
];

export const TELEOP_ROWS = [
	{
		items: [
			{ name: "speaker", keyVal: ["teleop", "attemptsSpeaker"] },
			{
				name: "speaker",
				success: true,
				keyVal: ["teleop", "successSpeaker"],
				attemptsVal: ["teleop", "attemptsSpeaker"],
			},
		],
		style: { marginHorizontal: wp(-4) },
	},
	{
		items: [
			{ name: "amp", keyVal: ["teleop", "attemptsAmp"] },
			{
				name: "amp",
				success: true,
				keyVal: ["teleop", "successAmp"],
				attemptsVal: ["teleop", "attemptsAmp"],
			},
		],
		style: { marginHorizontal: wp(-4) },
	},
	{
		items: [{ name: "notefromfloor", keyVal: ["teleop", "noteFromFloor"] }],
		style: { justifyContent: "flex-start", marginLeft: wp(-2) },
	},
];

export const ENDGAME_ROWS = [
	{
		items: [
			{ name: "climb", single: true, keyVal: ["endgame", "climb"] },
			{ name: "harmony", single: true, keyVal: ["endgame", "harmony"] },
		],
	},
    {
		items: [
			{ name: "trap", single: true, keyVal: ["endgame", "trap"] },
			{ name: "spotlight", single: true, keyVal: ["endgame", "spotlight"] },
		],
	}
]

