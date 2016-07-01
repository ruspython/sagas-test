import BaseObject from "./BaseObject";

export default class Questionnaire extends BaseObject {
  constructor(ioSource = {}) {
    super(ioSource);
    this.oQuestionList = (ioSource.oQuestionList || []);
  }

  AddQuestion (question) {
    this.oQuestionList.push(question)
  }
}