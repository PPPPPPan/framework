"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// es7 语法 node不支持 webpack + babel
// es7更高的语法 都转化成es5
var Animal = /*#__PURE__*/function () {
  function Animal() {
    _classCallCheck(this, Animal);
    _defineProperty(this, "name", 'domg');
  }
  _createClass(Animal, [{
    key: "say",
    value:
    // 实例上的属性 并不是原型的属性
    // constructor() {
    //   this.name = 'dog'
    // }
    function say() {
      console.log('say');
    }
  }]);
  return Animal;
}(); // babel-cli 安装本地包 保证版本一致
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
_defineProperty(Animal, "flag", '动物');
