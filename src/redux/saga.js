import { put, takeLatest, all } from 'redux-saga/effects';
import * as constant from './constant';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchEvents(action) {
    yield delay(2000);
    yield put({type: constant.FETCH_COMPLETE, payload: action.payload})
}

function* actionWatcher() {
    yield takeLatest( constant.ACTION_FORM, fetchEvents)
}

export default function* rootSaga() {
    yield all([actionWatcher()])
}