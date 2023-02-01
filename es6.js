// Object.defineProperty 不支持数组的更新 psuh slice
// 希望数据变化就能更新视图

let arr = [1, 2, 3]
let proxy = new Proxy(arr, {
  set(target, key, val) {
    return Reflect.set(target, key, val)
  },
  get(target, key) {
    return Reflect.get(target, key)
  }
})
proxy[0] = 4
console.log('proxy : >>>>>>>>>>>>>>>>', proxy[0])
console.log('proxy : >>>>>>>>>>>>>>>>', proxy[5])
console.log('proxy : >>>>>>>>>>>>>>>>', proxy.length)