const initialState={
    isAuthenticate:false,
    user:{},
    success_msg:null,
    error_msg:null,
}

export default function(state=initialState,action){
    switch(action.type){
        case 'ON_LOGIN_SUCCESS':
            return{
            ...state,
            isAuthenticate:true,
            user:action.payload,
        }   
        case 'ON_SAVE_PASSWORD_SUCCESS':
            return{
            ...state,
            user:action.payload,
        }        
        case 'ON_LOGOUT_SUCCESS':
            return{
            ...state,
            isAuthenticate:false,
        }
        default:return state
    }
}