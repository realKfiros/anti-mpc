import React from 'react';
import {LocationContext, LocationStore} from "./stores/location.store";
import {MapPage} from "./pages/map.page";
import {Store, MainStoreContext} from "./stores/store";
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigator} from "./app.navigator";

export const App = () =>
{
	return <MainStoreContext.Provider value={new Store()}>
		<AppNavigator />
	</MainStoreContext.Provider>
};
