import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import Card from './Card';



 export const products = [
	{
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2Fbicicleta-gw-shark-rin-29-en-carbono-grupo-alivio-D_NQ_NP_891210-MCO25693550080_062017-F.jpg&f=1&nofb=1",
		name: "Bicicleta todo terreno para locos",
		description: "Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos",
		location: "Neiva(Huila), Colombia",
		barter: 'clases de programacion orientada'
	},
	{
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaraza.com%2Fwp-content%2Fuploads%2Fsites%2F5%2F2020%2F02%2Fchristian-salas-s-7eumdfywa-unsplash-1.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1",
		name: "Xiaomi redmi note 9",
		description: "Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos",
		location: "Bogota, Colombia",
		barter: 'tv 32 pulgadas LG'
	},
	{
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaraza.com%2Fwp-content%2Fuploads%2Fsites%2F5%2F2020%2F02%2Fchristian-salas-s-7eumdfywa-unsplash-1.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1",
		name: "Xiaomi redmi note 9",
		description: "Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos",
		location: "Bogota, Colombia",
		barter: 'tv 32 pulgadas LG'
	},
	{
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaraza.com%2Fwp-content%2Fuploads%2Fsites%2F5%2F2020%2F02%2Fchristian-salas-s-7eumdfywa-unsplash-1.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1",
		name: "Xiaomi redmi note 9",
		description: "Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos",
		location: "Bogota, Colombia",
		barter: 'tv 32 pulgadas LG'
	},
	{
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaraza.com%2Fwp-content%2Fuploads%2Fsites%2F5%2F2020%2F02%2Fchristian-salas-s-7eumdfywa-unsplash-1.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1",
		name: "Xiaomi redmi note 9",
		description: "Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos",
		location: "Bogota, Colombia",
		barter: 'tv 32 pulgadas LG'
	},
	{
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaraza.com%2Fwp-content%2Fuploads%2Fsites%2F5%2F2020%2F02%2Fchristian-salas-s-7eumdfywa-unsplash-1.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1",
		name: "Xiaomi redmi note 9",
		description: "Bicicleta todo terreno gw con 3 años de uso en buen estado color naranaja 7 velocidades rin 27 y 2 platos",
		location: "Bogota, Colombia",
		barter: 'tv 32 pulgadas LG'
	},
];
export default function ProductItem({productData}) {

	return (
		<View >
			<ScrollView>
				{productData.map((product, index) => (
					<Card
						key={index}
						image={product.image}
						name={product.name}
						description={product.description}
						location={product.location}
						barter={product.barter}
					/>
				))}
			</ScrollView>
		</View>
	)
}


