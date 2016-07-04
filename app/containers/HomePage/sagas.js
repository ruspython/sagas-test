/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUESTIONS } from 'containers/App/constants';
import { questionsLoaded, questionsLoadingError } from 'containers/App/actions';
import { takeEvery, delay } from 'redux-saga'
import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';
import GetTestData from '../../../testreact-master/TestData';
import _ from 'lodash';

function parseQuestionnaire(questions) {
  var questionnaires = [],
    sections = [],
    subsections = [];
  questions.forEach(function (item) {
    var
      section = {},
      subsection = {};
    if (!_.find(sections, {name: item.oSection.sMainSection})) {
      section.name = item.oSection.sMainSection;
      sections.push(section);
    }

    if (!_.find(subsections, {name: item.oSection.sSubSection})) {
      subsection.name = item.oSection.sSubSection;
      subsection.questions = [];
      subsection.questions.push(item);
      subsections.push(subsection);
    } else {
      subsection = _.find(subsections, {name: item.oSection.sSubSection});
      subsection.questions.push(item);
    }

  });
  questionnaires.push({sections, subsections, questions});
  return questionnaires;
}

export function* getQuestions() {
  var data = parseQuestionnaire(GetTestData().oQuestionList);
  yield delay(1000);
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
