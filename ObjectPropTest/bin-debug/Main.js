var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        ObjectProp.ObjectPorpTest.hasOwnPropertyTest();
        ObjectProp.ObjectPorpTest.getOwnPropertyNamesTest();
        ObjectProp.ObjectPorpTest.egretClassFunTest(new Cat());
        ObjectProp.ObjectPorpTest.getClassNameTest(new Cat());
        ObjectProp.ObjectPorpTest.getClassTypeTest(new Cat());
        // ObjectProp.ObjectPorpTest.getPrototypeTest(new Cat());
        ObjectProp.ObjectPorpTest.getConstructorTest(new Cat());
        ObjectProp.ObjectPorpTest.getOwnPropertyDescriptorTest();
        ObjectProp.ObjectPorpTest.useInTest();
        ObjectProp.ObjectPorpTest.toStringTypeTest();
        return _this;
    }
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map