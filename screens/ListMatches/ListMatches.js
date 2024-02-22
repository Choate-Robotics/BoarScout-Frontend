import { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';
import { requestServer } from '../../api/requestServer';
import { storage } from '../../helpers/storage';
import { showMessage } from 'react-native-flash-message';

export default function ListMatches({ navigation, ...props }) {
    const [loadedEvents, setLoadedEvents] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [title, setTitle] = useState(props.route.params.title);

    const [gameIndex, setGameIndex] = useState(0);
    const [matchData, setMatchData] = useState({});


    const loadType = {
        getEvents: async (item) => {
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
        },
        getGames: async (item) => {
            const response = await requestServer({
                method: "GET",
                endpoint: `games?event=${item.key}`,
            });

            if(response === false) {
                showMessage({
                    message: "Error: Could not retrieve events",
                    backgroundColor: "#9a1212",
                    color: "white",
                });
                return;
            }

            setMatchData({
                key: item.key,
                name: item.name,
            })
            setLoadedEvents(response.matches);
            setTitle("listgames");
        }
    }

    async function refreshEvents() {
        
        setRefreshing(true);
        if(title == "listevents") {
            await loadType.getEvents();
        } else if(title == "listgames") {
            await loadType.getGames();
        }
        setRefreshing(false);
    
    }

    useEffect(() => {
        if(title == "listevents") {
            loadType.getEvents();
        } else if(title == "listgames") {
            loadType.getGames();
        }
    }, []);

    async function loadEvent(item) {

        if(title == "listevents") {
            setLoadedEvents([]);
            await loadType.getGames(item);
        } else if(title == "listgames") {
            setGameIndex(loadedEvents.indexOf(item));
            setLoadedEvents(loadedEvents[gameIndex].blue.concat(loadedEvents[gameIndex].red));
            setTitle("listteams");
        } else {
            navigation.navigate("scoutpage", {
                team: item,
                event: matchData,
            });
        }

    }

    return (
        <LinearGradient style={globalStyles.containerVertical} colors={["#032D64", "#032D64", "#000"]}>
            <View style={styles.adjustLogo}>
                <Image source={require("../../assets/png/wildboars.png")} style={styles.logo} />
            </View>
            <View style={styles.alignGamesText}>
                <Text style={styles.titleText}>{title == "listevents" ? "Matches": title == "listgames" ? "Games": "Teams"}</Text>
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
                        showsVerticalScrollIndicator={false}
                        data={loadedEvents}
                        key={(item) => loadedEvents.indexOf(item).toString()}
                        renderItem={({ item }) => {
                            
                            if(title == "listteams") {
                                return (
                                    <AnimatedButton style={[styles.animatedBtn, {backgroundColor: loadedEvents.indexOf(item) < 3 ? "#007FB6": "#BE3030"}]} onPress={() => loadEvent(item)}>
                                        <View style={[globalStyles.centerBtnText, styles.modifyCenterBtnText]}>
                                            <Text style={styles.gameText}>{`Team ${item.substring(3)}`}</Text>
                                        </View>
                                    </AnimatedButton>
                                )
                            } else {
                                return (
                                    <AnimatedButton style={styles.animatedBtn} onPress={() => loadEvent(item)}>
                                        <View style={[globalStyles.centerBtnText, styles.modifyCenterBtnText]}>
                                            <Text style={styles.gameText}>{title =="listevents" ? item.name: `Game ${String(loadedEvents.indexOf(item) + 1)}`}</Text>
                                        </View>
                                    </AnimatedButton>
                                )
                            }
                        }}
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