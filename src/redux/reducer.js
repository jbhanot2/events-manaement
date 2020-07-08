import * as constant from './constant';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

const reducer = (state = [], action) => {
     switch(action.type) {
          case constant.ACTION_FORM:
              return [...state]
          case constant.FETCH_COMPLETE:
              return [...state, action.payload]
          default :
              return [...state]
      } 
}

const composeReducer = combineReducers({
     form: formReducer,
     reducer: reducer
 })
 
 export default composeReducer;