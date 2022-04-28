import { SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function HomeScreen() {
  return (
	<SafeAreaView style={styles.container}>
	  <HeaderTabs />
	</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
		padding:30,
		flex:1,
	},

}) 