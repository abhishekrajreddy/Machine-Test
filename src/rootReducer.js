import {combineReducers} from 'redux'
import AuthReducer from './Components/Redux/AuthReducer'
import TaskReducer from './Components/Redux/TaskReducer'


export default combineReducers({
    user:AuthReducer,
    task:TaskReducer,
})