import { View, Text, TouchableOpacity, Image } from 'react-native'

import { styles } from '../styles/listProductStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Card({ name, description, location, barter, image }) {
	return (
		<>
			<TouchableOpacity style={styles.cardProduct} magnification="2" >
				<View style={styles.cardData}>
					<View style={styles.cardImage}>
						<Image
							source={{ uri: image }}
							style={{ width: '100%', height: '100%', borderRadius: 5 }}
						/>
					</View>
					<View style={styles.cardInfo}>
						<Text style={styles.cardTitle}>{name}</Text>
						<Text style={styles.cardLocation}>
							<Ionicons name="location-sharp" size={13} color="#777" />
							{location}
						</Text>
						<Text style={styles.cardBarter}>
							<Text style={styles.titleBarter}>Trueque :</Text> {barter}
						</Text>
					</View>
					{/* <View style={styles.containerIcons}>
						<TouchableOpacity>
							<Text>Me Gusta</Text>
							<MaterialCommunityIcons name="heart-outline" size={25} color="#000" />
						</TouchableOpacity>
					</View> */}
				</View>
			</TouchableOpacity>
		</>
	)
}