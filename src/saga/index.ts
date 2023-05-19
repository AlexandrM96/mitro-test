import {all} from "axios";
import {postsWatcher} from "./postsSaga"

export function* rootWatcher() {
    yield all([postsWatcher()])
}