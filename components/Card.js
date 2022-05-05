import { View, Text, TouchableOpacity, Image } from 'react-native'

import { styles } from '../styles/listProductStyle'

export default function Card({ name, description, location, barter, image }) {
	return (
		<>
			<TouchableOpacity style={styles.cardProduct}>
				<View style={[{flexDirection: "row"}]}>
					<View style={styles.cardImage}>
						<Image
							source={{uri:image}}
							style={{width:'100%', height:'100%', borderRadius: 20}}
						/>
					</View>
					<View style={{flex:0.6, marginHorizontal: 12, overflow: 'hidden'}}>
						<Text style={styles.cardTitle}>{name}</Text>
						<Text style={styles.cardLocation}>{location}</Text>
						<Text style={styles.cardDescription}>{barter}</Text>
						{/* <Text style={styles.cardDescription}>{description}</Text> */}
					</View>
				</View>
			</TouchableOpacity>
		</>
	)
}