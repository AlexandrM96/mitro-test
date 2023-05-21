import  createSagaMiddleWare from "redux-saga";
import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";
import {rootWatcher} from "../saga";


const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers( {
    postReducer,
    commentsReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)