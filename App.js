import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
	const { fontsLoaded } = useFonts({
		regular: require("./assets/fonts/Poppins-Regular.ttf"),
		light: require("./assets/fonts/Poppins-Light.ttf"),
		bold: require("./assets/fonts/Poppins-Bold.ttf"),
		semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
		medium: require("./assets/fonts/Poppins-Medium.ttf"),
		extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	textStyle: {
		fontFamily: "regular",
		fontSize: 20,
	},
});
