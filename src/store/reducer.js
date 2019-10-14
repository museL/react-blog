import { handleActions, createAction } from "redux-actions"
import { getStoreKeyName } from "apollo-utilities";
import { getSessionStore,setSessionStore } from '../js/utils'
const initialState = {
    token: getSessionStore("token")||"",
    use:{}
};
export const Count= handleActions({
    INC(state,action){
        action.payload.promise.then(res=>{
            console.log(res)
        });
        return { ...state, count: state.count + 1 }
    }
},initialState)


export const loginSubmit= handleActions({
    LOGIN(state,action){
        console.log(action.token);
        setSessionStore("token",action.token)
        // action.payload.promise.then(res=>{
        //     console.log(res)
        // });
        return { ...state, token: action.token }
    }
},initialState)
