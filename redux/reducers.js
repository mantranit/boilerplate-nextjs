import { combineReducers } from 'redux';

import dashboard, { dashboardInitialState } from './dashboard/reducer';

export const exampleInitialState = {
  dashboard: dashboardInitialState,
}

export default function createRootReducer() {
	return combineReducers({
		dashboard,
	});
}
