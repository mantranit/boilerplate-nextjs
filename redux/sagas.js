import { all, call } from 'redux-saga/effects';
import dashboardSaga from './dashboard/saga';

export default function* rootSaga() {
  yield all([
    call(dashboardSaga),
  ]);
}
