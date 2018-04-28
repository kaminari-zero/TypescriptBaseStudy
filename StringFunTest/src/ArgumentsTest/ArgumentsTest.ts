namespace ArgumentsTest{
    export class ArgumentsFunTest{
        /**
         * arguments基础：
         * arguments 是一个对应于传递给函数的参数的类数组对象。
         * arguments对象是所有（非箭头）函数中都可用的局部变量。
         * 你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数的条目，第一个条目的索引从0开始。
         */
        public static argumentsBaseTest(){
            //arguments对象不是一个 Array 。它类似于Array，但除了长度之外没有任何Array属性。
            //例如，它没有 pop 方法。但是它可以被转换为一个真正的Array：
            function testArgument(a,b,c,d,e,f?,g?,...argss){
                //方式一：
                var args = Array.prototype.slice.call(arguments);
                //方式二：
                var args2 = [].slice.call(arguments);

                console.log(args);
                console.log(args2);

                //可以使用索引确定单个参数的类型。
                console.log(typeof arguments[0]);
                console.log(arguments[0]);
                console.log(arguments[1]);
                console.log(arguments[2]);

                //使用 arguments.length来确定传递给函数参数的个数，然后使用arguments对象来处理每个参数。
                //推荐要确定函数签名中参数的数量，请使用Function.length属性。
                console.log(arguments.length);      //6 输入的参数数量
                console.log(testArgument.length);   //7 函数本身指定的参数数量，剩余参数不算进里面

                //typeof参数返回 'object'。
                console.log(typeof arguments); // 'object'

            }

            // testArgument(1,2,3,4,5,6);
            testArgument(1,2,3,4,5,6,7,8,9,10,11,12);

            //当非严格模式中的函数有包含剩余参数、默认参数和解构赋值，
            //那么arguments对象中的值不会跟踪参数的值（反之亦然）。
            //相反, arguments反映了调用时提供的参数：
            //具体自己操作。
            function func(a) { 
                arguments[0] = 99;   // 更新了arguments[0] 同样更新了a
                console.log(a);

                // a = 99;              // 更新了a 同样更新了arguments[0] 
                // console.log(arguments[0]);
            }
            func(10); // 99
            
        }

        /**
         * 示例：
         * 定义连接字符串的函数
         */
        public static joinFunTest(){
            function myConcat(separator,...argss) {
                var args = Array.prototype.slice.call(arguments, 1);
                return args.join(separator);
            }

            console.log(myConcat(", ", "red", "orange", "blue"));
            // returns "red, orange, blue"

            console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
            // returns "elephant; giraffe; lion; cheetah"

            console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
            // returns "sage. basil. oregano. pepper. parsley"      
        }

        /**
         * arguments.callee 属性包含当前正在执行的函数。
         * 
         * callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。
         * 这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。
         * 
         * 注意：在严格模式下，第5版 ECMAScript (ES5) 禁止使用 arguments.callee()。
         * 当一个函数必须调用自身的时候, 避免使用 arguments.callee(), 
         * 通过要么给函数表达式一个名字,要么使用一个函数声明.
         */
        public static calleeTest(){
            //es3以上允许使用命名函数，推荐递归使用命名函数
            function factorial (n) {
                return !(n > 1) ? 1 : factorial(n - 1) * n;
            }

            console.log([1,2,3,4,5].map(factorial));

            //用下面替代：
            var result = [1,2,3,4,5].map(function (n) {
                return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
            });
            console.log(result);
            //但不退推荐这样使用，知道就行了，存在许多隐患(例如递归调用会获取到一个不同的 this 值)。
        }
        
    }
}