import React from "react";
import { View, Text, StyleProp, ViewStyle, TextProps } from "react-native";

interface ITextProps extends TextProps {
	style?: StyleProp<ViewStyle>;
	text: any;
}

const CustomText = ({ style, text, ...props }: ITextProps) => {
	return (
		<View style={style}>
			<Text>{text}</Text>
		</View>
	);
};

export default CustomText;
