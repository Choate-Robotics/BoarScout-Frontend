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
    }
});