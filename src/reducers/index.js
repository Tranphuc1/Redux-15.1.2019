import {combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import taskreducer from './taskReducer';
const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  taskreducer,
  form: formReducer
});
export default rootReducer;