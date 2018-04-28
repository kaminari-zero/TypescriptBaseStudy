// import "reflect-metadata";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DecoratorExample;
(function (DecoratorExample) {
    /** 修饰器 */
    var DecoratorTest2 = (function () {
        function DecoratorTest2() {
        }
        /**
         * 类装饰器
         * 类装饰器在类声明之前被声明（紧贴着类声明）。
         * 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
         * 类装饰器不能用在声明文件中(.d.ts)，也不能用在任何外部上下文中（比如declare的类）。
         *
         * 参数：
         * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
         *
         * 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
         *
         * 注意 :如果你要返回一个新的构造函数，你必须注意处理好原来的原型链。
         * 在运行时的装饰器调用逻辑中不会为你做这些。
         */
        DecoratorTest2.ClassDecoratorTest = function () {
            //当@sealed被执行的时候，它为锁定构造函数和它的原型。
            var Greeter = (function () {
                function Greeter(message) {
                    this.greeting = message;
                }
                Greeter.prototype.greet = function () {
                    return "Hello, " + this.greeting;
                };
                Greeter.testaaa = "tsetaaa";
                Greeter = __decorate([
                    sealed
                ], Greeter);
                return Greeter;
            }());
            //参数时构造器
            function sealed(constructor) {
                // console.log(constructor);
                // console.log(constructor.prototype);
                Object.seal(constructor);
                Object.seal(constructor.prototype);
            }
            "use strict"; //这里标志的严格模式启动不了？？？
            var greeter = new Greeter("test");
            greeter["fff"] = "fffffff";
            console.log(greeter["fff"]);
            delete greeter["fff"];
            console.log("isSealed", greeter, Object.isSealed(Greeter), greeter["__proto__"]);
            //seal 密封对象后，对原有类是不能修改，但对其生成对象依然能修改其自身，但不能修改其类
            // Object.defineProperty(Greeter, "greeting", { get: function() { return "g"; } }); // 抛出TypeError异常
            // Object.defineProperty(greeter, "greeting", { get: function() { return "g"; } }); 
            Greeter["aaaaa"] = "aaaaaaa"; //静默失败,新属性没有成功添加
            console.log(Greeter["aaaaa"]);
            console.log(Greeter["testaaa"]);
            delete Greeter.testaaa; //静默失败,属性没有删除成功
            console.log(Greeter["testaaa"]);
        };
        /**
         * 方法装饰器
         * 方法装饰器声明在一个方法的声明之前（紧贴着方法声明）。
         * 它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
         * 方法装饰器不能用在声明文件(.d.ts)，重载或者任何外部上下文（比如declare的类）中。
         *
         * 参数：
         * 方法装饰器表达式会在运行时当作函数被调用，传入下在3个参数：
         *  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
         *  2.成员的名字。
         *  3.成员的属性描述符。
         *
         * 如果方法装饰器返回一个值，它会被用作方法的属性描述符。
         */
        DecoratorTest2.MethodDecoratorTest = function () {
            var Greeter = (function () {
                function Greeter(message) {
                    this.greeting = message;
                }
                Greeter.prototype.greet = function () {
                    return "Hello, " + this.greeting;
                };
                __decorate([
                    enumerable(false)
                ], Greeter.prototype, "greet", null);
                return Greeter;
            }());
            //当装饰器@enumerable(false)被调用时，它会修改属性描述符的enumerable属性。
            function enumerable(value) {
                return function (target, propertyKey, descriptor) {
                    descriptor.enumerable = value;
                    //都能设置
                    // descriptor.configurable = value;
                    // descriptor.value = 1111;
                    // descriptor.writable = value;
                };
            }
            for (var i in new Greeter("")) {
                console.log("key=" + i + ";value=" + Greeter[i]);
            }
        };
        /**
         * 访问符装饰器
         * 访问符装饰器声明在一个访问符的声明之前（紧贴着访问符声明）。
         * 访问符装饰器应用于访问符的属性描述符并且可以用来监视，修改或替换一个访问符的定义。
         * 访问符装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如declare的类）里。
         *
         * 注意：注意  TypeScript不允许同时装饰一个成员的get和set访问符。
         * 而且，一个成员的所有装饰器会以出现在顺序被应用在第一个访问符上。
         * 因为装饰器应用于一个属性描述符，它联合了get和set访问符，而不是分开声明的。
         * （而且必须是先声明的那个。）
         *
         * 访问符装饰器表达式会在运行时当作函数被调用，传入下在3个参数：
         *  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
         *  2.成员的名字。
         *  3.成员的属性描述符。
         *
         * 如果访问符装饰器返回一个值，它会被用作方法的属性描述符。
         */
        DecoratorTest2.AccessDecoratorTest = function () {
            var Point = (function () {
                function Point(x, y) {
                    this._x = x;
                    this._y = y;
                }
                Object.defineProperty(Point.prototype, "x", {
                    get: function () { return this._x; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Point.prototype, "y", {
                    get: function () { return this._y; },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    configurable(false)
                ], Point.prototype, "x", null);
                __decorate([
                    configurable(false)
                ], Point.prototype, "y", null);
                return Point;
            }());
            function configurable(value) {
                return function (target, propertyKey, descriptor) {
                    //configurable,enumerable能设置
                    descriptor.configurable = value;
                    // descriptor.enumerable = value;
                    //value，writable不能设置
                    // descriptor.value = 1111;
                    // descriptor.writable = value;
                };
            }
            // Object.defineProperty(person,'name',{
            //     configurable:false,//能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
            //     enumerable:false,//对象属性是否可通过for-in循环，flase为不可循环，默认值为true
            //     writable:false,//对象属性是否可修改,flase为不可修改，默认值为true
            //     value:'xiaoming' //对象属性的默认值，默认值为undefined
            // });
            var point = new Point(10, 10);
            console.log(point.x);
            point["_x"] = 1;
            console.log(point.x);
        };
        /**
         * 属性装饰器
         * 属性装饰器声明在一个属性声明之前（紧贴着属性声明）。
         * 属性装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如declare的类）里。
         *
         * 属性装饰器表达式会在运行时当作函数被调用，传入下在2个参数：
         *  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
         *  2.成员的名字。
         *
         * 注意：属性描述符不会做为参数传入属性装饰器，这与TypeScript是如何初始化属性装饰器的有关。
         * 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，
         * 并且没办法监视或修改一个属性的初始化方法。
         * 因此，属性描述符只能用来监视类中是否声明了某个名字的属性。
         *
         * 如果属性装饰器返回一个值，它会被用作方法的属性描述符。
         */
        DecoratorTest2.propertyDecoratorTest = function () {
            var Greeter = (function () {
                function Greeter(message) {
                    this.greeting = "greeting";
                    this.greeting = message;
                }
                Greeter.prototype.greet = function () {
                    // let formatString = getFormat(this, "greeting");
                    // return formatString.replace("%s", this.greeting);
                };
                __decorate([
                    format("Hello, %s")
                ], Greeter.prototype, "greeting", void 0);
                return Greeter;
            }());
            //然后定义@format装饰器和getFormat函数：
            // import "reflect-metadata";
            // const formatMetadataKey = Symbol("format");
            var formatMetadataKey = "format";
            function format(formatString) {
                // return Reflect.metadata(formatMetadataKey, formatString);
                return function (custor, name) {
                    console.log(custor);
                    console.log(name);
                    console.log(custor[name]);
                    custor[name] = formatString.replace("%s", custor[name]);
                };
            }
            // function getFormat(target: any, propertyKey: string) {
            //     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
            // }
            var greet = new Greeter("hahahhah");
            console.log(greet.greeting);
        };
        /**
         * 参数装饰器
         * 参数装饰器声明在一个参数声明之前（紧贴着参数声明）。 参数装饰器应用于类构造函数或方法声明。
         * 参数装饰器不能用在声明文件（.d.ts），重载或其它外部上下文（比如declare的类）里。
         *
         * 参数装饰器表达式会在运行时当作函数被调用，传入下在3个参数：
         *  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
         *  2.成员的名字。
         *  3.参数在函数参数列表中的索引。
         *
         * 注意:参数装饰器只能用来监视一个方法的参数是否被传入。
         *
         * 参数装饰器的返回值会被忽略。
         */
        DecoratorTest2.parmsDecoratorTest = function () {
            // 下例定义了参数装饰器（@required）并应用于Greeter类方法的一个参数：
            // class Greeter {
            //     greeting: string;
            //     constructor(message: string) {
            //         this.greeting = message;
            //     }
            //     @validate
            //     greet(@required name: string) {
            //         return "Hello " + name + ", " + this.greeting;
            //     }
            // }
            // 然后我们使用下面的函数定义 @required 和 @validate 装饰器：
            // import "reflect-metadata";
            // const requiredMetadataKey = Symbol("required");
            // function required(target: Object, propertyKey: string|symbol, parameterIndex: number) {
            //     Reflect.defineMetadata(requiredMetadataKey, true, target, parameterIndex);
            // }
            // function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
            //     let method = descriptor.value;
            //     descriptor.value = function () {
            //         for (let parameterIndex = 0; parameterIndex < method.length; parameterIndex++) {
            //             if (Reflect.getOwnMetadata(requiredMetadataKey, method, parameterIndex)) {
            //                 if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
            //                     throw new Error("Missing required argument.");
            //                 }
            //             }
            //         }
            //         return method.apply(this, arguments);
            //     }
            // }
            // @required装饰器添加了元数据实体把参数标记为必须的。 @validate装饰器把greet方法包裹在一个函数里在调用原先的函数前验证函数参数。
        };
        /**
         * 元数据测试
         */
        DecoratorTest2.metadataTest = function () {
            var Point = (function () {
                function Point() {
                }
                return Point;
            }());
            // class Line {
            //     private _p0: Point;
            //     private _p1: Point;
            //     @validate
            //     set p0(value: Point) { this._p0 = value; }
            //     get p0() { return this._p0; }
            //     @validate
            //     set p1(value: Point) { this._p1 = value; }
            //     get p1() { return this._p1; }
            // }
            function validate(target, propertyKey, descriptor) {
                var set = descriptor.set;
                descriptor.set = function (value) {
                    var type = Reflect.getMetadata("design:type", target, propertyKey);
                    console.log(type);
                    if (!(value instanceof type)) {
                        throw new TypeError("Invalid type.");
                    }
                };
            }
            //TypeScript编译器可以通过@Reflect.metadata装饰器注入设计阶段的类型信息。 你可以认为它相当于下面的TypeScript：
            var Line = (function () {
                function Line() {
                }
                Object.defineProperty(Line.prototype, "p0", {
                    get: function () { return this._p0; },
                    set: function (value) { this._p0 = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Line.prototype, "p1", {
                    get: function () { return this._p1; },
                    set: function (value) { this._p1 = value; },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    validate,
                    Reflect.metadata("design:type", Point)
                ], Line.prototype, "p0", null);
                __decorate([
                    validate,
                    Reflect.metadata("design:type", Point)
                ], Line.prototype, "p1", null);
                return Line;
            }());
        };
        /** 失败，没法测出理想结果 */
        DecoratorTest2.MethodDecoratorTest2 = function () {
            var Router = "Symbol"; // 唯一key,用来存装饰器的信息
            function GET(path) {
                return function (target, name) { return setMethodDecorator(target, name, 'GET', path); };
            }
            //把method和path存起来，路由查找的时候就可以用了
            function setMethodDecorator(target, name, method, path) {
                target[Router] = target[Router] || {};
                target[Router][name] = target[Router][name] || {};
                target[Router][name].method = method;
                target[Router][name].path = path;
            }
            // 通过PropertyDescriptor来设置enumerable
            function Enumerable(enumerable) {
                return function (target, name, descriptor) {
                    descriptor.enumerable = enumerable;
                };
            }
            var Controller = (function () {
                function Controller() {
                }
                Controller.prototype.getContent = function (arg) {
                    return '';
                };
                __decorate([
                    GET(),
                    Enumerable(true)
                ], Controller.prototype, "getContent", null);
                return Controller;
            }());
            console.log(Controller["Symbol"]);
        };
        DecoratorTest2.AccessDecoratorTest2 = function () {
            function methodDecorator(param1, param2) {
                return function (target, propertyKey, descriptor) {
                    console.log(param1 + ", " + param2 + ", " + target + ", " + propertyKey + ", " + JSON.stringify(descriptor));
                };
            }
            var MyClass = (function () {
                function MyClass() {
                }
                Object.defineProperty(MyClass, "myName", {
                    get: function () {
                        return this._myName;
                    },
                    set: function (value) {
                        this._myName = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MyClass.prototype, "age", {
                    get: function () {
                        return this._age;
                    },
                    set: function (value) {
                        this._age = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    methodDecorator(false)
                ], MyClass.prototype, "age", null);
                __decorate([
                    methodDecorator(true, "this is static")
                ], MyClass, "myName", null);
                return MyClass;
            }());
            MyClass.myName = "hello";
            console.log(MyClass.myName);
            var obj = new MyClass();
            obj.age = 28;
            console.log(obj.age);
            /**
             * 我们可以发现，访问器装饰器返回的函数会在解释类的对应访问器时被调用一次，
             * 并可以得到装饰器的参数和被装饰的访问器的相关信息。
             * 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的访问器不会触发装饰器方法。
             */
        };
        DecoratorTest2.propertyDecoratorTest2 = function () {
            function propDecorator(param1, param2) {
                return function (target, propertyKey) {
                    console.log(param1 + ", " + param2 + ", " + target + ", " + propertyKey);
                };
            }
            var MyClass = (function () {
                function MyClass() {
                    this.a = "hello";
                }
                MyClass.A = 0;
                __decorate([
                    propDecorator(true)
                ], MyClass.prototype, "a", void 0);
                __decorate([
                    propDecorator(false, "Hi")
                ], MyClass, "A", void 0);
                return MyClass;
            }());
            console.log(MyClass.A);
            var obj = new MyClass();
            console.log(obj.a);
        };
        DecoratorTest2.parmsDecoratorTest2 = function () {
            function paramDecorator(target, propertyKey, parameterIndex) {
                console.log(target + ", " + propertyKey + ", " + parameterIndex);
            }
            var MyClass = (function () {
                function MyClass() {
                }
                MyClass.prototype.func = function (a, b, c) {
                    if (b === void 0) { b = "hello"; }
                    console.log("call method");
                };
                __decorate([
                    __param(0, paramDecorator), __param(1, paramDecorator), __param(2, paramDecorator)
                ], MyClass.prototype, "func", null);
                return MyClass;
            }());
            var obj = new MyClass();
            obj.func(1);
            obj.func(2);
        };
        /**
         * 装饰器求值的顺序：
         * 下在是定义好的步骤用来说明装饰器是如何应用到类里面不同声明上的：
         *  1.参数装饰器，然后方法，访问符，或属性装饰器应用到每个实例成员。
         *  2.参数装饰器，然后方法，访问符，或属性装饰器应用到每个静态成员。
         *  3.参数装饰器应用到构造函数。
         *  4.类装饰器应用到类。
         *
         * 装饰器组合：
         *  多个装饰器可以同时应用到一个声明上，就像下面的示例：
         *  写在同一行上：
         *  @f @g x
         *  写在多行上：
         *  @f
         *  @g
         *  x
         *
         * 当多个装饰器应用于一个声明上，它们求值方式与复合函数相似。
         * 在这个模型下，当复合f和g时，复合的结果(f.g)(x)等同于f(g(x))。
         * 同样的，在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：
         *  1.由上至下依次对装饰器表达式求值。
         *  2.求值的结果会被当作函数，由下至上依次调用。
         *
         * 如果我们使用装饰器工厂的话，可以通过下面的例子来观察它们求值的顺序：
         */
        DecoratorTest2.decoratorOrderTest = function () {
            function f() {
                console.log("f(): evaluated");
                return function (target, propertyKey, descriptor) {
                    console.log("f(): called");
                };
            }
            function g() {
                console.log("g(): evaluated");
                return function (target, propertyKey, descriptor) {
                    console.log("g(): called");
                };
            }
            var C = (function () {
                function C() {
                }
                C.prototype.method = function () { };
                __decorate([
                    f(),
                    g()
                ], C.prototype, "method", null);
                return C;
            }());
            //在控制台里会打印出如下结果：
            // f(): evaluated
            // g(): evaluated
            // g(): called
            // f(): called
            /**
             * 装饰器工厂：
             * 如果我们想自定义装饰器是如何作用于声明的，我们得写一个装饰器工厂函数。
             * 装饰器工厂就是一个简单的函数，它返回一个表达式，以供装饰器在运行时调用。
             * function color(value: string) { // 这是一个装饰器工厂
                    return function (target) { //  这是装饰器
                        // do something with "target" and "value"...
                    }
                }
             */
        };
        return DecoratorTest2;
    }());
    DecoratorExample.DecoratorTest2 = DecoratorTest2;
    __reflect(DecoratorTest2.prototype, "DecoratorExample.DecoratorTest2");
})(DecoratorExample || (DecoratorExample = {}));
//# sourceMappingURL=DecoratorTest2.js.map