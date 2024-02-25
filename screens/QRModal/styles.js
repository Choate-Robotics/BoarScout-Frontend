import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0)', 
    },
    modalAttributes: {
        height: hp(65),
        width: "100%",
        backgroundColor: "#032D64",
        borderTopRightRadius: hp(3),
        borderTopLeftRadius: hp(3),
    },
    body: {
        alignSelf: "center",
        alignItems: "center",
    },
    QRCover: {
        height: wp(70),
        width: wp(70),
        backgroundColor: "white",
        marginTop: hp(3),
        borderRadius: hp(3),
        alignItems: "center",
        justifyContent: "center",
    }
});