import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Onboarding from "./screens/Onboarding/Onboarding";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
		"Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.otf"),
		"Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
		"Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.otf"),
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.otf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.otf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
				}}
			>
				<Stack.Screen name="onboarding" component={Onboarding} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
