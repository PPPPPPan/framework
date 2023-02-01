// Object.defineProperty es5 

/* let obj = {}
let val = 'default'
// 不可枚举
Object.defineProperty(obj,'name',{
  // 可枚举
  enumerable:true,
  // 可配置的 能不能删除这个属性
  configurable:true,
  // 是否可以重写
  // writable:true,
  get(){
    return val
  },
  set(newVal){
    val = newVal
  }
})
// for(let key in obj){
//   console.log(key)
//   console.log(obj[key])
// }
// delete obj.name
console.log(obj.name);
obj.name = '1'
console.log(obj.name); */

function upDate() {
  console.log('更新视图')
}

let data = {
  name: 'pan',
  age: 18,
  address: {
    location: 'guangdong'
  }
}

function observer(obj) {
  if (typeof obj !== 'object') return obj
  for (let key in obj) {
    defineReactive(obj, key, obj[key])
  }
}

function defineReactive(obj, key, value) {
  observer(value)
  Object.defineProperty(obj, key, {
    get() {
      return value
    },
    set(val) {
      if (val !== value) {
        observer(val)
        upDate()
        value = val
      }
    }
  })
}
observer(data)
// data.name = 'test'
// data.address.location = 'beijing'
// data.address = {
//   location: 'beijing'
// }
// data.address.location = 'beijing'

data.address = [1, 2, 3]
// data.address[2] = [1, 2, 3]
// let methods = ['push', 'slice', 'pop', 'sort', 'reverse', 'unshift']
let methods = ['push', 'slice', 'sort', 'reverse', 'unshift'] //在vscode里，重写pop方法有问题，浏览器中则没有
// let methods = ['pop']
methods.forEach(method => {
  // 装饰器
  let oldMethod = Array.prototype[method]
  Array.prototype[method] = function () {
    upDate()
    oldMethod.call(this, ...arguments)
  }
})
// data.address.push(4)
// console.log('data : >>>>>>>>>>>>>>>>', data)
