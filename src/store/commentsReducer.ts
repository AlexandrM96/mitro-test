const  defaultState =  {
    comments:[]
};

export const  SET_COMMENTS = "SET_COMMENTS";
export const  FETCH_COMMENTS = "FETCH_COMMENTS";


export  default function commentsReducer(state = defaultState,action:any) {
    switch (action.type) {
        case SET_COMMENTS:
            console.log(action)
            return {...state, comments:action.payload};
    }
    return state;
};

export const setComments = (payload:any) => ({type:SET_COMMENTS, payload});
export const fetchComments = (id:string) => ({type:FETCH_COMMENTS, payload:{id}});