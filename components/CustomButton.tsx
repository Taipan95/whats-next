import React from "react";
import { View, Button, ButtonProps, StyleProp, ViewStyle } from "react-native";

interface IButtonProps extends ButtonProps {
	style?: StyleProp<ViewStyle>;
}

const CustomButton = ({ style, ...props }: IButtonProps) => {
	return (
		<View style={style}>
			<Button
				title={props.title}
				color={props.color}
				onPress={props.onPress}
				disabled={props.disabled}
				accessibilityLabel={props.accessibilityLabel}
			/>
		</View>
	);
};

export default CustomButton;
