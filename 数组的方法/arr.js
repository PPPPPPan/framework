// 数组的方法 
// es5 => forEach reduce map filter some every
// es6 => find findIndex
// es7 => includes

// reduce 收敛 
/* 求和
let sum = [1, 2, 3, 4, 5].reduce((a, b) => {
  return a + b
},10)
console.log('sum : >>>>>>>>>>>>>>>>', sum) */

/* let sum = [{
  price: 100,
  count: 1
}, {
  price: 200,
  count: 2
}, {
  price: 300,
  count: 3
}, {
  price: 400,
  count: 4
}].reduce((a, b) => {
  return a + b.price * b.count
}, 0)
console.log('sum : >>>>>>>>>>>>>>>>', sum) */

// reduce常见的功能 多个数据 最终变成一个数据
/* let keys = ['name', 'age']
let values = ['tom', 17] // => { name:'tom',age:18 }
let obj = keys.reduce((memo, current, index) => (memo[current] = values[index], memo), {})
console.log('obj : >>>>>>>>>>>>>>>>', obj) */
// 在JavaScript中逗号运算符是先计算逗号前面的表达式，再计算逗号后面的表达式，最后将后面的结果得出返回

// 组合函数
/* function sum(...args) {
  return args.reduce((a, b) => {
    return a + b
  })
}

function toUpper(str) {
  return str.toUpperCase()
}

function add(str) {
  return "***" + str + "***"
}
// console.log(add(toUpper(sum('pan', 'lai'))))

// function compose(...fns) {
//   return function (...args) {
//     let lastFn = fns.pop()
//     return fns.reduceRight((value, nextFn) => {
//       return nextFn(value)
//     }, lastFn(...args))
//   }
// }
let composeRight = (...fns) => (...args) => fns.reduceRight((value, nextFn) => nextFn(value), fns.pop()(...args))

function compose(...fns) {
  return fns.reduce((a, b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}

let result = compose(add, toUpper, sum)('pan', 'lai', 'shijie')
console.log('result : >>>>>>>>>>>>>>>>', result) */
// redux compose方法