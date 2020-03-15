import React from "react";
import { Button, View } from "react-native";
import { randomizeButtonStyles } from "../libraries/styles";
interface IProps {
	isDisabled: boolean;
	onPress: () => void;
}
const RandomizeButton = ({ isDisabled, onPress }: IProps) => {
	return (
		<View style={randomizeButtonStyles.submit}>
			<Button
				disabled={isDisabled}
				title={`What's Next?`}
				onPress={onPress}
			/>
		</View>
	);
};
export default RandomizeButton;
