import { View, TextInput, Modal } from "react-native";
import { addNewSuggestionStyles as styles } from "../libraries/styles";
import CustomButton from "./CustomButton";
import Phrases from "../libraries/Phrases";
import React, { useState } from "react";
// import Weights from "./Weights";
import CustomText from "./CustomText";
import Weights from "./Weights";

interface IProps {
	onSubmit: (string) => void;
	onCancel: () => void;
	isVisible: boolean;
}

const AddNewSuggestion = ({ onSubmit, onCancel, isVisible }: IProps) => {
	const [input, setInput] = useState<string>("");
	const [weight, setWeight] = useState<number>(1);

	const onTextChanged = (place: string) => {
		setInput(place);
	};

	return (
		<Modal visible={isVisible} animated presentationStyle='overFullScreen'>
			<View style={styles.innerContainer}>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						width: "80%"
					}}
				>
					<TextInput
						placeholder={Phrases.placeholder.locationInput}
						style={styles.textarea}
						onChangeText={onTextChanged}
						value={input}
					/>

					<Weights />
				</View>
				<View style={styles.buttonGroup}>
					<CustomButton
						style={styles.button}
						title='Cancel'
						color='red'
						onPress={() => {
							onCancel();
							setInput("");
						}}
					/>
					<CustomButton
						style={styles.button}
						disabled={input?.trim() === ""}
						title='Add'
						onPress={() => {
							onSubmit(input);
							setInput("");
						}}
					/>
				</View>
			</View>
		</Modal>
	);
};

export default AddNewSuggestion;
