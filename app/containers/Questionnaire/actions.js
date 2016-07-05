import {
  LOAD_QUESTIONNAIRE,
  LOAD_QUESTIONNAIRE_SUCCESS
} from './constants';


export function loadQuestionnaire() {
  return {
    type: LOAD_QUESTIONNAIRE
  };
}

export function questionnaireLoaded(questionnaire) {
  return {
    type: LOAD_QUESTIONNAIRE_SUCCESS,
    questionnaire
  }
}