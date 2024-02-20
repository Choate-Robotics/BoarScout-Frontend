import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    alignText: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: hp(14),
    },
    largeIntroText: {
        color: "#FFE603",
        fontFamily: "Montserrat-ExtraBoldItalic",
        fontSize: wp(25),
    },
    alignButton: {
        marginTop: hp(45),
    },
    animatedBtnStyle: {
        width: wp(80),
        height: hp(8.5),
        backgroundColor: "#007FB6",
        borderRadius: hp(2),
        borderWidth: hp(0.3),
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderColorOpacity: 0.5,
    },
    startBtnText: {
        color: "#fff",
        fontFamily: "Satoshi-Medium",
        fontSize: wp(10),
    }
});