import { apiGet } from '../../utils/api';
import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { types, urls } from './index'
import { failure, loadDataSuccess, tickClock } from './actions'

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
    })
    yield put(loadDataSuccess(response))
  } catch (err) {
    yield put(failure(err))
  }
}

export default function* dashboardWatcher() {
  yield all([
    call(runClockSaga),
    takeLatest(types.LOAD_DATA, loadDataSaga),
  ])
}
