import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    btn: {
        height: hp(18),
        width: hp(18),
    },
    layoutHeader: {
        height: hp(4),
        width: hp(4),
        borderRadius: hp(2),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        position: "absolute",
        top: hp(-1),
        right: hp(-1),
    },
    text: {
        color: "#fff",
        fontFamily: "Satoshi-Medium",
        fontSize: wp(4),
    },
    largeBg: {
        borderRadius: hp(2),
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        opacity: 0.37,
    },
    largeBgBorder: {
        borderRadius: hp(2),
        position: "absolute",
        top: 0,
        left: 0,
        borderColor: "#fff",
        borderWidth: hp(0.3),
        opacity: 0.43,
    },
    renameVal: {
        fontFamily: "Satoshi-Regular",
        fontSize: wp(8),
        color: "#fff",
    },
    checkBox: {
        height: hp(4),
        width: hp(4),
        borderRadius: hp(0.5),
        top: hp(0.4),
        left: hp(0.4),
        borderWidth: hp(0.3),
        borderColor: "#fff",
        marginRight: wp(5),
    }
});