namespace ArrayFun{
    /**
     * Iteration 方法：
     * 在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。
     * 在回调函数执行之前，数组的长度会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加
     * 了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了
     * 其它修改，比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响。
     * 总之，不要尝试在遍历过程中对原数组进行任何修改，虽然规范对这样的操作进行了详细的定义，
     * 但为了可读性和可维护性，请不要这样做。
     * 
     * 注：下面大多方法都是es5的。
     */
    export class ArrayIterationFunTest{
        /**
         * forEach() 方法对数组的每个元素执行一次提供的函数。
         * 参数1：callback，为数组中每个元素执行的函数，该函数接收三个参数：
         *      currentValue(当前值)：数组中正在处理的当前元素。
         *      index(索引)：数组中正在处理的当前元素的索引。
         *      array：forEach()方法正在操作的数组。
         * 参数2：thisArg，可选，当执行回调 函数时用作this的值(参考对象)。
         * 
         * 返回值：总是返回 undefined值(即void)。
         * 
         */
        public static forEachTest(){
            function logArrayElements(element, index, array) {
                console.log("a[" + index + "] = " + element);
            }

            // 注意索引2被跳过了，因为在数组的这个位置没有项
            [2, 5, ,9].forEach(logArrayElements);

            // a[0] = 2
            // a[1] = 5
            // a[3] = 9

            [2, 5,"" ,9].forEach(logArrayElements);
            // a[0] = 2
            // a[1] = 5
            // a[2] = 
            // a[3] = 9

            [2, 5, undefined ,9].forEach(logArrayElements);
            // a[0] = 2
            // a[1] = 5
            // a[2] = undefined
            // a[3] = 9

            let xxx; // undefined
            [2, 5, xxx ,9].forEach(logArrayElements);
            // a[0] = 2
            // a[1] = 5
            // a[2] = undefined
            // a[3] = 9

            //如果数组在迭代时被修改了，则其他元素会被跳过。
            /**
             * 下面的例子输出"one", "two", "four"。当到达包含值"two"的项时，
             * 整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置。
             * 因为元素 "four"现在在数组更前的位置，"three"会被跳过。 
             * forEach()不会在迭代之前创建数组的副本。
             */
            var words = ["one", "two", "three", "four"];
            words.forEach(function(word) {
                console.log(word);
                if (word === "two") {
                    words.shift();
                }
            }); // one two four

        }

        /**
         * forEach示例：
         * 对象复制函数
         */
        public static CopyObjectTest(){
            function copy(obj) {
                var copy = Object.create(Object.getPrototypeOf(obj));
                var propNames = Object.getOwnPropertyNames(obj);

                propNames.forEach(function(name) {
                    var desc = Object.getOwnPropertyDescriptor(obj, name);
                    Object.defineProperty(copy, name, desc);
                });

                return copy;
            }

            var obj1 = { a: 1, b: 2 };
            console.log(obj1);
            var obj2 = copy(obj1); // obj2 looks like obj1 now
            console.log(obj2);
        }

        /**
         * every() 方法测试数组的所有元素是否都通过了指定函数的测试。
         * 参数1：callback，用来测试每个元素的函数。
         *  callback 被调用时传入三个参数：元素值，元素的索引，原数组。（具体参考forEach）
         * 参数2：可选，执行 callback 时使用的 this 值。
         * 
         * 描述：
         * every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回
         * false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，
         * every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。
         * callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。
         */
        public static everyTest(){
            //检测所有数组元素的大小
            function isBigEnough(element, index, array) {
                return (element >= 10);
            }
            var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
            console.log(passed); // passed is false
            passed = [12, 54, 18, 130, 44].every(isBigEnough); 
            console.log(passed); // passed is true
        }

        /**
         * some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试。
         * 参数1：callback，用来测试每个元素的函数。
         *  callback 被调用时传入三个参数：元素值，元素的索引，原数组。（具体参考forEach）
         * 参数2：可选，执行 callback 时使用的 this 值。
         * 
         * 描述：
         * 与every相反，只要有一个返回ture，some 将会立即返回 true。否则，some 返回 false。
         */
        public static someTest(){
            //测试数组元素的值
            function isBigEnough(element, index, array) {
                return (element >= 10);
            }
            var passed = [2, 5, 8, 1, 4].some(isBigEnough);
            console.log(passed); // passed is false
            passed = [12, 5, 8, 1, 4].some(isBigEnough);
            console.log(passed); // passed is true
        }

        /**
         * filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
         * 参数1：callback，用来测试每个元素的函数。
         *  callback 被调用时传入三个参数：元素值，元素的索引，原数组。（具体参考forEach）
         *  返回true表示保留该元素（通过测试），false则不保留。
         * 参数2：可选，执行 callback 时使用的 this 值。
         * 
         * 返回值: 一个新的通过测试的元素的集合的数组
         */
        public static filterTest(){
            //筛选排除掉所有的小值
            function isBigEnough(element) {
                return element >= 10;
            }
            var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
            console.log(filtered); // filtered is [12, 130, 44]
        }

        /**
         * map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
         * 参数1：callback，用来测试每个元素的函数。
         *  callback 被调用时传入三个参数：元素值，元素的索引，原数组。（具体参考forEach）
         *  callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。
         * 参数2：可选，执行 callback 时使用的 this 值。
         * 
         * 返回值:一个新数组，每个元素都是回调函数的结果。
         */
        public static mapTest(){
            //求数组中每个元素的平方根
            var numbers = [1, 4, 9];
            var roots = numbers.map(Math.sqrt); // roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
            console.log(roots);

            //使用 map 重新格式化数组中的对象
            //以下代码将一个包含对象的数组用以创建一个包含新重新格式化对象的新数组。
            var kvArray = [{key: 1, value: 10}, 
                        {key: 2, value: 20}, 
                        {key: 3, value: 30}];

            var reformattedArray = kvArray.map(function(obj) { 
                var rObj = {};
                rObj[obj.key] = obj.value;
                return rObj;
            });
            console.log(kvArray);
            console.log(reformattedArray);

            //用一个仅有一个参数的函数来mapping一个数字数组
            var numbers = [1, 4, 9];
            var doubles = numbers.map(function(num) {
                return num * 2;
            });
            console.log(numbers); //[1, 4, 9]
            console.log(doubles); //[2, 8, 18]

            //在一个 String  上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组：
            var map = Array.prototype.map
            var a = map.call("Hello World", function(x) { 
                return x.charCodeAt(0); 
            }); 
            console.log(a); // a的值为[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

            //反转字符串
            var str = '12345';
            var newStr = Array.prototype.map.call(str, function(x) {
                return x;
            }).reverse().join(''); 
            console.log(newStr); // 输出: '54321'
            console.log(str === newStr);
        }

        /**
         * map的一个小误区：
         * 通常情况下，map 方法中的 callback 函数只需要接受一个参数，就是正在被遍历的数组元素本身。
         * 但这并不意味着 map 只给 callback 传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。
         */
        public static mapExampleTest(){
            //下面展示将数字字符串数组，转换成数字数组

            // 下面的语句返回什么呢:
            console.log(["1", "2", "3"].map(parseInt));
            // 你可能觉的会是[1, 2, 3]
            // 但实际的结果是 [1, NaN, NaN]

            // 通常使用parseInt时,只需要传递一个参数.
            // 但实际上,parseInt可以有两个参数.第二个参数是进制数.
            // 可以通过语句"alert(parseInt.length)===2"来验证.
            // map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
            // 元素索引, 原数组本身.
            // 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
            // parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.
            function returnInt(element) {
                return parseInt(element, 10);
            }

            console.log(['1', '2', '3'].map(returnInt)); // [1, 2, 3]
            // 意料之中的结果

            // 也可以使用简单的箭头函数，结果同上
            console.log(['1', '2', '3'].map( str => parseInt(str) ));

            // 一个更简单的方式:
            console.log(['1', '2', '3'].map(Number)); // [1, 2, 3]
            // 与`parseInt` 不同，下面的结果会返回浮点数或指数:
            console.log(['1.1', '2.2e2', '3e300'].map(Number)); // [1.1, 220, 3e+300]
        }

        /**
         * reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
         * 参数1：callback，执行数组中每个值的函数，包含四个参数：
         *      accumulator：累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（如下所示）。
         *      currentValue：数组中正在处理的元素。
         *      currentIndex：数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。
         *      array：调用reduce的数组。
         * 参数2：initialValue，可选。用作第一个调用 callback的第一个参数的值。 
         *      如果没有提供初始值，则将使用数组中的第一个元素。 
         *      在没有初始值的空数组上调用 reduce 将报错。
         * 
         * 返回值：函数累计处理的结果.
         * 
         * 注意：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，
         *      跳过第一个索引。如果提供initialValue，从索引0开始。
         */
        public static reduceTest(){
            var maxCallback:any = ( pre, cur ) => Math.max( pre.x, cur.x );
            var maxCallback2 = ( max, cur ) => Math.max( max, cur );

            // reduce() 没有initialValue
            var result;
            result =[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
            console.log(result);
            result =[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
            console.log(result);
            // result =[                      ].reduce( maxCallback ); // TypeError

            // map/reduce; 更好的解决方案，也适用于空array
            result =[ { x: 22 }, { x: 42 } ].map( el => el.x )
                                            .reduce( maxCallback2, -Infinity );
            console.log(result);    // 42

            //数组里所有值的和
            var sum = [0, 1, 2, 3].reduce(function (a, b) {
                return a + b;
            }, 0);
            console.log(sum);   // sum is 6
            //把上面改成箭头函数写法：
            var total = [ 0, 1, 2, 3 ].reduce(
                ( acc, cur ) => acc + cur,
                0
            );
            console.log(total); 

            //将二维数组转化为一维(扁平化（flatten）一个元素为数组的数组)
            var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
                ( acc, cur ) => acc.concat(cur),
                []
            );
            console.log(flattened); 

            //计算数组中每个元素出现的次数
            var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
            var countedNames = names.reduce(function (allNames, name) { 
                if (name in allNames) {
                    allNames[name]++;
                }
                else {
                    allNames[name] = 1;
                }
                return allNames;
            }, {});
            // countedNames is:
            console.log(countedNames);// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
        }

        /**
         * reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
         * 
         * 与  reduce() 的执行方向相反，其他一致。
         */
        public static reduceRightTest(){
            //reduce 与 reduceRight 之间的区别
            var a = ['1', '2', '3', '4', '5']; 
            var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
            var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

            console.log(left);  // "12345"
            console.log(right); // "54321"          
        }
    }
}