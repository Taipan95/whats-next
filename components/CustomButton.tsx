import React from "react";
import {
	Text,
	View,
	Button,
	ButtonProps,
	StyleProp,
	ViewStyle,
	TouchableOpacity,
	TextStyle,
	StyleSheet
} from "react-native";

interface IButtonProps extends ButtonProps {
	outerStyles?: StyleProp<ViewStyle>;
	touchable?: boolean;
	innerStyles?: StyleProp<TextStyle>;
	fit?: number;
}

const CustomButton = ({
	outerStyles,
	innerStyles,
	fit,
	...props
}: IButtonProps) => {
	const { disabled } = props;

	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[styles.wrapper, outerStyles]}
			{...props}
		>
			<Text
				style={[styles.text, innerStyles, disabled && styles.disabled]}
				numberOfLines={fit}
			>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	wrapper: {
		shadowColor: "rgba(0, 0, 0, .4)",
		shadowOffset: { width: -1, height: 1 },
		shadowRadius: 10,
		shadowOpacity: 1,
		elevation: 3,
		borderRadius: 10
	},
	text: {
		fontSize: 16,
		padding: 10,
		textAlign: "center",
		textShadowColor: "rgba(0, 0, 0, 0.25)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10
	},
	disabled: {
		color: "#ccc",
		backgroundColor: "#aaa",
		textShadowColor: "rgba(0, 0, 0, 0)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10
	}
});
