var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PromiseExample;
(function (PromiseExample) {
    var PromiseTest2 = (function () {
        function PromiseTest2() {
        }
        /**
         * Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
         *
         * 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
         * 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
         * Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
         *
         * Promise对象有以下两个特点。
         * （1）对象的状态不受外界影响。
         * （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。
         */
        /**
         * Promise.all()
         * Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
         *
         * 示例：const p = Promise.all([p1, p2, p3]);
         *
         * Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，
         * 且返回的每个成员都是 Promise 实例。
         *
         * p的状态由p1、p2、p3决定，分成两种情况:
         * （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，
         * 此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
         * （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，
         * 此时第一个被reject的实例的返回值，会传递给p的回调函数。
         *
         * 注意，如果作为参数的 Promise 实例，自己定义了catch方法，
         * 那么它一旦被rejected，并不会触发Promise.all()的catch方法。
         */
        PromiseTest2.promiseAllTest = function () {
            var p1 = new Promise(function (resolve, reject) {
                resolve('hello');
            })
                .then(function (result) { return result; })
                .catch(function (e) { return e; });
            var p2 = new Promise(function (resolve, reject) {
                throw new Error('报错了');
            })
                .then(function (result) { return result; })
                .catch(function (e) { return e; });
            Promise.all([p1, p2])
                .then(function (result) { return console.log(result); })
                .catch(function (e) { return console.log(e); });
            // ["hello", Error: 报错了]
        };
        /**
         * Promise.race()
         * Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
         *
         * 示例：const p = Promise.race([p1, p2, p3]);
         *
         * 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
         * 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
         *
         */
        /**
         * Promise.resolve()
         * 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
         *
         * Promise.resolve等价于下面的写法：
         * Promise.resolve('foo')
         * // 等价于
         * new Promise(resolve => resolve('foo'))
         *
         * Promise.resolve方法的参数分成四种情况：
         * （1）参数是一个 Promise 实例：
         *  如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
         * （2）参数是一个thenable对象：
         * （3）参数不是具有then方法的对象，或根本就不是对象
         *  如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回
         * 一个新的 Promise 对象，状态为resolved。
         * （4）不带有任何参数
         *  Promise.resolve方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
         */
        PromiseTest2.promiseResolveTest = function () {
            //(2)
            //thenable对象指的是具有then方法的对象，比如下面这个对象。
            var thenable = {
                then: function (resolve, reject) {
                    resolve(42);
                }
            };
            //Promise.resolve方法会将这个对象转为 Promise 对象，
            //然后就立即执行thenable对象的then方法。
            var p1 = Promise.resolve(thenable);
            p1.then(function (value) {
                console.log(value); // 42
            });
            //(3)
            /**
             * 上面代码生成一个新的 Promise 对象的实例p。由于字符串Hello不属于异步操作
             * （判断方法是字符串对象不具有 then 方法），
             * 返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。
             * Promise.resolve方法的参数，会同时传给回调函数。
             */
            var p = Promise.resolve('Hello');
            p.then(function (s) {
                console.log(s);
            });
            // Hello
            //（4）
            //如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve方法。
            var p2 = Promise.resolve(); //直接获得一个pormise对象
            p2.then(function () {
                // ...
            });
        };
        /**
         * 需要注意的是，立即resolve的 Promise 对象，
         * 是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
         */
        PromiseTest2.promiseResolveTest2 = function () {
            setTimeout(function () {
                console.log('three');
            }, 0);
            Promise.resolve().then(function () {
                console.log('two');
            });
            console.log('one');
            // one
            // two
            // three
        };
        /**
         * Promise.reject()
         * Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
         */
        PromiseTest2.promiseRejectTest = function () {
            var p = Promise.reject('出错了');
            // 等同于
            // const p = new Promise((resolve, reject) => reject('出错了'))
            p.then(null, function (s) {
                console.log(s);
            });
            // 出错了
            //注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，
            //变成后续方法的参数。这一点与Promise.resolve方法不一致。
            var thenable = {
                then: function (resolve, reject) {
                    reject('出错了');
                }
            };
            Promise.reject(thenable)
                .catch(function (e) {
                console.log(e);
                console.log(e === thenable);
            });
            // true
        };
        return PromiseTest2;
    }());
    PromiseExample.PromiseTest2 = PromiseTest2;
    __reflect(PromiseTest2.prototype, "PromiseExample.PromiseTest2");
})(PromiseExample || (PromiseExample = {}));
//# sourceMappingURL=PromiseTest2.js.map