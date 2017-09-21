import { CHANGE_TEXT } from './actionTypes';

export const changeText = (text) => {
  if (text !== 'Hello Electron!') {
    text = 'Hello Electron!'
  } else {
    text = 'Hello World!'
  }
  return {type: CHANGE_TEXT, text}
};
