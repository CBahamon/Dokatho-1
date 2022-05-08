import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
	cardProduct: {
		display: 'flex',
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	cardData: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		height: height / 6.5,
		borderRadius: 20,
		// backgroundColor: 'rgba(46, 44, 44,0.5);',
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
		backgroundColor: '#fff'
	},
	cardImage: {
		// borderRadius: 20,
		marginVertical: 10,
		marginLeft:10,
		width: '40%',
		// aspectRatio: 1,
		// flex: 0.6,
		// height:'100%',
		// alignSelf: 'center',
	},
	cardInfo: {
		// flex: 0.6,
		// marginHorizontal: 12,
		// overflow: 'hidden'
		paddingTop: 10,
		width: width / 2.3,
		overflow: 'hidden'
	},
	cardTitle: {
		fontWeight: "bold",
		fontSize: 17,
		marginLeft: 10,
	},

	cardLocation: {
		fontSize: 13,
		color: "#777",
		paddingVertical:5,
		// marginTop:3,
		marginLeft: 10,
	},
	titleBarter: {
		fontSize: 14,
		fontWeight: 'bold',

	},
	cardBarter: {
		fontSize: 13,
		fontWeight: '800',
		// marginVertical: 8,
		marginLeft: 10,
	},

	containerIcons: {
		// width:"80%",
		display: "flex",
		flex: 0.4,
		// flexDirection:"row",
		backgroundColor: "#000",
		position: 'absolute',
		// right: '40%',
		top: '80%',
	},
	iconHeard: {

	},

})