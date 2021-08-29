import React from 'react';
import styled from 'styled-components';
import {View, Dimensions, SafeAreaView} from "react-native";

export const Screen = ({children}) =>
{
	return <_Screen>
		{children}
	</_Screen>
}

const _Screen = styled(SafeAreaView)`
	flex: 1;
`;
