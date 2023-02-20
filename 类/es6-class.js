class Animal {
  // static falg = 123 // es7写法 支持静态属性
  // es6 只支持静态方法
  static flag() {
    return 123
  }
  constructor(name) {
    this.name = name
    this.eat = '吃肉'
  }
  say() {
    // console.log(this) // es6 规范里 如果单独调用原型上的方法 this是不存在的
    console.log('say')
  }
}
// 类 不能当过函数
let animal = new Animal('name')


class Tiger extends Animal { // 继承了 实例 + 原型
  constructor(name) { // Animal.call(this)
    super(name)
  }
}

let tiger = new Tiger('123')
// tiger.say()
console.log('tiger : >>>>>>>>>>>>>>>>', tiger)
// console.log('tiger : >>>>>>>>>>>>>>>>', tiger.eat)
console.log(Tiger.flag()) // 静态方法可以被类继承，不会被实例继承