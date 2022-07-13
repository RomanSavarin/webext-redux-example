/* 
	The place for webext-redux dependent logic.
*/

import { Store, wrapStore } from '@roma-sav/webext-redux';

// You can switch between library versions for testing purposes
// import { Store, wrapStore } from '@eduardoac-skimlinks/webext-redux';

import { buildFrom } from './store';
import { STORAGE_CACHE_VERSION, REACT_APP_REDUX_PORT } from '../utils/constants';

export async function initializeWrappedStore() {
	const stateFromStorage = await chrome.storage.local.get(STORAGE_CACHE_VERSION);
	const lastStateFromStorage = stateFromStorage[STORAGE_CACHE_VERSION];

	const store = buildFrom(lastStateFromStorage);

	wrapStore(store, { portName: REACT_APP_REDUX_PORT });

	await chrome.storage.local.clear();

	await chrome.storage.local.set({ [STORAGE_CACHE_VERSION]: store.getState() });
	store.subscribe(async () => {
		await chrome.storage.local.set({ [STORAGE_CACHE_VERSION]: store.getState() });
	});
}

export { Store as ProxyStore };