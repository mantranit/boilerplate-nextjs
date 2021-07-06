import { combineReducers } from 'redux';

import dashboard from './dashboard/reducer';

export default function createRootReducer() {
	return combineReducers({
		dashboard,
		xxx: dashboard,
	});
}
