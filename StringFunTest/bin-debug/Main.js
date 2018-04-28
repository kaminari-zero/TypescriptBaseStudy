var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        /**
         * string方法测试：
         */
        // StringFun.StringFunTest.StringBaseTest();
        // StringFun.StringFunTest.charAtTest();
        // // StringFun.StringFunTest.getAllChatTest();
        // StringFun.StringFunTest.fixedCharAtTest();
        // StringFun.StringFunTest2.replaceTest();
        // StringFun.StringFunTest2.fStrConvJsonTest();
        // console.log(StringFun.StringFunTest2.FConventCTest("100F"));
        // StringFun.StringFunTest2.searchTest();
        // StringFun.StringFunTest2.sliceTest();
        // StringFun.StringFunTest2.splitTest();
        // StringFun.StringFunTest2.substrTest();
        // StringFun.StringFunTest2.substringTest();
        // StringFun.StringFunTest2.valueOfTest();
        //Array的方法测试：
        // ArrayFun.ArrayFunTest.arrayBaseTest();
        // ArrayFun.ArrayFunTest.lengthTest();
        // ArrayFun.ArrayFunTest.Two_dimension_arrayTest();
        // ArrayFun.ArrayFunTest.isArrayTest();
        //下面的这些方法会改变调用它们的对象自身的值：
        // ArrayFun.ArrayFunTest.stringEeveryTest();
        // ArrayFun.ArrayMutatorFunTest.popTest();
        // ArrayFun.ArrayMutatorFunTest.pushTest();
        // ArrayFun.ArrayMutatorFunTest.reverseTest();
        // ArrayFun.ArrayMutatorFunTest.shiftTest();
        // ArrayFun.ArrayMutatorFunTest.sortTest();
        // ArrayFun.ArrayMutatorFunTest.spliceTest();
        // ArrayFun.ArrayMutatorFunTest.unshiftTest();
        //下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。
        // ArrayFun.ArrayAccessorFunTest.concatTest();
        // ArrayFun.ArrayAccessorFunTest.joinTest();
        // ArrayFun.ArrayAccessorFunTest.sliceTest();
        // ArrayFun.ArrayAccessorFunTest.toLocaleStringTest();
        // ArrayFun.ArrayAccessorFunTest.indexOfTest();
        // ArrayFun.ArrayAccessorFunTest.lastIndexOfTest();
        //Iteration 方法：
        // ArrayFun.ArrayIterationFunTest.forEachTest();
        // ArrayFun.ArrayIterationFunTest.CopyObjectTest();
        // ArrayFun.ArrayIterationFunTest.everyTest();
        // ArrayFun.ArrayIterationFunTest.someTest();
        // ArrayFun.ArrayIterationFunTest.filterTest();
        // ArrayFun.ArrayIterationFunTest.mapTest();
        // ArrayFun.ArrayIterationFunTest.mapExampleTest();
        // ArrayFun.ArrayIterationFunTest.reduceTest();
        // ArrayFun.ArrayIterationFunTest.reduceRightTest();
        //Arguments
        // ArgumentsTest.ArgumentsFunTest.argumentsBaseTest();
        // ArgumentsTest.ArgumentsFunTest.joinFunTest();
        // ArgumentsTest.ArgumentsFunTest.calleeTest();
        //list
        // let names = new ListExample.List();
        // names.append("Cynthia");
        // names.append("Raymond");
        // names.append("Barbara");
        // console.log(names.toString());
        // names.remove("Raymond");
        // console.log(names.toString());
        // names.forwardList();
        // names.backwardList();
        // names.clear();
        // console.log(names.toString());
        // console.log(names.pos);
        // names.append("test");
        // console.log(names.toString());
        //promise
        // PromiseExample.PromiseTest.promiseTest2();
        // PromiseExample.PromiseTest.promiseTest4();
        // PromiseExample.PromiseTest.promiseTest5();
        // PromiseExample.PromiseTest.promiseTest6();
        // PromiseExample.PromiseTest.awaitTest();
        // PromiseExample.PromiseTest.awaitTest2();
        // PromiseExample.PromiseTest.awaitTest3();
        // PromiseExample.PromiseTest.awaitTest4();
        // PromiseExample.PromiseTest.awaitTest6();
        // PromiseExample.PromiseTest2.promiseAllTest();
        // PromiseExample.PromiseTest2.promiseResolveTest();
        // PromiseExample.PromiseTest2.promiseResolveTest2();
        // PromiseExample.PromiseTest2.promiseRejectTest();
        // DecoratorExample.DecoratorTest.decoratorTest();
        // DecoratorExample.DecoratorTest.decoratorTest2();
        // DecoratorExample.DecoratorTest.testMethod();
        // DecoratorExample.DecoratorTest.MixinTest();
        // DecoratorExample.DecoratorTest.MixinTest2();
        // DecoratorExample.DecoratorTest2.ClassDecoratorTest();
        // DecoratorExample.DecoratorTest2.MethodDecoratorTest();
        // DecoratorExample.DecoratorTest2.MethodDecoratorTest2();
        // DecoratorExample.DecoratorTest2.AccessDecoratorTest();
        // DecoratorExample.DecoratorTest2.AccessDecoratorTest2();
        // DecoratorExample.DecoratorTest2.propertyDecoratorTest();
        // DecoratorExample.DecoratorTest2.metadataTest();
        // DecoratorExample.DecoratorTest2.parmsDecoratorTest2();
        // IteratorExample.IteratorTest.IteratorSimulateTest();
        IteratorExample.IteratorTest.IteratorSimulateTest2();
        return _this;
    }
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map