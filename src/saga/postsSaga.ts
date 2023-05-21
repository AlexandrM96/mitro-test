import axios from "axios";
import{put, takeEvery, call} from "redux-saga/effects";
import {FETCH_POSTS, setPosts} from "../store/postReducer";

const url:string = 'https://jsonplaceholder.typicode.com/posts';
const fetchPosts = () => axios.get(url);

function* fetchPostsWorker():any {
    const data = yield  call(fetchPosts);
    const json = yield call(()=> new Promise(response => response(data.data)))
    yield  put(setPosts(json))
}

export function* postsWatcher() {
yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
