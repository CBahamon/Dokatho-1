import { View, Text, StyleSheet } from 'react-native'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import { Icon } from 'react-native-elements'
import { useState } from 'react';

export default function BottomTabs() {
	const tabs = [
		{
			name: 'Home',
			activeIcon: <Icon name="home" color="#fff" size={25} />,
			inactiveIcon: <Icon name="home" color="#fff" size={25} />,
			pageColor:'#50549D'
		},
		{
			name: 'Preferencias',
			activeIcon: <Icon name="assessment" color="#fff" size={25} />,
			inactiveIcon: <Icon name="assessment" color="#fff" size={25} />,
			pageColor:'#00B2E2'
		},
		{
			name: 'Publicar',
			activeIcon: <Icon name="add" color="#fff" size={25} />,
			inactiveIcon: <Icon name="add" color="#fff" size={25} />,
			pageColor:'#F3426D'
		},
		{
			name: 'Buscar',
			activeIcon: <Icon name="search" color="#fff" size={25} />,
			inactiveIcon: <Icon name="search" color="#fff" size={25} />,
			pageColor: '#1D1D1B'
		},
		{
			name: 'Cuenta',
			activeIcon: <Icon name="person" color="#fff" size={25} />,
			inactiveIcon: <Icon name="person" color="#fff" size={25} />,
			pageColor:'#330188'
		},
	
	];

	const [colorNav, setColorNav] = useState('')

	return (
		<Tabbar
			tabs={tabs}
			tabBarContainerBackground={colorNav}//#330188 - #171C3B - 4530B2
			tabBarBackground='#fff'
			activeTabBackground={colorNav}
			labelStyle={{ color: '#fff', fontWeight: '600', fontSize: 11 }}
			onTabChange={(tabs) => setColorNav(tabs.pageColor)}
		/>
	)
}


