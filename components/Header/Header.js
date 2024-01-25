import { SafeAreaView, View, Text, Image } from 'react-native';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';


export default function Onboarding({ navigation }) {

    return (
        <SafeAreaView style={styles.containerVertical}>
            <Image style={styles.wildBoarsHeader} source={require("../../assets/png/wildboars.png")}/>
            <View style={[globalStyles.row, globalStyles.center]}>
            <Text style={[styles.letter, {color: "#FFEA00"}]}>7</Text>
                <Text style={[styles.letter, {color: "#fff"}]}>4</Text>
                <Text style={[styles.letter, {color: "#FFEA00"}]}>0</Text>
                <Text style={[styles.letter, {color: "#fff"}]}>7</Text>
            </View>
        </SafeAreaView>
    );
}
