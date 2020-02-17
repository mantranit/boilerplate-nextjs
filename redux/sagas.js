import { all } from 'redux-saga/effects';
import dashboardWatcher from './dashboard/watcher';

export default function* rootSaga() {
  yield all([
    dashboardWatcher(),
  ]);
}
