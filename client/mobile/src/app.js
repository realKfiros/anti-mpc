import React from 'react';
import {LocationContext, LocationStore} from "./stores/location.store";
import {MapPage} from "./pages/map.page";

export const App = () =>
{
	return <LocationContext.Provider value={new LocationStore()}>
		<MapPage />
	</LocationContext.Provider>
};
