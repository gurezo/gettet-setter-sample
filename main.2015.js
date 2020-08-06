class Child {
  constructor() {
    this._item = 'test';
  }
  get Item() {
    return this._item;
  }
  set item(value) {
    this._item = value;
  }
}
class Parent {
  constructor() {
    this.child = new Child();
  }
  sampleMethod() {
    console.log('this.child.Item', this.child.Item);
  }
}
