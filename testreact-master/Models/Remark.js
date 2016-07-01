import BaseObject from "./BaseObject";

class Remark extends BaseObject {
  constructor(ioSource = {}) {
    this.sRemark = (ioSource.sRemark || "");

    this.oQuestion = (ioSource.oQuestion || null);
  }
}