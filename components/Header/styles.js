import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    headerContainer: {
        height: hp(10),
        alignItems: 'center',
    },
    letter: {
        fontFamily: 'Inter-Bold',
        fontSize: hp(4),
        marginHorizontal: wp(0.5),
        marginTop: hp(0.5),
        marginBottom: hp(1)

    }
});