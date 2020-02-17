/* global fetch */
import { apiGet } from '../utils/api';
import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadDataSuccess, tickClock } from '../actions'

es6promise.polyfill()

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    const response = yield call(apiGet, {
      path: 'https://jsonplaceholder.typicode.com/users'
    });
    yield put(loadDataSuccess(response))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ])
}

export default rootSaga
