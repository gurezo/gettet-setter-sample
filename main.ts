 class Child {
  private _item: string;

  constructor() {
    this._item = 'test';
  }

  get Item() {
    return this._item;
  }

  set item(value: string) {
    this._item = value;
  }
 }


 class Parent {
  child = new Child();
  constructor() {}

  sampleMethod() {
    console.log('this.child.Item', this.child.Item);
  }
 }