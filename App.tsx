import React, { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";
import { landingPageStyles } from "./libraries/styles";
import { testListings } from "./libraries/testData";
import AddNewSuggestion from "./components/AddNewSuggestion";
import RandomizeButton from "./components/RandomizeButton";
type Listing = {
	key: string;
	value: string;
};
export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	// TODO: remove testData
	const [places, setPlaces] = useState<Listing[]>(testListings);

	const addThing = (input: string) => {
		setPlaces(currentState => [
			...currentState,
			{ key: Math.random().toString(), value: input }
		]);
		setModalVisible(false);
	};

	const pickARandomPlace = () => {
		const random = Math.round(Math.random() * 100);

		console.log(random);
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
				data={places}
				renderItem={itemData => (
					<View style={landingPageStyles.listItem}>
						<Text>{itemData.item.value}</Text>
					</View>
				)}
				style={landingPageStyles.list}
			/>
			<RandomizeButton
				isDisabled={places.length === 0}
				onPress={pickARandomPlace}
			/>
		</View>
	);
}
