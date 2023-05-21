import axios from "axios";
import{put, takeEvery, call} from "redux-saga/effects";
import {FETCH_COMMENTS, setComments} from "../store/commentsReducer";

const url:string = 'https://jsonplaceholder.typicode.com/posts?postId=';
const fetchComments:any = (id:string) => axios.get(url+id);

function* fetchCommentsWorker(action:any):any {
    const id:string = action.payload.id;
    const data = yield  call(fetchComments(id));
    const json = yield call(()=> new Promise(response => response(data.data)))
    console.log(json)
    yield  put(setComments(json))
}

export function* commentsWatcher() {
yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
