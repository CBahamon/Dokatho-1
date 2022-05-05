import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
	cardProduct: {
		marginVertical: 10,
		backgroundColor: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 15,
		width: width / 1.1,
		marginHorizontal: 20,
		borderRadius: 20,

		height: height / 6,
		overflow:'hidden',
		shadowColor: "#eee",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 1.5,
	},
	cardTitle: {
		fontWeight: "bold",
		fontSize: 16,
		marginLeft: 10,
	},

	cardLocation: {
		fontSize: 11.5,
		color: "#777",
		marginLeft: 10,
	},

	cardDescription: {
		fontSize: 12,
		marginVertical: 8,
		marginLeft: 10,
	},
	cardImage: {
		flex: 0.4,
		height:'100%',
		width:'100%',
		alignSelf: 'center',
		aspectRatio: 1,
	},
	iconHeard: {
		position: 'absolute',
		right: 20,
		top: 20,
	},
	
})