// es7 语法 node不支持 webpack + babel
// es7更高的语法 都转化成es5
class Animal {
  static flag = '动物'
  name = 'domg' // 实例上的属性 并不是原型的属性
  // constructor() {
  //   this.name = 'dog'
  // }
  say() {
    console.log('say')
  }
}
// babel-cli 安装本地包 保证版本一致
// npm install @babel/cli 开发依赖 -D --dev
// npx node 5.2 版本以上提供的 帮我们执行.bin 目录下的文件
// npm i @babel/core -D babel的核心包 主要就是转化代码
// npm i @babel/preset-env -D (转化已定案的标准)
// babel的配置中 一般配置两个 配置插件 预设（插件的集合）
// npm i @babel/plugin-proposal-class-properties -D 主要的作用是用来转化类的属性的
/**
 * babel-presset-es2015 主要转化es6 这个包不需要了
 * babel-presset-stage-0 未定案的语法 装饰器 static xxx=1
 */