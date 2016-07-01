export default class BaseObject {
  constructor(ioSource = {}) {
    this.sId = (ioSource.sId || this.GetUniqueId());
  }

  GetUniqueId () {
    // ToDo: Return a unique ID.
  }
}