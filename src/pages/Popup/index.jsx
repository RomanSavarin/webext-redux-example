import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import Popup from './Popup';
import { ProxyStore } from '../../state';
import { REACT_APP_REDUX_PORT } from '../../utils/constants';


const proxyStore = new ProxyStore({
	portName: REACT_APP_REDUX_PORT
});

proxyStore.ready().then(() => {
	render(
		<Provider store={proxyStore}>
			<Popup />
		</Provider>,
		window.document.querySelector('#app-container')
	);
});

if (module.hot) module.hot.accept();
