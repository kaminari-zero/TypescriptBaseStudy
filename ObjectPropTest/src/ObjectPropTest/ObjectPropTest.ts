namespace ObjectProp{

    export class ObjectPorpTest{

        /**
         * 使用 hasOwnProperty 。
         * 返回一个布尔值，指示对象是否具有指定的属性作为自身（不继承）属性。
         */
        public static hasOwnPropertyTest(){
            var o:any = new Object();
            o.prop = 'exists';

            function changeO() {
                o.newprop = o.prop;
                //删除一个对象的特定属性。
                delete o.prop;
            }

            console.log(o.hasOwnProperty('prop'));   // 返回 true
            changeO();
            console.log(o.hasOwnProperty('prop'));   // 返回 false
            //继承的属性在自身不存在，也是false
            console.log(o.hasOwnProperty('hasOwnProperty'));   // 返回 false

            var cat = new Cat();
            cat.showInfo();
            // console.log(cat instanceof Object); //true
            //如果属性未被初始化，或者赋值的情况下，都不会被ts编译成属性，此时hasOwnProperty获取到的是false
            console.log(cat.hasOwnProperty('age'));  //false ????
            //不知道为啥，方法不算进对象的属性
            //原因：因为继承方式采用原型继承，Cat.prototype.showAge = function，hasOwnProperty只能获取自身属性，不能获取其原型的属性。
            console.log(cat.hasOwnProperty('showAge'));  //false ????
            console.log(Cat.prototype.hasOwnProperty('showAge'));  //true ????
            console.log(Object.hasOwnProperty.call(cat, 'age'));  //true ????
            console.log(Object.hasOwnProperty.call(cat, 'showAge'));  //false ????
        }

        /**
         * 使用 Object.getOwnPropertyNames()。
         * 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
         */
        public static getOwnPropertyNamesTest(){
            var arr = ["a", "b", "c"];
            console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]

            // 类数组对象
            var obj = { 0: "a", 1: "b", 2: "c"};
            console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]

            // 使用Array.forEach输出属性名和属性值
            Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
                console.log(val + " -> " + obj[val]);
            });
            // 输出
            // 0 -> a
            // 1 -> b
            // 2 -> c

            //不可枚举属性
            var my_obj = Object.create({}, {
                getFoo: {
                    value: function() { return this.foo; },
                    //设置属性为不可枚举的
                    enumerable: false
                }
            });
            my_obj.foo = 1;

            console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]

            //获取不可枚举属性
            ObjectPorpTest.getUnEnumerablePropTest(my_obj);
            var cat = new Cat();
            cat.showInfo();
            // console.log(cat instanceof Object); //true
            console.log(Object.getOwnPropertyNames(cat));  //["age"]
            console.log(Object.keys(cat));  //["age"]             
            
            // for(var key in cat){
            //     console.log(`key:${key};value:${cat[key]}`);
            // }
            ObjectPorpTest.getUnEnumerablePropTest(cat);  //[]
            ObjectPorpTest.getObjectOwnProp(cat);
        }


        /**
         * 只获取不可枚举的属性
         */
        public static getUnEnumerablePropTest(myObject){
            var target = myObject;
            var enum_and_nonenum = Object.getOwnPropertyNames(target);
            var enum_only = Object.keys(target);
            var nonenum_only = enum_and_nonenum.filter(function(key) {
                var indexInEnum = enum_only.indexOf(key);
                if (indexInEnum == -1) {
                    return true;
                } else {
                    return false;
                }
            });

            console.log(nonenum_only);
        }

        /**
         * 遍历一个对象的所有自身属性
         */
        public static getObjectOwnProp(obj){
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    console.log("this is fog (" + name + ") for sure. Value: " + obj[name]);
                }
                else {
                    console.log(name); // toString or something else
                }
            }
        }

        /**
         * 白鹭一些对对象操作的方法
         */
        public static egretClassFunTest(obj){
            //白鹭提供的获得对象的类的名字
            console.log(egret.getQualifiedClassName(obj)); //Cat
            //白鹭提供的获得对象的父类的名字
            console.log(egret.getQualifiedSuperclassName(obj)); //Animal
            //白鹭提供的判断应用程序域之内是否存在一个公共定义。
            //该定义可以是一个类、一个命名空间或一个函数的定义。
            console.log(egret.hasDefinition("Cat")); //true
            //白鹭提供的检查指定对象是否为 Egret 框架内指定接口或类或其子类的实例。
            //此方法与使用 instanceOf 关键字相比具有更高的性能，并且能判断接口的实现。
            console.log(egret.is(obj,egret.getQualifiedSuperclassName(obj))); //true
            //白鹭提供的为一个类定义注册运行时类信息,用此方法往类定义上注册它自身以及所有接口对应的字符串。
            //在运行时，这个类的实例将可以使用 egret.is() 方法传入一个字符串来判断实例类型。
            egret.registerClass(Cat,"Cat",["IAnimal"]);
            console.log(egret.is(obj,"Cat")); //true
            //白鹭系统貌似是自己就默认把其本类，父类等信息注册号了，可以直接使用egret.is来判断。
            console.log(egret.is(obj,egret.getQualifiedSuperclassName(obj))); //true
            console.log(egret.is(obj,"IAnimal")); //true

            //返回 name 参数指定的类的类对象引用。也就是根据具体类名获得类对象的实例。
            var reObj = egret.getDefinitionByName(egret.getQualifiedClassName(obj));
            console.log(egret.getQualifiedClassName(reObj));
        }

        /**
         * 获取类名，非白鹭方式
         */
        public static getClassNameTest(obj){
            console.log(obj.__class__);
        }

        /**
         * 获取其类类型（本类，父类，接口）
         */
        public static getClassTypeTest(obj){
            //返回了egret.registerClass所注册的信息：
            //类名，接口名，直接父类名，所有继承链上的父类（没有Object）......
            console.log(obj.__types__); //["Cat", "IAnimal", "Animal", "BaseObject"]         
        }

        /**
         * 获取其原型
         */
        public static getPrototypeTest(obj){
            //直接获取对象的原型
            console.log(obj.__proto__);
            //要使用JavaScript方式获取原型,需要使用类名.prototype：
            console.log(Cat.prototype);

            //直接输出对象和对象类型之间的差别
            console.log(Cat);
            console.log(new Cat);

            //直接对象.prototype是undefined，原因是白鹭继承的方式（编译过来的继承方式）
            console.log(obj.prototype); //undefined
            //需要下面方式间接获取：
            //获取对象的类型，即获取该对象的构造方法
            var classes = obj.constructor;
            //这样，我们就可以通过对象找到它的原型
            console.log(classes.prototype);
        }

        /**
         * 获取构造器（相当于直接获取对象的类型，即class）：
         */
        public static getConstructorTest(obj){
            console.log(obj.constructor);
            // console.log(obj.constructor.tostring());报错
            console.log(obj.constructor + "");//以字符串方式打印出来，可以借此获得当前对象的实例对象的类型

            //执行构造器生成对象：
            var reObj = obj.constructor();
            // var reObj = new obj;
            console.log(reObj);

            //是否能通过new方式创建
            var newObj = new obj.constructor;
            console.log(newObj);    //可以直接这样new

        }

        /**
         * Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。
         * （自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
         * 
         * Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
         * 
         * Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
         */
        public static getOwnPropertyDescriptorTest(){
            var o, d;

            o = { get foo() { return 17; } };
            d = Object.getOwnPropertyDescriptor(o, "foo");
            console.log(d);
            // d {
            //   configurable: true,
            //   enumerable: true,
            //   get: /*the getter function*/,
            //   set: undefined
            // }

            o = { bar: 42 };
            d = Object.getOwnPropertyDescriptor(o, "bar");
            console.log(d);
            // d {
            //   configurable: true,
            //   enumerable: true,
            //   value: 42,
            //   writable: true
            // }

            o = {};
            Object.defineProperty(o, "baz", {
                value: 8675309,
                writable: false,
                enumerable: false
            });
            d = Object.getOwnPropertyDescriptor(o, "baz");
            console.log(d);
            // d {
            //   value: 8675309,
            //   writable: false,
            //   enumerable: false,
            //   configurable: false
            // }

            var obj = {};
            var bb = Object.defineProperties(obj, {
                'property1': {
                    value: true,
                    writable: true
                },
                'property2': {
                    value: 'Hello',
                    writable: false
                }
                // etc. etc.
            });
            console.log(bb);
        }


        /**
         * in关键字：如果指定的属性存在于指定的对象中，则 in 运算符会返回 true。
         */
        public static useInTest(){
            // 数组
            var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
            0 in trees        // 返回true
            3 in trees        // 返回true
            6 in trees        // 返回false
            "bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)
            "length" in trees // 返回true (length是一个数组属性)

            // Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)

            // 内置对象
            "PI" in Math          // 返回true

            // 自定义对象
            var mycar = {make: "Honda", model: "Accord", year: 1998};
            "make" in mycar  // 返回true
            "model" in mycar // 返回true

            //in右操作数必须是一个对象值。比如，可以是一个String包装对象，但不能是一个字符串原始值。
            var color1 = new String("green");
            "length" in color1 // 返回true
            // var color2 = "coral";
            // "length" in color2 // 报错(color2不是对象)

            //如果一个属性是从原型链上继承来的，in 运算符也会返回 true。
            var o = "toString" in {}; // 返回true
            console.log(o);
        }


        /**
         * 使用toString()检测对象类型
         */
        public static toStringTypeTest(){
            var toString = Object.prototype.toString;

            console.log(toString.call(new Date)); // [object Date]
            console.log(toString.call(new String)); // [object String]
            console.log(toString.call(Math)); // [object Math]

            //Since JavaScript 1.8.5
            console.log(toString.call(undefined)); // [object Undefined]
            console.log(toString.call(null)); // [object Null]

            //自定义类型则是[object Object]
            console.log(toString.call(new Cat)); // [object Object]
            console.log(new Cat().toString()); 
            console.log(toString.call(new Animal)); // [object Object]
        }
    }

}