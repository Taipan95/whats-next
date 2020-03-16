import React, { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";
import { landingPageStyles } from "./libraries/styles";
import { testListings } from "./libraries/testData";
import AddNewSuggestion from "./components/AddNewSuggestion";
import RandomizeButton from "./components/RandomizeButton";
import ListItem from "./components/ListItem";
type Listing = {
	key: string;
	value: string;
};
export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	// TODO: remove testData
	const [suggestion, setSuggestion] = useState<Listing[]>(testListings);

	const addThing = (input: string) => {
		setSuggestion(currentState => [
			...currentState,
			{ key: Math.random().toString(), value: input }
		]);
		setModalVisible(false);
	};

	const pickARandomPlace = () => {
		const random = Math.round(Math.random() * 100);

		console.log(random);
	};

	const deleteSuggestion = id => {
		setSuggestion(oldList => {
			return oldList.filter((item, i) => item.key !== id);
		});
	};
	return (
		<View style={landingPageStyles.main}>
			<Button
				title='Add Suggestion'
				onPress={() => setModalVisible(true)}
			/>
			<AddNewSuggestion
				isVisible={modalVisible}
				onSubmit={addThing}
				onCancel={() => setModalVisible(false)}
			/>
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
			<RandomizeButton
				isDisabled={suggestion.length === 0}
				onPress={pickARandomPlace}
			/>
		</View>
	);
}
