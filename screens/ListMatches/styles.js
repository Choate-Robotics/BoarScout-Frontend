import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    adjustLogo: {
        marginTop: hp(7),
        marginLeft: wp(7)
    },
    logo: {
        width: wp(15),
        height: wp(15)
    },
    alignGamesText: {
        alignSelf: "center",
        alignItems: "center",
    },
    titleText: {
        color: "#FFE603",
        fontFamily: "Montserrat-ExtraBoldItalic",
        fontSize: wp(15),
    },
    body: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    alignIndicator: {
        justifyContent: "center",
        marginTop: hp(30)
    },
    list: {
        marginTop: hp(3),
        marginBottom: hp(23),
    },
    animatedBtn: {
        width: wp(80),
        height: hp(8.5),
        backgroundColor: "#007FB6",
        borderRadius: hp(2),
        borderWidth: hp(0.1),
        borderColor: 'rgba(255, 255, 255, 1)',
        borderColorOpacity: 0.5,
        marginBottom: hp(2)
    },
    gameText: {
        fontFamily: "Satoshi-Regular",
        color: "#fff",
        fontSize: wp(5),
    },
    modifyCenterBtnText: {
        alignItems: "flex-start",
        marginLeft: wp(5)
    }
});