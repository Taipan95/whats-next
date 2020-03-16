import React from "react";
import { View, StyleProp, ViewProps, Text } from "react-native";
import CustomButton from "./CustomButton";
import { listItemStyles } from "../libraries/styles";
import CustomText from "./CustomText";

interface IProps {
	styles?: any;
	value: string;
	onPress?: () => void;
}

const ListItem = ({ styles, value, onPress }: IProps) => {
	return (
		<View style={listItemStyles.listItem}>
			<CustomText style={listItemStyles.textArea} text={value} />
			<CustomButton
				style={listItemStyles.deleteButton}
				title='X'
				color='red'
				onPress={onPress}
			/>
		</View>
	);
};

export default ListItem;
