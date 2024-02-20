import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';

export default function ListMatches({ navigation }) {
    return (
        <LinearGradient style={globalStyles.containerVertical} colors={["#032D64", "#032D64", "#000"]}>
            <View style={styles.adjustLogo}>
                <Image source={require("../../assets/png/wildboars.png")} style={styles.logo} />
            </View>
            <View style={styles.alignGamesText}>
                <Text style={styles.titleText}>Games</Text>
            </View>
        </LinearGradient>
    )
}