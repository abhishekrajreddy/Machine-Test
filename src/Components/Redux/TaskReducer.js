const initialState={
    data:null,
    success_msg:null,
    error_msg:null,
    dataState:'NOT_INITIALIZED'
}

export default function(state=initialState,action){
    switch(action.type){
        case 'FETCHING':
            return{
                ...state,
                dataState:'INITIALIZING',
            }
        case 'FETCHING_SUCCESS':
            return{
                ...state,
                data:action.payload,
                dataState:'SUCCESS'
            } 
        case 'ADDING_SUCCESS':
            return{
                ...state,
                data:action.payload,
            } 
        default:return state
    }
}