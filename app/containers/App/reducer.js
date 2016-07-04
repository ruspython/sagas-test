/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_ERROR,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  questions: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_QUESTIONS_SUCCESS:
      debugger
      return state
        .set('questions', action.questions)
        .set('loading', false);
    case LOAD_QUESTIONS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
