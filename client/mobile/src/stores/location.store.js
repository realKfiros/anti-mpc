import React from 'react';
import {action, computed, makeObservable, observable} from "mobx";
import RNLocation from "react-native-location";

export const LocationContext = React.createContext(null);

export class LocationStore
{
	@observable coordinates;

	constructor()
	{
		makeObservable(this);
		this.run();
	}

	@action
	run()
	{
		RNLocation.subscribeToLocationUpdates(locations =>
		{
			this.coordinates = locations[0];
		});
	}
}
