import React from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import Card from './Card';

import {styles} from '../styles/listProductStyle'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ProductItem() {
	const urlImg ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2Fbicicleta-gw-shark-rin-29-en-carbono-grupo-alivio-D_NQ_NP_891210-MCO25693550080_062017-F.jpg&f=1&nofb=1"
	const urlImg2= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaraza.com%2Fwp-content%2Fuploads%2Fsites%2F5%2F2020%2F02%2Fchristian-salas-s-7eumdfywa-unsplash-1.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1"

	return (
		// <TouchableOpacity style={styles.cardProduct}>
		// 	<View >
		// 		<ProductImage />
		// 		<ProductInfo />
		// 	</View>
		// </TouchableOpacity>
		<View >
			<ScrollView>
				<Card 
				image={urlImg} name={"Bicicleta todo terreno para locos"} description={"Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos"} location={"Neiva(Huila), Colombia"} barter={"clases de programacion orientada "} 
				/>
				<Card 
				image={urlImg2} name={"Mac book Pro 2021 8ram"} description={"Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos"} location={"Neiva"} barter={"iphone 12 pro mar"} 
				/>
				<Card 
				image={urlImg} name={"redmi note 9 s 4ram 128rom"} description={"Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos"} location={"Neiva"} barter={"TV 32 pulgas lg"} 
				/>
				<Card 
				image={urlImg2} name={"Bicicleta todo terreno"} description={"Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos"} location={"Neiva"} barter={"TV"} 
				/>
				<Card 
				image={urlImg} name={"Bicicleta todo terreno"} description={"Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos"} location={"Neiva"} barter={"TV"} 
				/>
				<Card 
				image={urlImg2} name={"Bicicleta todo terreno"} description={"Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos"} location={"Neiva"} barter={"TV"} 
				/>
			</ScrollView>
		</View>
	)
}

const ProductImage = () => (
	<>
		<Image
			source={{
				uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2Fbicicleta-gw-shark-rin-29-en-carbono-grupo-alivio-D_NQ_NP_891210-MCO25693550080_062017-F.jpg&f=1&nofb=1"
			}}
			style={styles.imageProduct}
		/>
		<TouchableOpacity style={styles.iconHeard}>
			<MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
		</TouchableOpacity>
	</>
);

const ProductInfo = () => (
	<>
		<Text>Bicicleta todo terreno</Text>
		<Text>Neiva</Text>
		<Text>Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos</Text>
		<Text>Intercambiar por: TV</Text>
	</>

)

