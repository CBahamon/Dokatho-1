import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native'

const items = [
	{
		image: require("../assets/images/technology.png"),
		text: "Tecnologia",
		id: 1
	},
	{
		image: require("../assets/images/service.png"),
		text: "Servicio",
		id: 2
	},
	{
		image: require("../assets/images/service.png"),
		text: "Servicio",
		id: 3
	},
	{
		image: require("../assets/images/service.png"),
		text: "Servicio",
		id: 4
	},
	{
		image: require("../assets/images/service.png"),
		text: "Servicio",
		id: 5
	},
	{
		image: require("../assets/images/service.png"),
		text: "Servicio",
		id: 6
	},
	{
		image: require("../assets/images/service.png"),
		text: "Servicio",
		id: 7
	},
	{
		image: require("../assets/images/service.png"),
		text: "Servicio",
		id: 8
	},
]

const renderItem = (({ item }) => {
	return (
		<View style={styles.itemBar}>
			<Image source={item.image}
				style={styles.iconBar}
			/>
			<Text style={styles.textBar}>{item.text}</Text>
		</View>)
})

export default function Categories() {
	return (
		// <ScrollView horizontal>
		// 	<View style={styles.itemBar}>
		// 		<Image source={items[0].image}
		// 			style={styles.iconBar}
		// 		/>
		// 		<Text style={styles.textBar}>{items[0].text}</Text>
		// 	</View>
		// </ScrollView>
		<View style={styles.containerBar}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<FlatList
					horizontal
					style={styles.listItems}
					data={items}
					keyExtractor={(item) => item.id + ''}
					renderItem={renderItem}
				/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	iconBar: {
		width: 50,
		height: 40,
		resizeMode: "contain",
	},
	textBar: {
		fontSize: 13,
		fontWeight: "900",
	},
	itemBar: {
		alignItems: "center",
		marginRight: 30
	},
	listItems: {
		width: '100%',
	},
	containerBar:{
		marginTop:5,
		backgroundColor:'#fff',
		paddingVertical:10,
		paddingLeft:20
	}


});