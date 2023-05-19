import  createSagaMiddleWare from "redux-saga";
import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import postReducer from "./postReducer";

const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers( {
    postReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)