
import {
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR,
  ADD_QUESTIONNAIRE,
  ADD_QUESTIONNAIRE_SUCCESS,
  ADD_QUESTIONNAIRE_ERROR,
} from './constants';


export function loadQuestions() {
  return {
    type: LOAD_QUESTIONS,
  };
}

export function questionsLoaded(questionnaires) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    questionnaires,
  };
}

export function questionsLoadingError(error) {
  return {
    type: LOAD_QUESTIONS_ERROR,
    error,
  };
}

export function addQuestionnaire() {
  return {
    type: ADD_QUESTIONNAIRE,
  };
}

export function addQuestionnaireSuccess(questionnaire) {
  return {
    type: ADD_QUESTIONNAIRE_SUCCESS,
    questionnaire,
  };
}

export function addQuestionnaireError(error) {
  return {
    type: ADD_QUESTIONNAIRE_ERROR,
    error,
  };
}
