import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddlware from 'redux-thunk'


let reduces = combineReducers({
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduces, composeEnhancers(applyMiddleware(thunkMiddlware)
  ));

  // window.__store__ = store

export default store