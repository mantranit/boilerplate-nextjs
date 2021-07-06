import { all, call } from 'redux-saga/effects';
import dashboardWatcher from './dashboard/watcher';

export default function* rootSaga() {
  yield all([
    call(dashboardWatcher),
  ]);
}
