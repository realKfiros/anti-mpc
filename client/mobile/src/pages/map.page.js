import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet} from "react-native";
import MapView, {Marker} from "react-native-maps";
import RNLocation from 'react-native-location';
import styled from 'styled-components';
import {observer} from "mobx-react-lite";

export const MapPage = observer(() =>
{
	const [coordinates, setCoordinates] = useState();

	useEffect(() =>
	{
		RNLocation.subscribeToLocationUpdates(locations =>
		{
			setCoordinates(locations[0]);
		});
	}, []);

	const region = {
		...coordinates,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	};

	return <Screen>
		<MapView region={region} style={StyleSheet.absoluteFill}>
			<Marker coordinate={coordinates} />
		</MapView>
	</Screen>
});

const Screen = styled(View)`
	height: ${Dimensions.get('screen').height}px;
	width: ${Dimensions.get('screen').width}px;
`;
