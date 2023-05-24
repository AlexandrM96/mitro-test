

const  defaultState:storeType =  {
    user:[]
};

interface storeType {
    user: any
}

export const  SET_USER = "SET_USER";
export const  FETCH_USER = "FETCH_USER";


export  default function userReducer(state = defaultState,action:any) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload};
    }
    return state;
};

export const setUser = (payload:any) => ({type:SET_USER, payload});
export const fetchUser = (id:string) => ({type:FETCH_USER, payload:{id}});