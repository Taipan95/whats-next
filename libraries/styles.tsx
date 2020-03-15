import { StyleSheet } from "react-native";

export const landingPageStyles = StyleSheet.create({
	main: {
		paddingTop: 50,
		flexDirection: "column",
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	list: {
		flex: 1,
		width: "80%"
	},
	listItem: {
		backgroundColor: "#ccc",
		padding: 10,
		marginVertical: 10,
		borderColor: "black",
		borderWidth: 0.2
	}
});
export const addNewSuggestionStyles = StyleSheet.create({
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	textarea: {
		borderBottomColor: "black",
		width: "60%",
		borderBottomWidth: 1,
		marginBottom: 10
	},
	buttonGroup: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "stretch",
		width: "80%"
	},
	button: {
		width: "40%"
	}
});
export const randomizeButtonStyles = StyleSheet.create({
	submit: {
		flex: 1,
		width: "80%"
	}
});

export const weightsStyles = StyleSheet.create({
	weightsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "80%"
	},
	weight: {
		alignItems: "center"
	},
	weightsButtonGroup: {
		justifyContent: "center",
		alignItems: "center"
	},
	button: { width: "100%" }
});
