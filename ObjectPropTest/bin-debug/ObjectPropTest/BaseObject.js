var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseObject = (function () {
    function BaseObject() {
    }
    BaseObject.prototype.registerObj = function () {
    };
    return BaseObject;
}());
__reflect(BaseObject.prototype, "BaseObject");
//# sourceMappingURL=BaseObject.js.map