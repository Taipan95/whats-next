import React, { useState } from "react";
import {
	View,
	Text,
	TextProps,
	StyleProp,
	ViewProps,
	StyleSheet
} from "react-native";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";

interface IProps extends TextProps {
	weight?: string;
	onPress?: () => void;
	style?: StyleProp<ViewProps>;
	children?: Element;
}

const Weights = ({ style, onPress, children, ...props }: IProps) => {
	const [weight, setWeight] = useState<number>(1);
	return (
		<View style={weightsStyles.weightsContainer}>
			<CustomText style={weightsStyles.textArea} text={weight} />
			<View style={weightsStyles.weightsButtonGroup}>
				<CustomButton
					outerStyles={weightsStyles.button}
					innerStyles={{
						backgroundColor: "white",
						borderRadius: 10,
						margin: 1
					}}
					onPress={() => setWeight(oldWeight => oldWeight + 1)}
					title='+ 1'
				/>

				<CustomButton
					outerStyles={weightsStyles.button}
					innerStyles={{
						backgroundColor: "white",
						borderRadius: 10,
						margin: 1
					}}
					disabled={weight === 1}
					onPress={() =>
						setWeight(oldWeight =>
							oldWeight > 1 ? oldWeight - 1 : 1
						)
					}
					title='- 1'
				/>
			</View>
		</View>
	);
};

export default Weights;

const weightsStyles = StyleSheet.create({
	weightsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#aaa",
		borderRadius: 10,
		padding: 10
	},
	textArea: {
		flex: 1,
		alignItems: "center"
	},
	weightsButtonGroup: {
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		width: "100%"
	}
});
