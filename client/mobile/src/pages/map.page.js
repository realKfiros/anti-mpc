import React, {useContext} from 'react';
import {StyleSheet, View} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {observer} from "mobx-react-lite";
import {MainStoreContext} from "../stores/store";
import {Screen} from "../components/screen.component";

export const MapPage = observer(() =>
{
	const {coordinates} = useContext(MainStoreContext).getStore('location');

	let region = {
		...coordinates,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	};

	return <Screen>
		<MapView region={region} style={StyleSheet.absoluteFill}>
			<Marker coordinate={region} />
		</MapView>
	</Screen>
});
