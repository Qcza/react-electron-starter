import { combineReducers } from 'redux';
import { CHANGE_TEXT } from './actionTypes';

function changeTextReducer (state=null, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return action.text;
    default:
      return state
  }
}

export default combineReducers ({
  text: changeTextReducer
})