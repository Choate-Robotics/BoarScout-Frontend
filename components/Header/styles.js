import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#032D64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        alignSelf: 'flex-start',
        marginHorizontal: wp(5),
        marginTop: hp(1),
        height: hp(15),
        marginBottom: hp(5)
    },
    largeText: {
        fontFamily: 'Inter-Medium',
        fontSize: wp(7),
        color: '#fff',
        lineHeight: hp(5)
    },
    wildBoarsHeader: {
        width: wp(15),
        height: wp(15),
        marginLeft: wp(7.5),
        marginTop: hp(1)
    },
    containerVertical: {
        flex: 1,
        backgroundColor: '#032D64',    
    },
    letter: {
        fontFamily: 'Inter-Bold',
        fontSize: hp(5),
        marginHorizontal: wp(0.5),
        marginTop: hp(0.5),
        marginBottom: hp(1)

    }
});