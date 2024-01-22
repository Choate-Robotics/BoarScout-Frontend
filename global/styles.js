import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        backgroundColor: '#032D64',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    line: {
        height: hp(0.5),
        width: wp(100)
    },
    row: {
        flexDirection: 'row',
    }
});