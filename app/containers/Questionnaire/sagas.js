import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUESTIONNAIRE } from 'containers/Questionnaire/constants';
import { questionnaireLoaded } from 'containers/Questionnaire/actions';
import { takeEvery, delay } from 'redux-saga'
import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';
import GetTestData from '../../../testreact-master/TestData';
import _ from 'lodash';


export function parseQuestionnaire(questions) {
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

export function* loadQuestionnaire() {
  var data = parseQuestionnaire(GetTestData().oQuestionList);
  yield delay(1000);
  yield put(questionnaireLoaded(data[0]));
}



export function* loadQuestionnaireWatcher() {
  while (yield take(LOAD_QUESTIONNAIRE)) {
    yield call(loadQuestionnaire);
  }
}

// Bootstrap sagas
export default [
  loadQuestionnaireWatcher
];
