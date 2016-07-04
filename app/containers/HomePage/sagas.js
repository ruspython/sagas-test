/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUESTIONS } from 'containers/App/constants';
import { questionsLoaded, questionsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';
import GetTestData from '../../../testreact-master/TestData';


export function* getQuestions() {
  var data = GetTestData();
  yield put(questionsLoaded(data));
}

export function* getQuestionsWatcher() {
  while (yield take(LOAD_QUESTIONS)) {
    yield call(getQuestions);
  }
}

export function* questionsData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getQuestionsWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  questionsData,
];
