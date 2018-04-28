var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animal.prototype.call = function () {
        console.log("动物叫");
    };
    Animal.prototype.showInfo = function () {
        console.log("\u8BE5\u52A8\u7269\u7684\u540D\u5B57\u662F\uFF1A" + this.name + ";\u8BE5\u52A8\u7269\u662F\uFF1A" + this.type);
    };
    return Animal;
}(BaseObject));
__reflect(Animal.prototype, "Animal");
//# sourceMappingURL=Animal.js.map