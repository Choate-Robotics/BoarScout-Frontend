import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    keyboardInput: {
        height: hp(8.5),
        width: wp(80),
        borderRadius: hp(1),
        backgroundColor: "#fff",
        paddingHorizontal: wp(2),
        color: "#000",
        fontSize: wp(5),
        fontFamily: "Satoshi-Medium",
    },
    adjustTitle: {
        marginTop: hp(12.5),
    },
    adjustTextInput: {
        marginTop: hp(12.5),
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontFamily: "Satoshi-Bold",
        fontSize: wp(7),
        marginBottom: hp(3),
    },
    alignButton: {
        marginTop: hp(23),
    }
});