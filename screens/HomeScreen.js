import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import React, { useState }  from 'react'

import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import ProductItem, { products } from '../components/ProductItem'
import BottomTabs from '../components/Layout/BottomTabs'

export default function HomeScreen() {
	const [productData, setProductData] = useState(products)
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<SearchBar />
				<HeaderTabs />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<ProductItem productData={productData}/>
			</ScrollView>
			<Divider width={1}/>
			<BottomTabs />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee'
	},
	header: {
		marginTop: 30,
		backgroundColor: "white",
		padding: 15,
		width: "100%"
	}
}) 