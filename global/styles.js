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
    }
});