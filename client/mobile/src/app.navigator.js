import React from 'react';
import {observer} from "mobx-react-lite/src/observer";
import {useContext} from "react";
import {MainStoreContext} from "./stores/store";
import {NavigationContainer} from "@react-navigation/native";
import {MapPage} from "./pages/map.page";

export const AppNavigator = observer(() =>
{
	const {Stack} = useContext(MainStoreContext).getStore('navigation');

	return <NavigationContainer>
		<Stack.Navigator initialRouteName="Map">
			<Stack.Screen
				name="Map"
				component={MapPage}
				options={{
					headerShown: false
				}}/>
		</Stack.Navigator>
	</NavigationContainer>
});
