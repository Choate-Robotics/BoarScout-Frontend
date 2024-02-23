import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    reOrderAbs: {
        position: "absolute",
        alignSelf: "flex-start",
        marginLeft: wp(22),
        width: wp(1200),
        opacity: 0.17
    },
    bgAbsAuto: {
        fontFamily: "Satoshi-Black",
        color: "#FFE603",
        fontSize: wp(50)
    },
    body: {
        alignSelf: "center",
        marginTop: hp(8)
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    undoBtn: {
        height: hp(6),
        width: wp(30),
        backgroundColor: "#fff",
        borderRadius: hp(1),
        marginTop: hp(2),
    },
    autoText: {
        fontFamily: "Satoshi-Bold",
        fontSize: wp(23),
        color: "#fff",
        marginRight: wp(10)
    },
    undoText: {
        fontFamily: "Satoshi-Medium",
        fontSize: wp(5),
        color: "#000",
    },
    alignViewBody: {
        marginTop: hp(5)
    }
});