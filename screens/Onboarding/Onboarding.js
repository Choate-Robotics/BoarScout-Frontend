import { View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import { Audio } from "expo-av";

import Header from "../../components/Header/Header";
import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';


export default function Onboarding({ navigation }) {

    async function easterEgg() {
		const { sound } = await Audio.Sound.createAsync(
			require("../../assets/audio/easteregg.mp3")
		);
		await sound.playAsync();
    }

    function nextPage() {
    
    }

    return (
        <View style={globalStyles.container}>
            <Header/>
            <View style={styles.containHuber}>
                <TouchableWithoutFeedback onLongPress={easterEgg}>
                    <Image style={styles.huber} source={require("../../assets/png/huber.png")}/>
                </TouchableWithoutFeedback>
                <AnimatedButton onPress={nextPage} style={styles.button}>
                    <View style={globalStyles.centerBtnText}>
                        <Text style={globalStyles.buttonText}>Enter Database</Text>
                    </View>
                </AnimatedButton>
            </View>
        </View>
    );
}
