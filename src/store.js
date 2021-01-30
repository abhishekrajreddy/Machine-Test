import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'



const middleware=[thunk]
const initialState={}

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
    )
)

export default store;