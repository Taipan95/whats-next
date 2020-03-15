import React, { useState } from "react";
import {
	View,
	TextProps,
	StyleProp,
	ViewProps,
	StyleSheet
} from "react-native";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { weightsStyles as styles } from "../libraries/styles";
interface IProps extends TextProps {
	weight?: string;
	onPress?: () => void;
	style?: StyleProp<ViewProps>;
	children?: Element;
}

const Weights = ({ style, onPress, children, ...props }: IProps) => {
	const [weight, setWeight] = useState<number>(1);
	return (
		<View style={styles.weightsContainer}>
			<CustomText style={styles.weight} text={weight} />
			<View style={styles.weightsButtonGroup}>
				<CustomButton
					style={styles.button}
					onPress={() => setWeight(oldWeight => oldWeight + 1)}
					title='+ 1'
				/>

				<CustomButton
					style={styles.button}
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
