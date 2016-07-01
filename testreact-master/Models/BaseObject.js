class BaseObject extends BaseObject {
  constructor(ioSource = {}) {
    this.sId = (ioSource.sId || this.GetUniqueId());
  }

  GetUniqueId () {
    // ToDo: Return a unique ID.
  }
}