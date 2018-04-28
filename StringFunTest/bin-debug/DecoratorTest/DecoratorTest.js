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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DecoratorExample;
(function (DecoratorExample) {
    /** 修饰器 */
    var DecoratorTest = (function () {
        function DecoratorTest() {
        }
        /**
         * 类的修饰：
         */
        DecoratorTest.decoratorTest = function () {
            //添加静态属性
            console.log(MyTestableClass["isTestable"]); // true
            //添加实例属性
            console.log(new MyTestableClass()["isTestable2"]);
            //mixins 混入fun方法
            new MyTestableClass()["fun"]();
        };
        /**
         * 添加静态属性
         * 注：如果我们想自定义装饰器是如何作用于声明的，我们得写一个装饰器工厂函数。
         * 装饰器工厂就是一个简单的函数，它返回一个表达式，以供装饰器在运行时调用。
         */
        DecoratorTest.testable = function (isTestable) {
            return function (target) {
                target.isTestable = isTestable;
            };
        };
        /**
         * 添加实例属性
         */
        DecoratorTest.testable2 = function (target) {
            target.prototype.isTestable2 = true;
        };
        /**
         * Mixin:
         * 在修饰器的基础上，可以实现Mixin模式。所谓Mixin模式，
         * 就是对象继承的一种替代方案，中文译为“混入”（mix in），
         * 意为在一个对象之中混入另外一个对象的方法。
         */
        /**
         * 实现mixins：
         * 通过修饰器mixins，把Foo类的方法添加到了MyClass的实例上面
         */
        DecoratorTest.mixins = function () {
            var list = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                list[_i] = arguments[_i];
            }
            //Object.assign的polyfill：
            if (typeof Object["assign"] != 'function') {
                // Must be writable: true, enumerable: false, configurable: true
                Object.defineProperty(Object, "assign", {
                    value: function assign(target, varArgs) {
                        'use strict';
                        if (target == null) {
                            throw new TypeError('Cannot convert undefined or null to object');
                        }
                        var to = Object(target);
                        for (var index = 1; index < arguments.length; index++) {
                            var nextSource = arguments[index];
                            if (nextSource != null) {
                                for (var nextKey in nextSource) {
                                    // Avoid bugs when hasOwnProperty is shadowed
                                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                        to[nextKey] = nextSource[nextKey];
                                    }
                                }
                            }
                        }
                        return to;
                    },
                    writable: true,
                    configurable: true
                });
            }
            return function (target) {
                //Object.assign : es2015
                Object["assign"].apply(Object, [target.prototype].concat(list));
            };
        };
        /**
         * MyMixin是一个混入类生成器，接受superclass作为参数，
         * 然后返回一个继承superclass的子类，该子类包含一个foo方法。
         */
        DecoratorTest.MixinTest = function () {
            // class MyClass extends MyBaseClass {
            //     /* ... */
            // }
            /**
             * MyMixin是一个混入类生成器，接受superclass作为参数，
             * 然后返回一个继承Person(superclass)的子类，该子类包含一个foo方法。
             */
            var Superclass = (function () {
                function Superclass() {
                    this.testAAA = 111;
                }
                return Superclass;
            }());
            /**
             * es6的特性：
             * 1.class能用作表达式或语句，当作为表达式时，它每次赋值时返回一个新的class，
             * 有点类似工厂；
             * 2.extends能够接受任何返回类或构造器的表达式。
             * 注意这里extends很特殊，它后面不是一个固定的标识
             * （不同于Java等语言里面extends），extends 后面可以是任意表达式。
             */
            //let MyMixin = (superclass) => class extends superclass
            //因为现在是es5，无法实现后面自由跟表达式（也有可能是ts的编译限制）
            //以下的混入并没有正常执行混入。
            var MyMixin = function (superclass) { return (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                class_1.prototype.foo = function () {
                    console.log('foo from MyMixin');
                };
                return class_1;
            }(Superclass)); };
            var MyBaseClass = (function () {
                function MyBaseClass() {
                    this.testBBB = 222;
                }
                return MyBaseClass;
            }());
            /** 接着，目标类再去继承这个混入类，就达到了“混入”foo方法的目的。 */
            var MyClass = (function (_super) {
                __extends(MyClass, _super);
                function MyClass() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MyClass;
            }(MyMixin(MyBaseClass)));
            var c = new MyClass();
            c.foo(); // "foo from MyMixin"
            console.log(c.testAAA);
            console.log(c);
        };
        DecoratorTest.MixinTest2 = function () {
            function mixin(source, target) {
                for (var prop in source) {
                    if (source.hasOwnProperty(prop)) {
                        target[prop] = source[prop];
                    }
                }
            }
            var MyMixin = (function () {
                function MyMixin() {
                    this.testBBB = 222;
                }
                MyMixin.prototype.foo = function () {
                    console.log('foo from MyMixin');
                };
                return MyMixin;
            }());
            var MyClass = (function () {
                function MyClass() {
                }
                return MyClass;
            }());
            console.log(MyClass.prototype);
            mixin(MyMixin, MyClass.prototype);
            var c = new MyClass();
            c["foo"](); // 报错，目前太弱，还是不懂
            console.log(c["testBBB"]);
        };
        /**
         * 方法的修饰：
         */
        DecoratorTest.decoratorTest2 = function () {
            console.log(new Person().name());
            for (var i in new Person) {
                console.log("key=" + i + ";value=" + Person[i]);
            }
            new Person().add(1, 1);
            //外层修饰器@dec(1)先进入，但是内层修饰器@dec(2)先执行。
            new Person().method();
            new Person().test();
            // console.log(window["testAAA"]);
            // window["tttt"]();          
        };
        /**
         * 修改属性描述对象的enumerable属性，使得该属性不可遍历。
         */
        DecoratorTest.nonenumerable = function (target, name, descriptor) {
            descriptor.enumerable = false;
            return descriptor;
        };
        /**
         * @log修饰器，可以起到输出日志的作用。
         * @log修饰器的作用就是在执行原始的操作之前，执行一次console.log，
         * 从而达到输出日志的目的。
         */
        DecoratorTest.log = function (target, name, descriptor) {
            var oldValue = descriptor.value;
            //如果想要一个方法执行时才执行某些方法，其装饰器的写法如下，在最后
            descriptor.value = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                console.log("...arg:", arg);
                console.log("Calling \"" + name + "\" with", arguments);
                return oldValue.apply(null, arguments);
            };
            return descriptor;
        };
        /**
         * 如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。
         */
        DecoratorTest.dec = function (id) {
            console.log('evaluated', id); //先从外向内进入
            return function (target, property, descriptor) { return console.log('executed', id); };
            //返回，从内往外执行
            //结果：
            // evaluated 1
            // evaluated 2
            // executed 2
            // executed 1
        };
        /** 高阶函数 */
        DecoratorTest.testMethod = function () {
            function doSomething(name) {
                console.log('Hello, ' + name);
            }
            function loggingDecorator(wrapped) {
                return function () {
                    var arg = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        arg[_i] = arguments[_i];
                    }
                    console.log('Starting');
                    var result = wrapped.apply(this, arguments);
                    console.log('Finished');
                    return result;
                };
            }
            var wrapped = loggingDecorator(doSomething);
            wrapped("神奇");
        };
        return DecoratorTest;
    }());
    DecoratorExample.DecoratorTest = DecoratorTest;
    __reflect(DecoratorTest.prototype, "DecoratorExample.DecoratorTest");
    /**
     * @testable就是一个修饰器。它修改了MyTestableClass这个类的行为，
     * 为它加上了静态属性isTestable。testable函数的参数target是MyTestableClass类本身。
     *
     * 基本上，修饰器的行为就是下面这样：
     * @decorator
        class A {}

        // 等同于

        class A {}
        A = decorator(A) || A;
     * 也就是说，修饰器是一个对类进行处理的函数。
     *
     * 如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。
     * (注：即当多个修饰器同时存在时，离目标越近，越先执行.)
     *
     * 注意，修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。
     * 这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数。
     *
     * 如果想添加实例属性，可以通过目标类的prototype对象操作。
     */
    var MyTestableClass = (function () {
        function MyTestableClass() {
        }
        MyTestableClass = __decorate([
            DecoratorExample.DecoratorTest.mixins({ fun: function () { console.log("foo"); } }),
            DecoratorExample.DecoratorTest.testable2,
            DecoratorExample.DecoratorTest.testable(false),
            testable
        ], MyTestableClass);
        return MyTestableClass;
    }());
    __reflect(MyTestableClass.prototype, "MyTestableClass");
    function testable(target) {
        // console.log(target);
        target["isTestable"] = true;
    }
    var Person = (function () {
        function Person() {
            //因为ts默认方法内变量使用public声明，是作为类的属性存在
            this.testAAA = 3;
            //ts的类内不能直接使用function来声明方法
            // function tttt(){
            //     console.log("123456");     
            // }
        }
        /**
         * 此时，修饰器函数一共可以接受三个参数:
         * 第一个参数是所要修饰的目标对象，即类的实例
         * （这不同于类的修饰，那种情况时target参数指的是类本身）；
         * 第二个参数是所要修饰的属性名，
         * 第三个参数是该属性的描述对象。
         */
        Person.prototype.name = function () { return this["first"] + " " + this["last"]; };
        Object.defineProperty(Person.prototype, "kidCount", {
            get: function () { return 10; },
            enumerable: true,
            configurable: true
        });
        Person.prototype.add = function (a, b) {
            return a + b;
        };
        Person.prototype.method = function () { };
        Person.prototype.test = function () {
            //内部的方法有名字应该是声明了的吧
            function tttt() {
                console.log("123456");
                //所有不使用var定义的变量都视为全局变量,但是ts貌似已经禁止不声明赋值
                // testB = 4;          
            }
        };
        __decorate([
            readonly
        ], Person.prototype, "name", null);
        __decorate([
            DecoratorExample.DecoratorTest.nonenumerable
        ], Person.prototype, "kidCount", null);
        __decorate([
            DecoratorExample.DecoratorTest.log
        ], Person.prototype, "add", null);
        __decorate([
            DecoratorExample.DecoratorTest.dec(1),
            DecoratorExample.DecoratorTest.dec(2)
        ], Person.prototype, "method", null);
        return Person;
    }());
    __reflect(Person.prototype, "Person");
    /**
     * 修饰器readonly用来修饰“类”的name方法
     * readonly(Person.prototype, 'name', descriptor);
       // 类似于
       Object.defineProperty(Person.prototype, 'name', descriptor);
     */
    function readonly(target, name, descriptor) {
        // descriptor对象原来的值如下
        // {
        //   value: specifiedFunction,
        //   enumerable: false,
        //   configurable: true,
        //   writable: true
        // };
        //给类的实例增加一个first属性：
        target.first = "first";
        descriptor.writable = false;
        return descriptor;
    }
    /**
     * 修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
     * 类是不会提升的，所以就没有这方面的问题。
     * 另一方面，如果一定要修饰函数，可以采用高阶函数的形式直接执行。
     * (注：作为表达式调用时，无法解析方法装饰器的签名。提供的参数不匹配目标的参数签名。)
     */
})(DecoratorExample || (DecoratorExample = {}));
//# sourceMappingURL=DecoratorTest.js.map