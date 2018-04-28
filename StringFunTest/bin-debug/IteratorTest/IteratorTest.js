var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var IteratorExample;
(function (IteratorExample) {
    /**
     * Iterator（遍历器）:
     * 它是一种接口，为各种不同的数据结构提供统一的访问机制。
     * 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作
     * （即依次处理该数据结构的所有成员）。
     *
     * Iterator 的作用有三个：
     * 一是为各种数据结构，提供一个统一的、简便的访问接口；
     * 二是使得数据结构的成员能够按某种次序排列；
     * 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
     *
     * Iterator 的遍历过程:
     * （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
       （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
       （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
       （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
     *
     * 每一次调用next方法，都会返回数据结构的当前成员的信息。
     * 具体来说，就是返回一个包含value和done两个属性的对象。
     * 其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
     *
     *
     */
    var IteratorTest = (function () {
        function IteratorTest() {
        }
        IteratorTest.IteratorSimulateTest = function () {
            var it = makeIterator(['a', 'b']);
            console.log(it.next()); // { value: "a", done: false }
            console.log(it.next()); // { value: "b", done: false }
            console.log(it.next()); // { value: undefined, done: true }
            function makeIterator(array) {
                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < array.length ?
                            { value: array[nextIndex++], done: false } :
                            { value: undefined, done: true };
                    }
                };
            }
        };
        /**
         * 模拟遍历器
         */
        IteratorTest.IteratorSimulateTest2 = function () {
            var testIterator = (function () {
                function testIterator() {
                    this.index = 0;
                }
                testIterator.prototype.Symbol_Iterator = function () {
                    var _this = this;
                    return {
                        next: function () {
                            return { value: _this.index++, done: false };
                        }
                    };
                };
                return testIterator;
            }());
            var it = new testIterator();
            console.log(it.Symbol_Iterator().next());
            console.log(it.Symbol_Iterator().next());
            console.log(it.Symbol_Iterator().next());
        };
        return IteratorTest;
    }());
    IteratorExample.IteratorTest = IteratorTest;
    __reflect(IteratorTest.prototype, "IteratorExample.IteratorTest");
})(IteratorExample || (IteratorExample = {}));
//# sourceMappingURL=IteratorTest.js.map