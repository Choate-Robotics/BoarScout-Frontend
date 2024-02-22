import { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';

export default function ScoutPage({ navigation, ...props }) {
    const team = props.route.params.team;
    const event = props.route.params.event;

    const [mode, setMode] = useState("auto");

    function undo() {
        // TODO
    }

    switch(mode) {
        case "auto":
            return (
                <LinearGradient style={globalStyles.containerVertical} colors={["#072F6C", "#072F6C", "#01060D"]}>
                    <View style={styles.reOrderAbs}>
                        <Text style={styles.bgAbsAuto}>Auto</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.headerRow}>
                            <Text style={styles.autoText}>Auto</Text>
                            <AnimatedButton style={styles.undoBtn} onPress={undo}>
                                <View style={globalStyles.centerBtnText}>
                                    <Text style={styles.undoText}>UNDO</Text>
                                </View>
                            </AnimatedButton>
                        </View>
                    </View>
                </LinearGradient>
            )
            break;
        case "teleop":
            return (
                <LinearGradient style={globalStyles.containerVertical} colors={["#072F6C", "#072F6C", "#01060D"]}>
                    <View style={styles.reOrderAbs}>
                        <Text style={styles.bgAbsAuto}>Teleop</Text>
                    </View>
                </LinearGradient>
            )
    }
}