import  createSagaMiddleWare from "redux-saga";
import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";
import {rootWatcher} from "../saga";
import userReducer from "./userReducer";


const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers( {
    postReducer,
    commentsReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)