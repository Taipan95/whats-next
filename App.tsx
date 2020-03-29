import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import LandingPage from "./components/LandingPage";

export default function App() {
	return (
		<SafeAreaView style={styles.mainPage}>
			<LandingPage />
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	mainPage: {
		paddingVertical: 50,
		flexDirection: "column",
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center"
	}
});
