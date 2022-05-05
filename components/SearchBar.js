import { View, TextInput, StyleSheet, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function SearchBar() {

	const [text, onChangeText] = useState("");

	return (
		<View style={styles.searchHeader}>
			<Ionicons style={styles.searchIconL} name="ios-search" size={20} color="#000" />
			<TextInput
				style={styles.searchInput}
				onChangeText={onChangeText}
				value={text}
				placeholder="Que buscas?"
			/>
			{
				text != ""
					?
					<TouchableOpacity>
						<AntDesign style={styles.searchIconL} name="closecircleo" size={15} color="#000" />
					</TouchableOpacity>
					:
					<AntDesign style={styles.searchIconL} name="closecircleo" size={15} color="#eee" />
			}

			<View
				style={styles.searchIconR}
			>
				<AntDesign
					name='clockcircle'
					size={11}
					style={{ marginRight: 6 }}
				/>
				<Text>Search</Text>
			</View>
			{/* <Ionicons style={styles.searchIcon} name="ios- " size={20} color="#000" /> */}

		</View>
	)
}

const styles = StyleSheet.create({
	searchHeader: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#eee',
		borderRadius: 20,
	},
	searchInput: {
		backgroundColor: "#eee",
		borderRadius: 20,
		fontWeight: "700",
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
	},
	searchIconL: {
		padding: 10,
		marginLeft: 10,
	},
	searchIconR: {
		flexDirection: "row",
		marginRight: 8,
		backgroundColor: "white",
		padding: 9,
		borderRadius: 20,
		alignItems: "center"
	},

});