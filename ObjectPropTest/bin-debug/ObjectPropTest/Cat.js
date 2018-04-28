var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Cat = (function (_super) {
    __extends(Cat, _super);
    // public static teshu2:number = 12;
    function Cat() {
        var _this = _super.call(this) || this;
        _this.age = 10;
        Cat.prototype.toString = _this.toString;
        return _this;
    }
    Cat.prototype.call = function () {
        console.log("喵叫");
    };
    Cat.prototype.showAge = function () {
        console.log("年龄：" + this.age);
    };
    Cat.teshuFun = function () {
        console.log(Cat.teshu);
    };
    //因为ts的原型继承的关系，这样子并没重写object的tostring方法
    Cat.prototype.toString = function () {
        return "重写了cat的tostring()";
    };
    return Cat;
}(Animal));
//静态字段，方法属性ts翻译后是作为该类对象的属性
Cat.teshu = 11;
__reflect(Cat.prototype, "Cat");
//# sourceMappingURL=Cat.js.map