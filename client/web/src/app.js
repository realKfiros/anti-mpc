import React from 'react';
import Home from './pages/home';
import rootTheme from './themes/rootTheme'
import { ThemeProvider } from '@material-ui/core/styles';



export const App = () => {
	return <div>
		<ThemeProvider theme={rootTheme}><Home /></ThemeProvider>
	</div>;
};
