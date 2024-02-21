import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    alignText: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: hp(15),
    },
    alignButton: {
        marginTop: hp(45),
    }
});