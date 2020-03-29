import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";
import { testListings } from "../libraries/testData";
import CustomButton from "./CustomButton";
import AddSuggestionModal from "./AddNewSuggestion";
import ListItem from "./ListItem";
import Separator from "./Separator";

type Listing = {
	key: string;
	value: string;
};

export default function LandingPage() {
	const [modalVisible, setModalVisible] = useState(false);
	// TODO: remove testData
	const [suggestion, setSuggestion] = useState<Listing[]>(testListings);

	const addThing = (input: string) => {
		setSuggestion((currentState: Listing[]) => [
			...currentState,
			{ key: Math.random().toString(), value: input }
		]);
		setModalVisible(false);
	};

	const pickARandomPlace = () => {
		const random = Math.round(Math.random() * 100);

		console.log(random);
	};

	const deleteSuggestion = (id: string) => {
		setSuggestion((oldList: Listing[]) => {
			return oldList.filter(
				(item: Listing, i: number) => item.key !== id
			);
		});
	};
	return (
		<>
			<CustomButton
				title='Add Suggestion'
				onPress={() => setModalVisible(true)}
				outerStyles={landingPageStyles.addSuggestion}
				innerStyles={{ color: "white" }}
			/>
			<AddSuggestionModal
				isVisible={modalVisible}
				onSubmit={addThing}
				onCancel={() => setModalVisible(false)}
			/>
			<Separator />
			<FlatList
				data={suggestion}
				renderItem={itemData => (
					<ListItem
						value={itemData.item.value}
						onPress={() => deleteSuggestion(itemData.item.key)}
					/>
				)}
				style={landingPageStyles.list}
			/>
			<CustomButton
				title='Whats next?'
				outerStyles={landingPageStyles.randomize}
				innerStyles={landingPageStyles.randomize_innerStyles}
				disabled={suggestion.length === 0}
				onPress={pickARandomPlace}
			/>
		</>
	);
}
const landingPageStyles = StyleSheet.create({
	addSuggestion: {
		borderRadius: 10,
		marginBottom: 10,
		backgroundColor: "#2571cf",
		width: "80%"
	},
	list: {
		flex: 1,
		height: "80%",
		width: "80%"
	},
	randomize: {
		borderRadius: 10,
		width: "80%",
		marginTop: "10%",
		backgroundColor: "rgb(10, 191, 28)"
	},
	randomize_innerStyles: {
		color: "white"
	}
});
