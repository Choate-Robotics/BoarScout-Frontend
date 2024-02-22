import { View, Text, ImageBackground } from 'react-native';

import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';
import { storage } from '../../helpers/storage';

export default function Onboarding({ navigation }) {

    async function nextPage() {
        if(await storage.getItem("authenticated")) {
            navigation.navigate("listmatches", {
                title: "listevents"
            });
        } else {
            navigation.navigate("formenter", {
                pageData: {
                    title: "What's Your Name",
                    placeholder: "Enter your name",
                    keyboardType: "default",
                    autoComplete: "name",
                }
            });
        }
    }

    return (
        <ImageBackground style={globalStyles.containerVertical} source={require("../../assets/png/bg.png")}>
            <View style={styles.alignText}>
                <Text style={globalStyles.largeIntroText}>7407</Text>
                <View style={styles.alignButton}>
                    <AnimatedButton style={globalStyles.animatedBtnStyle} onPress={nextPage}>
                        <View style={globalStyles.centerBtnText}>
                            <Text style={globalStyles.startBtnText}>Start</Text>
                        </View>
                    </AnimatedButton>
                </View>
            </View>
        </ImageBackground>
    )
}
