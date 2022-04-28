import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {

	const [activeTab, setActiveTab] = useState("Recientes")

	return (
		<View style={styles.container}>
			<HeaderButton
				text="Recientes"
				btnColor="black"
				textColor="white"
				activeTab={activeTab}
				setActiveTab={setActiveTab} 
			/>
			<HeaderButton
				text="Random"
				btnColor="white"
				textColor="black"
				activeTab={activeTab}
				setActiveTab={setActiveTab} 
			/>
		</View>
	)
}

const HeaderButton = (props) => (
	<View>
		<TouchableOpacity
			style={[styles.header, { backgroundColor: props.activeTab === props.text ? "purple" : "white" }]}
			onPress={() => props.setActiveTab(props.text)}
		>
			<Text
				style={[styles.text, { color:  props.activeTab === props.text ? "white" : "black" }]}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	header: {
		paddingHorizontal: 16,
		paddingVertical: 6,
		borderRadius: 30,
	},
	text: {
		fontSize: 15,
		fontWeight: 'bold',
	}

})