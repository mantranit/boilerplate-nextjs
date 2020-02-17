import { apiGet } from '../../utils/api';
import { types, urls } from './index';
import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'

import { tickClock } from './actions'

function* runClockSaga() {
  yield take(types.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const response = yield call(apiGet, {
      path: urls.USERS
    });
    yield put({
        type: types.LOAD_DATA_SUCCESS,
        data: response,
    })
  } catch (err) {
    yield put({
        type: types.FAILURE,
        error,
    });
  }
}

export default function* dashboardWatcher() {
    yield takeLatest(types.LOAD_DATA, loadDataSaga);
    yield all([
        call(runClockSaga),
        
    ]);
}