var Child = /** @class */ (function () {
  function Child() {
    this._item = 'test';
  }
  Object.defineProperty(Child.prototype, "Item", {
    get: function () {
      return this._item;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Child.prototype, "item", {
    set: function (value) {
      this._item = value;
    },
    enumerable: false,
    configurable: true
  });
  return Child;
}());
var Parent = /** @class */ (function () {
  function Parent() {
    this.child = new Child();
  }
  Parent.prototype.sampleMethod = function () {
    console.log('this.child.Item', this.child.Item);
  };
  return Parent;
}());
