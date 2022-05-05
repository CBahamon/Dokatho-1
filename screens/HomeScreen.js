import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<HeaderTabs />
				<SearchBar />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#eee'
	},
	header:{
		marginTop: 30,
		backgroundColor:"white",
		padding:15,
		width:"100%"
	}

}) 