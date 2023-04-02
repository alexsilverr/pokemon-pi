
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import  reducer  from '../Store/reducer';
import thunk from "redux-thunk";
 const rootReducer =combineReducers({
   pokemon:reducer
  
 })
const composeEnhase = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStores(){
   const store = createStore(
      rootReducer,composeEnhase(applyMiddleware(thunk)))
    return store
}



 