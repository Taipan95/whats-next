import { View, Text, TextInput, Modal, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import Phrases from "../libraries/Phrases";
import React, { useState } from "react";
import Weights from "./Weights";

interface IProps {
	onSubmit: (string) => void;
	onCancel: () => void;
	isVisible: boolean;
}

const AddSuggestionModal = ({ onSubmit, onCancel, isVisible }: IProps) => {
	const [input, setInput] = useState<string>("");

	const onTextChanged = (place: string) => {
		setInput(place);
	};

	return (
		<Modal visible={isVisible} animated presentationStyle='overFullScreen'>
			<View style={addNewSuggestionStyles.innerContainer}>
				<View style={addNewSuggestionStyles.inputContainer}>
					<TextInput
						placeholder={Phrases.placeholder.locationInput}
						style={addNewSuggestionStyles.textarea}
						onChangeText={onTextChanged}
						value={input}
					/>
					<View style={addNewSuggestionStyles.losingMySanity}>
						<Text
							style={{
								marginBottom: 5,
								textDecorationLine: "underline"
							}}
						>
							Weight:
						</Text>
						<Weights />
					</View>
				</View>
				<View style={addNewSuggestionStyles.buttonGroup}>
					<CustomButton
						outerStyles={addNewSuggestionStyles.button}
						innerStyles={addNewSuggestionStyles.cancelButton}
						title='Cancel'
						onPress={() => {
							onCancel();
							setInput("");
						}}
					/>
					<CustomButton
						outerStyles={addNewSuggestionStyles.button}
						innerStyles={addNewSuggestionStyles.addButton}
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

export default AddSuggestionModal;

const addNewSuggestionStyles = StyleSheet.create({
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%"
	},
	textarea: {
		flex: 2,
		borderBottomColor: "black",
		width: "60%",
		borderBottomWidth: 1,
		marginBottom: 10
	},
	losingMySanity: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10
	},
	buttonGroup: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "flex-start",
		width: "80%"
	},
	button: { width: "40%" },
	addButton: { backgroundColor: "#2571cf", borderRadius: 10, margin: 1 },
	cancelButton: { backgroundColor: "red", borderRadius: 10, margin: 1 }
});
