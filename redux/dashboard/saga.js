import { apiGet } from '../../utils/api';
import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { types, urls, tickClock } from './action'

function* runClockSaga() {
  yield take(types.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const data = yield call(apiGet, {
      path: urls.USERS
    })
    yield put({
      type: types.LOAD_DATA_SUCCESS,
      data,
    })
  } catch (error) {
    yield put({
      type: types.FAILURE,
      error,
    })
  }
}

export default function* dashboardSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(types.LOAD_DATA, loadDataSaga),
  ])
}
