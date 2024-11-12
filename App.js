import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

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
		<View style={styles.container}>
			<Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
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
