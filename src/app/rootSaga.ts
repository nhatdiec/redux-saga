import { authSaga } from "features/auth/authSaga";
import counterSaga from "features/counter/counterSaga";
import { allowedNodeEnvironmentFlags } from "process";
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([ counterSaga(), authSaga()])
}

