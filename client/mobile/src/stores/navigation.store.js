import {makeObservable, observable} from "mobx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export class NavigationStore
{
	Stack = createNativeStackNavigator();

	constructor()
	{}
}
