
import {
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR,
} from './constants';


export function loadQuestions() {
  return {
    type: LOAD_QUESTIONS,
  };
}

export function questionsLoaded(data) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    questions: data.oQuestionList,
  };
}

export function questionsLoadingError(error) {
  return {
    type: LOAD_QUESTIONS_ERROR,
    error,
  };
}
