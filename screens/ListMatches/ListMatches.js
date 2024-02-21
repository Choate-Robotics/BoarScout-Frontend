import { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';
import { requestServer } from '../../api/requestServer';
import { storage } from '../../helpers/storage';
import { showMessage } from 'react-native-flash-message';

export default function ListMatches({ navigation }) {
    const [loadedEvents, setLoadedEvents] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    async function getMatches() {
        const response = await requestServer({
            method: "GET",
            endpoint: `events?team=${await storage.getItem("team")}`,
        });

        if(response === false) {
            showMessage({
                message: "Error: Could not retrieve events",
                backgroundColor: "#9a1212",
                color: "white",
            });
            return;
        }

        setLoadedEvents(response.events);
    }

    async function refreshEvents() {
        setRefreshing(true);
        await getMatches();
        setRefreshing(false);
    
    }

    useEffect(() => {
        getMatches();
    }, []);

    function loadEvent() {
        
    }

    return (
        <LinearGradient style={globalStyles.containerVertical} colors={["#032D64", "#032D64", "#000"]}>
            <View style={styles.adjustLogo}>
                <Image source={require("../../assets/png/wildboars.png")} style={styles.logo} />
            </View>
            <View style={styles.alignGamesText}>
                <Text style={styles.titleText}>Games</Text>
            </View>
            <View style={styles.body}>
                {loadedEvents.length > 0 ? (
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={refreshEvents}
                                progressBackgroundColor="#C6C6C6"
                                tintColor="#C6C6C6"
                            />
                        }
                        style={styles.list}
                        data={loadedEvents}
                        keyExtractor={(item) => item.id}
                        key={item => item.id}
                        renderItem={({ item }) => (
                            <AnimatedButton style={styles.animatedBtn} onPress={() => loadEvent(item)}>
                                <View style={[globalStyles.centerBtnText, styles.modifyCenterBtnText]}>
                                    <Text style={styles.gameText}>{item.name}</Text>
                                </View>
                            </AnimatedButton>
                        )}
                    />
                ) : (
                    <View style={styles.alignIndicator}>
                        <ActivityIndicator size="large" color="#c9c9c9" />
                    </View>
                )}
            </View>
        </LinearGradient>
    )
}