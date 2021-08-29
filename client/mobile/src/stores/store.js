import React from "react";
import {isComputedProp, isObservableProp, makeObservable} from "mobx";
import {isObject, objectHash} from "../misc/utilities";
import {LocationStore} from "./location.store";
import {NavigationStore} from "./navigation.store";

export const MainStoreContext = React.createContext(null);

let msInstance = null;
export const mainStoreInstance = (init = undefined) =>
{
	return msInstance = msInstance || (init && new Store());
};

const typeToStoreClass = {
	location: LocationStore,
	navigation: NavigationStore
};

export class Store
{
	_stores = new Map();

	constructor()
	{
		// makeObservable(this);
	}

	storeKey(type, id)
	{
		let key = type;
		if (id)
			key += ':' + (isObject(id) ? objectHash(id) : id);
		return key;
	}

	hasStore(type, id)
	{
		return this._stores.has(this.storeKey(type, id));
	}

	invalidateStore(type, id)
	{
		const key = this.storeKey(type, id);
		if (this._stores.has(key))
		{
			const store = this._stores.get(key);
			this._stores.delete(key);
			if (isObservableProp(store, 'ready') && !isComputedProp(store, 'ready'))
				store.ready = false; // used to refresh views with this store
		}
	}

	getStore(type, id)
	{
		const key = this.storeKey(type, id);

		if (this._stores.has(key))
			return this._stores.get(key);

		let newStore = null;
		const classObj = typeToStoreClass[type];
		if ([LocationStore, NavigationStore].includes(classObj))
			newStore = new classObj({mainStore: this});
		else if (type === 'test')
			newStore = {};

		if (newStore)
		{
			this._stores.set(key, newStore);
			return newStore;
		}
	}
}
