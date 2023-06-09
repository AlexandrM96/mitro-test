import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/postReducer";
import {useEffect} from "react";
import Comments from "../Commens/Commens";
import {fetchUser} from "../../store/userReducer";

export  default function Posts() {

    const posts = useSelector((state:any) => state.postReducer.posts);
    const dispatch = useDispatch();


    useEffect(() => {
        function sayHi() {
            dispatch(fetchPosts());
        }
        setTimeout(sayHi, 5000);
    },[])

    return (
        posts.length === 0 ?
            <div className='Block-loader'>
                <div className="Loader"></div>
            </div>
            :
       <div className='px-3'>
           {posts.map((post:any) =>
               <div key={post.id} className='d-flex mb-3 bg-light'>
                   <div>
                       <div className='image-block me-2'>
                     <div onClick={()=>  dispatch(fetchUser(post.userId))}>
                         <picture>
                             <img className='w-100' src='/images/user2.png' alt='user2'/>
                         </picture>
                     </div>
                       </div>
                   </div>
                   <div>
                       <h4>{post.title}</h4>
                       <h6>{post.body}</h6>
                       <div className='mt-3'>
                           <Comments id={post.id} />
                       </div>
                   </div>
               </div>
           )}
       </div>
    );

}
