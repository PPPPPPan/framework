// Object.defineProperty 不支持数组的更新 psuh slice
// 希望数据变化就能更新视图

function update() {
  console.log("更新视图")
}

let arr = [1, 2, 3]
// proxy 可以监控到 数组的变化 和 对象的变化
let proxy = new Proxy(arr, {
  set(target, key, val) {
    // 不要手动操作原数组 因为数组变化时 可能调用的是 push方法或pop方法
    if (key === "length") return true
    update()
    // Reflect.set() 赋值 会返回成功或失败 ture or false
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