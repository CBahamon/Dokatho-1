import { View, Text, StyleSheet } from 'react-native'

export default function BottomTabs() {
  return (
	<View style={styles.container}>
	  <Text>BottomTabs</Text>
	</View>
  )
}


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#eee',
		margin:10,
		marginHorizontal:30,
		justifyContent: 'space-between',
	},
	
}) 