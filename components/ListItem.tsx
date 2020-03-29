import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";

interface IProps {
	styles?: any;
	value: string;
	onPress?: () => void;
}

const ListItem = ({ styles, value, onPress }: IProps) => {
	return (
		<View style={listItemStyles.listItem}>
			<CustomText
				style={listItemStyles.textArea}
				text={value}
				numberOfLines={1}
			/>

			<CustomButton
				outerStyles={listItemStyles.deleteButton}
				innerStyles={{ color: "red", padding: 0 }}
				touchable={true}
				title='X'
				onPress={onPress}
				fit={1}
			/>
		</View>
	);
};

export default ListItem;

const listItemStyles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		padding: 10,
		marginVertical: 10,
		borderColor: "rgba(20, 123, 242, 1)",
		backgroundColor: "rgba(42, 143, 254, 1)",
		borderWidth: 1,
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, .4)",
		shadowOffset: { width: -1, height: 1 },
		shadowRadius: 10,
		shadowOpacity: 1,
		elevation: 3
	},
	textArea: { flex: 5, height: 20, overflow: "hidden" },
	deleteButton: { flex: 1, shadowOpacity: 0, elevation: 0 }
});
