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
    }
});