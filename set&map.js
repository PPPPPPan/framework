// set and map 是两种储存结构
let s = new Set([1, 2, 3, 4, 1, 2, 3, 4])
// console.log('s : >>>>>>>>>>>>>>>>', s)
// console.log('s : >>>>>>>>>>>>>>>>', [...s]) 
// console.log('s : >>>>>>>>>>>>>>>>', typeof s) 

let s01 = [1, 2, 3, 4, 5, 1, 2]
let s02 = [4, 5, 6, 7, 8, 5, 6]
// console.log([...new Set([...s1,...s2])]);

function intersection() {
  let s1 = new Set(s01);
  let s2 = new Set(s02);

  let arr = [...new Set(s1)].filter((item)=>{
    return new Set(s2).has(item)
  })

  return arr
}
console.log('intersection() : >>>>>>>>>>>>>>>>', intersection())

function diff() {
  let s1 = new Set(s01);
  let s2 = new Set(s02);

  let arr = [...new Set(s1)].filter((item)=>{
    return !new Set(s2).has(item)
  })

  return arr
}
console.log('diff() : >>>>>>>>>>>>>>>>', diff())

let m = new Map()
m.set('name','p123123n')
m.set('name','pan')

a = new WeakMap()
console.log('m : >>>>>>>>>>>>>>>>', a)