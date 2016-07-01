import BaseObject from "./BaseObject";

class Question extends BaseObject {
  constructor(ioSource = {}) {
    this.iSequence = (ioSource.iSequence || "");
    this.sQuestion = (ioSource.sQuestion || "");
    this.sAnswer = (ioSource.sAnswer || "");
    this.bApproved = (ioSource.bApproved || false);

    this.oQuestionnaire = (ioSource.oQuestionnaire || null);
    this.oSection = (ioSource.oSection || null);
    this.oRemarkList = (ioSource.oRemarkList || null);
  }
}