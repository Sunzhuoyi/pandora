/**
 * Created by sunzhuoyi on 2017/12/4.
 */
/*
（"原型"）面向对象风格*/
function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function () {
  return "I am" + this.me;
};
function Bar(who) {
  Foo.call(this,who);
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function () {
  alert("Hello," + this.identify() + '.');
};
var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();
/*console.log(b1.speak());
console.log(b2.speak());*/

//对象关联风格
Foo = {
  init:function (who) {
    this.me = who;
  },
  identify:function () {
    return "I am" + this.name
  }
};
Bar = Object.create(Foo);
Bar.speak = function () {
  alert("hello," + this.identify() + '.');
};
var b3 = Object.create(Bar);
b3.init("b3");
var b4 = Object.create(Bar);
b4.init("b4");
b1.speak();
b2.speak();
