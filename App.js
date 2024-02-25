import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import FlashMessage from "react-native-flash-message";

import Onboarding from "./screens/Onboarding/Onboarding";
import ListMatches from "./screens/ListMatches/ListMatches";
import FormEnter from "./screens/FormEnter/FormEnter";
import ScoutPage from "./screens/ScoutPage/ScoutPage";
import QRModal from "./screens/QRModal/QRModal";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Montserrat-ExtraBoldItalic": require("./assets/fonts/Montserrat-ExtraBoldItalic.otf"),
		"Satoshi-Medium": require("./assets/fonts/Satoshi-Medium.otf"),
		"Satoshi-Bold": require("./assets/fonts/Satoshi-Bold.otf"),
		"Satoshi-Regular": require("./assets/fonts/Satoshi-Regular.otf"),
		"Satoshi-Black": require("./assets/fonts/Satoshi-Black.otf"),
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
				<Stack.Screen name="listmatches" component={ListMatches} />
				<Stack.Screen name="formenter" component={FormEnter} />
				<Stack.Screen name="scoutpage" component={ScoutPage} />
				<Stack.Group screenOptions={{ presentation: "transparentModal" }}>
					<Stack.Screen 
						name="qrmodal" 
						component={QRModal} 
					/>
				</Stack.Group>
			</Stack.Navigator>
			<FlashMessage position="top" />
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
