function deepClone(obj,hash = new WeakMap()) {
  // 判断是null还是undefined
  if (obj == null) return obj
  // 不是对象不拷贝
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj !== 'object') return obj
  if(hash.has(obj)) return hash.get(obj)
  // 要么是数组 要么是对象
  let cloneObj = new obj.constructor()
  hash.set(obj,cloneObj)
  console.log('hash : >>>>>>>>>>>>>>>>', hash)
  for (let key in obj) {
    if(obj.hasOwnProperty(key)){
      cloneObj[key] = deepClone(obj[key],hash)
    }
  }
  return cloneObj
}

// let testObj ={ a: { test: 1 }, b: [2], c: 3,d:{deep:1} }
let testObj ={ a: { test: 1 }}
testObj.xxx = testObj

console.log('deepClone() : >>>>>>>>>>>>>>>>', deepClone(testObj))
