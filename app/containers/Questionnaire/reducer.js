import {
  LOAD_QUESTIONNAIRE,
  LOAD_QUESTIONNAIRE_SUCCESS,
  LOAD_QUESTIONNAIRE_ERROR
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  questionnaire: null,
  loading: false,
  error: false
});

function questionnaireReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONNAIRE:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('questionnaire', null);
    case LOAD_QUESTIONNAIRE_SUCCESS:
      return state
        .setIn('questionnaire', action.questionnaire)
        .set('loading', false);
    case LOAD_QUESTIONNAIRE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default questionnaireReducer;
