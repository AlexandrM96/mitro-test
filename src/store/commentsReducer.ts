

const  defaultState:storeType =  {
    comments:[]
};

interface storeType {
    comments: any
}

export const  SET_COMMENTS = "SET_COMMENTS";
export const  FETCH_COMMENTS = "FETCH_COMMENTS";


export  default function commentsReducer(state = defaultState,action:any) {
    switch (action.type) {
        case SET_COMMENTS:
            const newState = action.payload.reduce((arr:any, eachArr2Elem:any) => {
                if (state.comments.findIndex((eachArr1Elem:any) => eachArr1Elem.id === eachArr2Elem.id && eachArr1Elem.name === eachArr2Elem.name && eachArr1Elem.email === eachArr2Elem.email)  === -1) {
                    arr.push(eachArr2Elem)
                }
                return arr
            }, [...state.comments]);
            return {...state, comments: newState};
    }
    return state;
};

export const setComments = (payload:any) => ({type:SET_COMMENTS, payload});
export const fetchComments = (id:string) => ({type:FETCH_COMMENTS, payload:{id}});