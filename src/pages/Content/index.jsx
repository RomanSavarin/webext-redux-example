import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Content from './Content';
import { ProxyStore } from '../../state';
import { REACT_APP_REDUX_PORT } from '../../utils/constants';

const container = document.createElement("div");
container.setAttribute("id", "content-script-app-container");
document.body.appendChild(container);

const proxyStore = new ProxyStore({
	portName: REACT_APP_REDUX_PORT
});

proxyStore.ready().then(() => {
	render(
		<Provider store={proxyStore}>
			<Content />
		</Provider>,
		window.document.querySelector('#content-script-app-container')
	);
});

if (module.hot) module.hot.accept();
