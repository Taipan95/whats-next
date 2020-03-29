import React from "react";
import { View, StyleSheet } from "react-native";

export default function Separator() {
	return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
	separator: {
		// flex: 1,
		marginVertical: 8,
		borderBottomColor: "#717171",
		width: "80%",
		borderBottomWidth: StyleSheet.hairlineWidth
	}
});
