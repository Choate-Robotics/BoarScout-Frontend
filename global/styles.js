import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#032D64',
    },
    containerVertical: {
        flex: 1,
        backgroundColor: '#032D64',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    centerBtnText: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    largeIntroText: {
        color: "#FFE603",
        fontFamily: "Montserrat-ExtraBoldItalic",
        fontSize: wp(25),
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