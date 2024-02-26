import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { styles } from "../global/styles";

export const AUTO_ROWS = [
	{
		items: [
			{
				name: "autoSelectStart",
				single: true,
				selecter: true,
				count: 3,
				nameVal: ["Left", "Middle", "Right"],
				keyVal: [
					["auto", "startLeft"],
					["auto", "startMiddle"],
					["auto", "startRight"]
				],
			},
		],
		style: { justifyContent: "center" },
	},
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
	}
];

export const TELEOP_ROWS = [
	{
		items: [
			{ name: "speaker", keyVal: ["teleop", "attemptsSpeaker"], tiny: true },
			{
				name: "speaker",
				success: true,
				keyVal: ["teleop", "successSpeaker"],
				attemptsVal: ["teleop", "attemptsSpeaker"],
				tiny: true
			},
			{
				name: "speaker",
				success: true,
				amped: true,
				keyVal: ["teleop", "successChargedSpeaker"],
				attemptsVal: ["teleop", "attemptsSpeaker"],
				attemptsVal2: ["teleop", "successSpeaker"],
				tiny: true
			},
		],
		style: { marginHorizontal: wp(-7) },
	},
	{
		items: [
			{ name: "amp", keyVal: ["teleop", "attemptsAmp"], tiny: true },
			{
				name: "amp",
				success: true,
				keyVal: ["teleop", "successAmp"],
				attemptsVal: ["teleop", "attemptsAmp"],
				tiny: true
			},
			{
				name: "amp",
				success: true,
				amped: true,
				keyVal: ["teleop", "successChargedAmp"],
				attemptsVal: ["teleop", "attemptsAmp"],
				attemptsVal2: ["teleop", "successAmp"],
				tiny: true
			},
		],
		style: { marginHorizontal: wp(-7) },
	},
	{
		items: [{ name: "notefromfloor", keyVal: ["teleop", "noteFromFloor"] }],
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

