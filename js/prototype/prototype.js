
var anotherObject = {
  a:2
};
//创建一个关联到anotherOgject的对象
var myObject = Object.create(anotherObject);
console.log(myObject);

/*使用for...in遍历对象时原理和查找[[prototype]]链类型类似，任何可以通过原型链访问到的（并且是enumerable,可枚举的）属性都会被枚举*/

for (var k in myObject) {
  console.log("found:" + k);
}
/*使用in 操作符来检查属性在对象中是否存在时，同样会查找对象的整条原型链，无论属性是否可枚举*/

console.log("a" in myObject);

anotherObject = {
  set a (value) {
    this.a = value
  },
  a:2
};
anotherObject.a = 6;
console.log('anotherObject,'+ anotherObject.a);
console.log(anotherObject);
var myObjectTwo = Object.create(anotherObject);
myObjectTwo.a = 7;
console.log('myObjectTwo,'+ myObjectTwo.a);
console.log(myObjectTwo);
var myObjectThree = Object.create(anotherObject);
Object.defineProperty(myObjectThree,'a',{value:8});
console.log('defineProperty',myObjectThree);


/*
构造函数*/
function Foo() {

}
console.log(0,Foo);
var a = new Foo();
console.log(1,a);

var b = Object.create(Foo);
console.log(2,b);

console.log(3,Foo.prototype.constructor === Foo);
console.log(4,a.constructor === Foo);


function Bar() {

}
/*
 Es6之前需要抛弃默认的Bar.prototype
*/

Bar.prototype = Object.create(Foo.prototype);

/*
Es6之后可以直接修改现有的Bar.prototype
*/
Object.setPrototypeOf(Bar.prototype,Foo.prototype);


/*
检查类关系*/

a instanceof Foo; //true
Foo.prototype.isPrototypeOf(a);//true

