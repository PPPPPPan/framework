/**
 * 对应名称
 * - prototype : 原型（对象{}）
 * - __proto__ : 原型链（链接点 *内置对象{}*）
 * 
 * 从属关系
 * - prototype => 函数的一个属性（obj.prototype 普通对象 {}）
 * - __proto__ => 对象Object的一个属性（Object.__proto__  普通对象 {}）
 * - 实例对象的__proto__保存着该对象的构造函数的prototye
 */

function Test() {
  this.a = 1
}
console.log('Test : >>>>>>>>>>>>>>>>', Test.prototype)

Test.prototype.b = 3

let test = new Test()
console.log('test : >>>>>>>>>>>>>>>>', test.__proto__)
console.log('test.__proto__ === Test.prototype : >>>>>>>>>>>>>>>>', test.__proto__ === Test.prototype) // true

console.log(Test.prototype.__proto__ === Object.prototype) // true

console.log(Object.prototype.__proto__) // null

Object.prototype.c = 5

console.log(test)

/**
 *  test:{
 *    a:1,
 *    __proto__:Test.prototype = {
 *      b:3,
 *      __proto__:Object.prototype = {
 *        c:3
 *        X__proto__
 *      }
 *    }
 *  }
 */

// Function Object : 函数 对象
// Test => new Function
console.log(Test.__proto__ === Function.prototype)
// const Test = new Function
console.log('Function : >>>>>>>>>>>>>>>>', Function)
console.log('Function.__proto__ : >>>>>>>>>>>>>>>>', Function.__proto__)
console.log('Function.__proto__ === Function.prototype : >>>>>>>>>>>>>>>>', Function.__proto__ === Function.prototype)
// console.log('Function.prototype.__proto__ === Object.prototype : >>>>>>>>>>>>>>>>', Function.prototype.__proto__ === Object.prototype)

// const obj = {}
// const obj = new Object //function

console.log(typeof Object)
console.log(Object.__proto__ === Function.prototype)
console.log(Object.__proto__ === Function.__proto__)

console.log('test.hasOwnProperty : >>>>>>>>>>>>>>>>', test.hasOwnProperty('a'))
console.log('test.hasOwnProperty : >>>>>>>>>>>>>>>>', test.hasOwnProperty('b'))
console.log('test.hasOwnProperty : >>>>>>>>>>>>>>>>', test.hasOwnProperty('c'))
console.log('a' in test)
console.log('b' in test)
console.log('c' in test)
console.log("============================")
// constructor 就是实例对象的构造函数
console.log(test.constructor === Test)

function Test1() {
  this.a = 111
}

test.constructor = Test1
console.log(test)