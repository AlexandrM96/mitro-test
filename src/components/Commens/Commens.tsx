import React, {useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../store/commentsReducer";

export  default function Comments(props:any) {

    const [state, setState] = useState(false);

    const comments = useSelector((state:any) => state.commentsReducer.comments);

    const dispatch = useDispatch();

    const addComments = () => {
        state? setState(false) : setState(true);
        dispatch(fetchComments(props.id));
    }
console.log(props.id)
    return (
            <div>
                <button onClick={()=> addComments()} className='btn btn-primary'>
                    Комментарии
                </button>
                <div className={state ? 'd-block ' : 'd-none'}>
                    {<div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> && comments.filter((comment:any)=> comment.postId === props.id ).map((comment:any) =>
                        <div key={comment.id} className='d-flex mb-3 bg-p'>
                            <div>
                                <h4>{comment.email}:</h4>
                                <h6>{comment.name}</h6>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
}
