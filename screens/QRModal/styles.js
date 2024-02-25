import { StyleSheet, Dimensions } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const HEIGHT = Dimensions.get("window").height;

console.log(HEIGHT)

export const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0)', 
    },
    modalAttributes: {
        height: "65%",
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
        height: wp(HEIGHT * 0.0829),
        width: wp(HEIGHT * 0.0829),
        backgroundColor: "white",
        marginTop: hp(3),
        borderRadius: hp(3),
        alignItems: "center",
        justifyContent: "center",
    }
});