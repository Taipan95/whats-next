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
	}
});

export const listItemStyles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		marginVertical: 10,
		borderColor: "rgba(20, 123, 242, 1)",
		backgroundColor: "rgba(42, 143, 254, 1)",
		borderWidth: 1
	},
	textArea: {},
	deleteButton: {}
});

export const addNewSuggestionStyles = StyleSheet.create({
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	textarea: {
		flex: 2,
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
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1
	},
	weight: {
		flex: 1,
		alignItems: "center"
	},
	weightsButtonGroup: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		width: "100%"
	}
});
