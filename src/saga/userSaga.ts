import axios from "axios";
import{put, takeEvery, call} from "redux-saga/effects";
import {FETCH_USER, setUser} from "../store/userReducer";

const url:string = 'https://jsonplaceholder.typicode.com/users?userId=';
const fetchUser:any = (id:string) => axios.get(url+id);

function* fetchUserWorker(action:any):any {
    const id:string = action.payload.id;
    const data = yield  call(()=> fetchUser(id));
    const json = yield call(()=> new Promise(response => response(data.data)))
    console.log(json)
    yield  put(setUser(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USER, fetchUserWorker);
}
