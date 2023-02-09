// map 映射
let mapR = [1, 2, 3].map((item) => item * 2)
console.log('mapR : >>>>>>>>>>>>>>>>', mapR)

// filter 过滤
let filterR = [1, 2, 3].filter((item) => item !== 2) // 删除为2的 返回true
console.log('filterR : >>>>>>>>>>>>>>>>', filterR)

// some 某个为true
let someR = [2, 2, 2].some((item) => item !== 2) // 是否有不为2的 有true立即返回
console.log('someR : >>>>>>>>>>>>>>>>', someR)

// every 每个为true
let everyR = [2, 2, 2].every((item) => item === 2) // 每一项是否为2的 有false立即返回
console.log('everyR : >>>>>>>>>>>>>>>>', everyR)

// find 是否存在 返回找到的那一项
let findR = [1, 3, 2].find((item) => item === 2) // 否存在 返回找到的第一项 找不到则返回undefined
console.log('findR : >>>>>>>>>>>>>>>>', findR)

// indexOf 是否存在 返回找到的那一项
let indexOfR = [1, 3, 2].indexOf(1) // 返回找到的第一个索引 找不到则返回-1
console.log('indexOfR : >>>>>>>>>>>>>>>>', indexOfR)

// includes 是否存在 返回找到的那一项
let includesR = [1, 3, 2].includes(4) // 返回布尔值
console.log('includesR : >>>>>>>>>>>>>>>>', includesR)