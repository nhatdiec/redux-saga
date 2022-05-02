import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery } from "redux-saga/effects";
import { increment, incrementByAmount, incrementByAmountSaga, incrementByAmountSagaSuccess } from "./counterSlice";

export function* incerementSaga(action: PayloadAction<number>){
    console.log('Waiting 1s');
    delay(1000);
    //dispatch
    console.log('Dispatch action increment');
    put(incrementByAmountSagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log('Counter saga');
    yield takeEvery(incrementByAmountSaga.toString(), incerementSaga);
}
