import { View, Text, ImageBackground } from 'react-native';

import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';

export default function Onboarding({ navigation }) {

    function nextPage() {
        navigation.navigate("listmatches");
    }

    return (
        <ImageBackground style={globalStyles.containerVertical} source={require("../../assets/png/bg.png")}>
            <View style={styles.alignText}>
                <Text style={styles.largeIntroText}>7407</Text>
                <View style={styles.alignButton}>
                    <AnimatedButton style={styles.animatedBtnStyle} onPress={nextPage}>
                        <View style={globalStyles.centerBtnText}>
                            <Text style={styles.startBtnText}>Start</Text>
                        </View>
                    </AnimatedButton>
                </View>
            </View>
        </ImageBackground>
    )
}
