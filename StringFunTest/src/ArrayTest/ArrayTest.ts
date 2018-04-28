namespace ArrayFun{
    export class ArrayFunTest{

        /**
         * Array 对象是用于构造数组的全局对象; 它是高阶的、类似于列表的对象。
         */
        public static arrayBaseTest(){
            //创建数组
            let fruits = ["Apple","Banana"];
            console.log(fruits.length); // 2

            //通过索引访问数组元素
            let first = fruits[0]; // Apple
            let last = fruits[fruits.length - 1]; // Banana
            console.log(`first=${first};last=${last}`);

            //遍历数组
            fruits.forEach(function (item, index, array) {
                console.log(item, index); // Apple 0  Banana 1
            });
            
            //添加元素到数组的末尾
            var newLength = fruits.push("Orange"); // ["Apple", "Banana", "Orange"]
            console.log(newLength);

            //删除数组末尾的元素
            let last2 = fruits.pop(); // ["Apple", "Banana"];
            console.log(fruits);

            //删除数组最前面（头部）的元素
            let first2 = fruits.shift(); 
            console.log(fruits);

            //添加到数组的前面（头部）
            let newLength2 = fruits.unshift("Strawberry"); // ["Strawberry", "Banana"];
            console.log(fruits);

            //找到某个元素在数组中的索引
            fruits.push('Mango'); // ["Strawberry", "Banana", "Mango"]
            let index = fruits.indexOf("Banana"); // 1
            console.log(index);
            console.log(fruits);

            //通过索引删除某个元素
            let removedItem = fruits.splice(1, 1); // ["Strawberry", "Mango"]
            console.log(fruits);

            //复制一个数组
            var shallowCopy = fruits.slice();
            console.log(shallowCopy);
        }

        /**
         * 创建一个数组:
         *  [element0, element1, ..., elementN]
         * Array 构造器将会根据给定的元素创建一个 JavaScript 数组:
         *  new Array(element0, element1[, ...[, elementN]])
         * 当参数仅有一个参数且其为数字时,将返回一个以此为长度的数组对象。通过 length 属性可以访问这个值。
         *  new Array(arrayLength)
         */
        // public static createBaseArrayTest(){          
        // }

        /**
         * 长度和数值下标属性性质之间的关系:
         * 注：length 属性的值是一个 0 到 2^32 - 1 的整数。
         */
        public static lengthTest(){
            var fruits = [];
            fruits.push('banana', 'apple', 'peach');
            console.log(fruits.length); // 3

            //length 是Array的实例属性。返回或设置一个数组中的元素个数。
            //该值是一个无符号 32-bit 整数，并且总是大于数组最高项的下标。
            //当你在 array 上使用一个合法的数组下标，而且该下标超出了当前数组的大小的时候，
            //引擎会根据其值自动更新 array 的length属性：
            fruits[5] = 'mango';
            console.log(fruits[5]); // 'mango'
            console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
            console.log(fruits); //["banana", "apple", "peach", undefined, undefined, "mango"]
            console.log(fruits.length); // 6

            //直接增大 length
            fruits.length = 10;
            console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
            console.log(fruits); 
            console.log(fruits.length); // 10

            //设置 length 属性的值来截断数组:
            //减小 array 的length属性会删掉超出的元素。
            fruits.length = 2;
            console.log(Object.keys(fruits)); // ['0', '1']
            console.log(fruits); 
            console.log(fruits.length); // 2


            var msgArray = [];
            msgArray[0] = 'Hello';
            msgArray[99] = 'world';

            if (msgArray.length === 100) {
                console.log('数组长度为100。');
            }
        }

        /**
         * 二维数组
         */
        public static Two_dimension_arrayTest(){
            var board = [ 
                ['R','N','B','Q','K','B','N','R'],
                ['P','P','P','P','P','P','P','P'],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' '],
                ['p','p','p','p','p','p','p','p'],
                ['r','n','b','q','k','b','n','r'] ];

            console.log(board.join('\n') + '\n\n');

            // Move King's Pawn forward 2
            board[4][4] = board[6][4];
            board[6][4] = ' ';
            console.log(board.join('\n'));
        }

        /**
         * Array.isArray() 用于确定传递的值是否是一个 Array。
         * 
         * 注：
         */
        public static isArrayTest(){
            console.log(Array.isArray([1, 2, 3]));   // true
            console.log(Array.isArray({foo: 123}));  // false
            console.log(Array.isArray("foobar"));    // false
            console.log(Array.isArray(undefined));   // false

            // 下面的函数调用都返回 true
            console.log(Array.isArray([]));
            console.log(Array.isArray([1]));
            console.log(Array.isArray(new Array()));
            // 鲜为人知的事实：其实 Array.prototype 也是一个数组。
            console.log(Array.isArray(Array.prototype)); 

            // 下面的函数调用都返回 false
            // Array.isArray(); //ts不允许没参数，所以报错
            console.log(Array.isArray({}));
            console.log(Array.isArray(null));
            console.log(Array.isArray(undefined));
            console.log(Array.isArray(17));
            console.log(Array.isArray('Array'));
            console.log(Array.isArray(true));
            console.log(Array.isArray(false));
            console.log(Array.isArray({ __proto__: Array.prototype }));
        }

        /**
         * 有时你想对字符串或其他类似数组的对象使用数组的方法（如函数arguments）。
         * 通过这样做，你可以把一个字符串作为（或以其他方式把非数组作为数组）数组里的字符来使用。
         * 例如，为了检查变量str每一个字符是否是字母，你会这样写：
         */
        public static stringEeveryTest(){
            function stringLetter(str){
                function isLetter(character) {
                    return character >= 'a' && character <= 'z';
                }

                if (Array.prototype.every.call(str, isLetter)) {
                    console.log("The string '" + str + "' contains only letters!");
                }
            }

            var str2 = "sadfAGGGdfdsf";
            stringLetter(str2); 
            stringLetter("erfsfdfdgfgfg"); 
        }
    }
}