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
  ADD_QUESTIONNAIRE_SUCCESS,
  ADD_QUESTIONNAIRE,
  ADD_QUESTIONNAIRE_ERROR,
  LOAD_QUESTIONNAIRE,
  LOAD_QUESTIONNAIRE_SUCCESS,
  LOAD_QUESTIONNAIRE_ERROR,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  questionnaires: [],
  questionnaire: null,
  section: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('questionnaires', false);
    case LOAD_QUESTIONS_SUCCESS:
      return state
        .set('questionnaires', action.questionnaires)
        .set('loading', false);
    case LOAD_QUESTIONS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case ADD_QUESTIONNAIRE:
      return state
        .set('loading', true)
        .set('error', false);
    case ADD_QUESTIONNAIRE_SUCCESS:
      state.get('questionnaires').push(action.questionnaire);
      return state
        .set('questionnaires', state.get('questionnaires'))
        .set('loading', false);
    case ADD_QUESTIONNAIRE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_QUESTIONNAIRE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('questionnaire', null);
    case LOAD_QUESTIONNAIRE_SUCCESS:
      return state
        .set('questionnaire', action.questionnaire)
        .set('loading', false);
    case LOAD_QUESTIONNAIRE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
