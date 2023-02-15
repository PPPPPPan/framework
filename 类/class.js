// es6 类   es5 构造函数
// 1）了解构造函数的属性
/* function Animal(name) {
  // 属性 分为两种 实例上的属性 公有属性（原型上的属性）
  this.name = name
  this.arr = [1,2,3]
}
Animal.prototype.address = 'zoo'
let dog = new Animal('dog')
let cat = new Animal('cat') */
/* console.log('cat.arr === dog.arr  : >>>>>>>>>>>>>>>>', cat.arr === dog.arr )
console.log('cat.address === dog.address  : >>>>>>>>>>>>>>>>', cat.address === dog.address )
// 每一个实例都有一个__proto__指向其所属类的prototype
console.log('cat.__proto__ === Animal.prototype : >>>>>>>>>>>>>>>>', cat.__proto__ === Animal.prototype)
console.log('dog.constructor : >>>>>>>>>>>>>>>>', dog.constructor)
console.log('dog.constructor === Animal : >>>>>>>>>>>>>>>>', dog.constructor === Animal)
console.log('Animal.__proto__ === Animal.prototype : >>>>>>>>>>>>>>>>', Animal.__proto__ === Function.prototype)
console.log('dog.__proto__.__proto__ === Object.prototype : >>>>>>>>>>>>>>>>', dog.__proto__.__proto__ === Object.prototype) */

// 2）类的继承
function Animal(name) {
  // 属性 分为两种 实例上的属性 公有属性（原型上的属性）
  this.name = name
  this.eat = '吃肉'
}
Animal.prototype.address = 'zoo'

function Tiger(name) {
  this.name = name
  this.age = 10
  Animal.call(this, '老虎')
}
// 继承父类的公共属性或方法
// Tiger.prototype.__proto__ = Animal.prototype 等价于下面的方法
// Object.setPrototypeOf(Tiger.prototype, Animal.prototype) //es7
// Object.create es5的方法
// Object.create 的实现
/* function newCerate(parentPrototype) {
  let Fn = function Fn() {}
  Fn.prototype = parentPrototype // 当前函数的原型 只有父类的原型
  let fn = new Fn()
  fn.constructor = Tiger
  return fn // 当前实例可以拿到 animals.prototype
} */
// Tiger.prototype = newCerate(Animal.prototype)
/* Tiger.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Tiger
  }
})
 */

// Tiger.prototype = new Animal() //不能用 不能给父类传参
Tiger.prototype.say = () => {
  console.log('说话')
}

// 2-1) 继承父类是实例上的属性

let tiger = new Tiger('老虎')
tiger.say()
console.log('tiger : >>>>>>>>>>>>>>>>', tiger)
console.log('tiger : >>>>>>>>>>>>>>>>', tiger.eat)
console.log('tiger : >>>>>>>>>>>>>>>>', tiger.address)

// call + Object.create / call + setPrototypeOf