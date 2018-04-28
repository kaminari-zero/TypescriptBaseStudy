var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PromiseExample;
(function (PromiseExample) {
    var PromiseTest = (function () {
        function PromiseTest() {
        }
        PromiseTest.prototype.promiseTest = function () {
            /** 基本格式 */
            // var promise = new Promise(function(resolve, reject) {
            //     if (/* 异步操作成功 */){
            //         resolve(value);
            //     } else {
            //         reject(error);
            //     }
            // });
            // promise.then(function(value) {
            //     // success
            // }, function(value) {
            //     // failure
            // });
            /**
             * 基本的api
             * Promise.resolve()
                Promise.reject()
                Promise.prototype.then()
                Promise.prototype.catch()
                Promise.all() // 所有的完成： var p = Promise.all([p1,p2,p3]);
                Promise.race() // 竞速，完成一个即可
             */
        };
        /**
         * 对象的状态不受外界影响。Promise 对象代表一个异步操作，
         * 有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）
         *  和 Rejected（已失败）。
         */
        PromiseTest.promiseTest2 = function () {
            //一旦新建它就会立即执行，无法中途取消。
            var myFirstPromise = new Promise(function (resolve, reject) {
                //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
                //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
                setTimeout(function () {
                    resolve("成功!"); //代码正常执行！
                    //要调用了resolve才知道该异步已完成！！！若不调用，则永远都不会标记为完成，
                    //如果不完成该异步，就无法进行下面的then操作。
                }, 2500);
                //执行，等待上面的resolve执行后才进入then，resolve的参数还可以是Promise
                console.log("执行不？");
            });
            myFirstPromise.then(function (successMessage) {
                //successMessage的值是上面调用resolve(...)方法传入的值.
                //successMessage参数不一定非要是字符串类型，这里只是举个例子
                console.log("Yay! " + successMessage); //Yay! 成功!
            });
        };
        /**
         * 每个 Promise 都会提供一个 then() 函数，和一个 catch()（实际上是 then(null, ...) 函数）
         */
        PromiseTest.promiseTest3 = function () {
        };
        /**
         * 封装同步与异步代码：
         * ```
            new Promise(function (resolve, reject) {
                resolve(someValue);
            });
            ```
            写成

            ```
            Promise.resolve(someValue);
            ```
         */
        PromiseTest.promiseTest4 = function () {
            //该方法会立即执行，并且是完成的状态
            var myFirstPromise = Promise.resolve(function () {
                setTimeout(function () {
                    return "成功2";
                }, 2500);
            });
            myFirstPromise.then(function (successMessage) {
                console.log("Yay2! " + successMessage()); //Yay! 成功!
            });
        };
        /**
         * 捕获同步异常
         */
        PromiseTest.promiseTest5 = function () {
            new Promise(function (resolve, reject) {
                throw new Error('悲剧了，又出 bug 了');
            }).catch(function (err) {
                console.log(err);
                console.log("test?");
            });
        };
        /**
         * Promise.reject 同步代码块的异常执行
         */
        PromiseTest.promiseTest6 = function () {
            //同步代码块可写成：
            Promise.reject(new Error("什么鬼"))
                .catch(function (err) {
                console.log(err);
                console.log("是否执行catch？");
                //正常执行结束后，其同步块的状态为Resolved，则为成功的
            })
                .then(function (obj) {
                //若前面的正常执行成功，则执行该成功的同步块
                console.log(obj);
                console.log("是否执行then？");
            }, function (err) {
                //若前一个同步块发出rejected状态，则可以执行
                console.log(err);
                console.log("是否执行then 的 reject？");
            });
        };
        /**
         * 在es6中，
         * async 函数是什么？一句话，它就是 Generator 函数的语法糖。
         *
         * async的特点：
         * 1.内置执行器
         * 2.更好的语意：
         *  async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
         *  async和await，比起星号和yield，语义更清楚了。
         *  async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
         * 3.更广的适应性：
         *  async函数的await命令后面，可以是 Promise 对象和原始类型的值
         *  （数值、字符串和布尔值，但这时等同于同步操作）。
         * 4.返回值是Promise
         *  async函数的返回值是 Promise 对象，可以用then方法指定下一步的操作。
         *  async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，
         *  而await命令就是内部then命令的语法糖。
         *
         * 基本用法：
         *  async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
         * 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
         * （即可以作为await命令的参数：await promiseObj()）
         *
         * async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，
         * 才会发生状态改变，除非遇到return语句或者抛出错误。
         * 也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
         *
         */
        /**
         * await:
         * await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
         */
        PromiseTest.awaitTest = function () {
            function f() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, 123];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            f().then(function (v) { return console.log(v); });
        };
        /**
         * await命令后面的 Promise 对象如果变为reject状态，
         * 则reject的参数会被catch方法的回调函数接收到。
         *
         * 下面代码中，await语句前面没有return，
         * 但是reject方法的参数依然传入了catch方法的回调函数。
         * 这里如果在await前面加上return，效果是一样的。
         *
         * 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
         */
        PromiseTest.awaitTest2 = function () {
            function f() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.reject('出错了')];
                            case 1:
                                _a.sent();
                                // return await Promise.reject('出错了'); //前面出错了，后面return也不会执行
                                //其实就是报错throw错误出去，后面都不执行
                                return [4 /*yield*/, Promise.resolve('hello world')];
                            case 2:
                                // return await Promise.reject('出错了'); //前面出错了，后面return也不会执行
                                //其实就是报错throw错误出去，后面都不执行
                                _a.sent(); // 不会执行
                                return [2 /*return*/];
                        }
                    });
                });
            }
            f()
                .then(function (v) { return console.log(v); }, function (e) { return console.log(e); })
                .catch(function (e) { return console.log(e); });
            // 出错了
        };
        /**
         * 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。
         * 这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，
         * 第二个await都会执行。
         *
         * 另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
         */
        PromiseTest.awaitTest3 = function () {
            //第一种方式：
            function f() {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, Promise.reject('出错了')];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                return [3 /*break*/, 3];
                            case 3: return [4 /*yield*/, Promise.resolve('hello world')];
                            case 4: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            f()
                .then(function (v) { return console.log(v); }); // hello world
            //第二种方式：
            function f2() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.reject('出错了')
                                    .catch(function (e) { return console.log(e); })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, Promise.resolve('hello world2')];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            f2()
                .then(function (v) { return console.log(v); });
            // 出错了
            // hello world2
        };
        /**
         * 错误处理：
         * 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。
         *
         * 防止出错的方法，也是将其放在try...catch代码块之中。
         * （如果有多个await命令，也可以统一放在try...catch结构中。）
         */
        PromiseTest.awaitTest4 = function () {
            function f() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    throw new Error('出错了');
                                })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
            f()
                .then(function (v) { return console.log(v); })
                .catch(function (e) { return console.log(e); });
            // Error：出错了
        };
        /**
         * 总结使用的注意点：
         * 第一点：
         *  await命令后面的Promise对象，运行结果可能是rejected，
         * 所以最好把await命令放在try...catch代码块中。（或者后面跟catch方法）
         * 第二点：
         *  多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
         * 第三点：
         *  await命令只能用在async函数之中，如果用在普通函数，就会报错。
         * （目前，@std/esm模块加载器支持顶层await，即await命令可以不放在 async 函数里面，
         * 直接使用。但是es5模式编译的ts是不支持的（旧式的promise库也不支持）！）
         */
        PromiseTest.awaitTest5 = function () {
            //==========以下示例测不出理想结果，不做参考===========
            var count = 0;
            function getFoo() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // for(let i=0;i<20000;i++){
                        //     console.log("foo"+count++);
                        // }
                        // setInterval(()=>{
                        //     console.log("foo"+count++);
                        // },2000);
                        console.log("getFoo");
                        return [2 /*return*/];
                    });
                });
            }
            function getBar() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // for(let i=0;i<20000;i++){
                        //     console.log("bar"+count++);
                        // }
                        // setInterval(()=>{
                        //     console.log("bar"+count++);
                        // },1000);
                        console.log("getBar");
                        return [2 /*return*/];
                    });
                });
            }
            function asyncFunction() {
                return __awaiter(this, void 0, void 0, function () {
                    var fooPromise, barPromise, foo, bar;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                fooPromise = getFoo();
                                barPromise = getBar();
                                return [4 /*yield*/, fooPromise];
                            case 1:
                                foo = _a.sent();
                                return [4 /*yield*/, barPromise];
                            case 2:
                                bar = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
            asyncFunction();
        };
        /**
         * 如果确实希望多个请求并发执行，可以使用Promise.all方法。
         * 当三个请求都会resolved时，下面两种写法效果相同。
         */
        PromiseTest.awaitTest6 = function () {
            function dbFuc(db) {
                return __awaiter(this, void 0, void 0, function () {
                    var docs, promises, results;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                docs = [{}, {}, {}];
                                promises = docs.map(function (doc) { return db.post(doc); });
                                return [4 /*yield*/, Promise.all(promises)];
                            case 1:
                                results = _a.sent();
                                console.log(results);
                                return [2 /*return*/];
                        }
                    });
                });
            }
            //===========等同于=========
            function dbFuc2(db) {
                return __awaiter(this, void 0, void 0, function () {
                    var docs, promises, results, _i, promises_1, promise, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                docs = [{}, {}, {}];
                                promises = docs.map(function (doc) { return db.post(doc); });
                                results = [];
                                _i = 0, promises_1 = promises;
                                _c.label = 1;
                            case 1:
                                if (!(_i < promises_1.length)) return [3 /*break*/, 4];
                                promise = promises_1[_i];
                                _b = (_a = results).push;
                                return [4 /*yield*/, promise];
                            case 2:
                                _b.apply(_a, [_c.sent()]);
                                _c.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 1];
                            case 4:
                                console.log(results);
                                return [2 /*return*/];
                        }
                    });
                });
            }
        };
        PromiseTest.promiseAnimationTest = function () {
            function chainAnimationsPromise(elem, animations) {
                // 变量ret用来保存上一个动画的返回值
                var ret = null;
                // 新建一个空的Promise
                var p = Promise.resolve();
                var _loop_1 = function (anim) {
                    p = p.then(function (val) {
                        ret = val;
                        return anim(elem);
                    });
                };
                // 使用then方法，添加所有动画
                for (var _i = 0, animations_1 = animations; _i < animations_1.length; _i++) {
                    var anim = animations_1[_i];
                    _loop_1(anim);
                }
                // 返回一个部署了错误捕捉机制的Promise
                return p.catch(function (e) {
                    /* 忽略错误，继续执行 */
                }).then(function () {
                    return ret;
                });
            }
        };
        return PromiseTest;
    }());
    PromiseExample.PromiseTest = PromiseTest;
    __reflect(PromiseTest.prototype, "PromiseExample.PromiseTest");
})(PromiseExample || (PromiseExample = {}));
//# sourceMappingURL=PromiseTest.js.map