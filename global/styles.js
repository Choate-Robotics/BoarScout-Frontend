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
    line: {
        height: hp(0.5),
        width: wp(100)
    },
    row: {
        flexDirection: 'row',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerBtnText: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    buttonText: {
        fontFamily: 'Inter-Bold',
        fontSize: hp(2.5),
        color: '#fff'
    },
});