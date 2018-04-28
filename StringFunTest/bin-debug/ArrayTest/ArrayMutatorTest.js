var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ArrayFun;
(function (ArrayFun) {
    /**
     * 下面的这些方法会改变调用它们的对象自身的值：
     */
    var ArrayMutatorFunTest = (function () {
        function ArrayMutatorFunTest() {
        }
        /**
         * pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
         * 返回值：从数组中删除的元素(当数组为空时返回undefined)。
         */
        ArrayMutatorFunTest.popTest = function () {
            var a = [1, 2, 3];
            console.log(a.length); // 3
            console.log(a.pop()); // 3
            console.log(a); // [1, 2]
            console.log(a.length); // 2
        };
        /**
         * push() 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。
         * 参数：被添加到数组末尾的元素（可添加多个）。
         * 返回值：当调用该方法时，新的 length 属性值将被返回。
         */
        ArrayMutatorFunTest.pushTest = function () {
            var numbers = [1, 2, 3];
            numbers.push(4);
            console.log(numbers); // [1, 2, 3, 4]
            numbers.push(5, 6, 7);
            console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
            //添加元素到数组
            var sports = ["soccer", "baseball"];
            var total = sports.push("football", "swimming");
            console.log(sports); // ["soccer", "baseball", "football", "swimming"]
            console.log(total); // 4
            //合并两个数组
            var vegetables = ['parsnip', 'potato'];
            var moreVegs = ['celery', 'beetroot'];
            // 将第二个数组融合进第一个数组
            // 相当于 vegetables.push('celery', 'beetroot');
            // 注意：当第二个数组(如示例中的moreVegs)太大时不要使用这个方法来合并数组，
            // 因为事实上一个函数能够接受的参数个数是有限制的。具体可以参考 apply() 。
            Array.prototype.push.apply(vegetables, moreVegs);
            console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
        };
        /**
         * reverse() 方法将数组中元素的位置颠倒，并返回该数组的引用。。
         */
        ArrayMutatorFunTest.reverseTest = function () {
            var myArray = ['one', 'two', 'three'];
            myArray.reverse();
            console.log(myArray); // ['three', 'two', 'one']
        };
        /**
         * shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
         * 返回值：从数组中删除的元素; 如果数组为空，则undefined 。
         */
        ArrayMutatorFunTest.shiftTest = function () {
            var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
            console.log('调用 shift 之前: ' + myFish); // "调用 shift 之前: angel,clown,mandarin,surgeon"
            var shifted = myFish.shift();
            console.log('调用 shift 之后: ' + myFish); // "调用 shift 之后: clown,mandarin,surgeon" 
            console.log('被删除的元素: ' + shifted); // "被删除的元素: angel"
        };
        /**
         * unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
         * 参数：要添加到数组开头的元素（多个）。
         * 返回值：当一个对象调用该方法时，返回其 length 属性值。
         */
        ArrayMutatorFunTest.unshiftTest = function () {
            var arr = [1, 2];
            arr.unshift(0); //arr is [0, 1, 2]
            console.log(arr);
            arr.unshift(-2, -1); //arr is [-2, -1, 0, 1, 2]
            console.log(arr);
            arr.unshift([-3]); //arr is [[-3], -2, -1, 0, 1, 2]
            console.log(arr);
        };
        /**
         * sort() 方法在适当的位置对数组的元素进行排序，并返回数组。
         * sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
         *
         * 返回值：返回排序后的数组。原数组已经被排序后的数组代替。
         * 参数：compareFunction 可选。用来指定按某种顺序进行排列的函数。
         *      如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序。
         * 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。
         *  即 a 和 b 是两个将要被比较的元素：
         *      如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
         *      如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
         *      如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
         *  compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
         */
        ArrayMutatorFunTest.sortTest = function () {
            var fruit = ['cherries', 'apples', 'bananas'];
            fruit.sort(); // ['apples', 'bananas', 'cherries']
            var scores = [1, 10, 21, 2];
            scores.sort();
            // [1, 10, 2, 21]
            // 注意10在2之前,
            // 因为在 Unicode 指针顺序中"10"在"2"之前
            var things = ['word', 'Word', '1 Word', '2 Words'];
            things.sort();
            // ['1 Word', '2 Words', 'Word', 'word']
            // 在Unicode中, 数字在大写字母之前,
            // 大写字母在小写字母之前.
            //sort 方法可以使用 函数表达式 方便地书写：
            var numbers = [4, 2, 5, 1, 3];
            numbers.sort(function (a, b) {
                return a - b;
            });
            console.log(numbers); // [1, 2, 3, 4, 5]
            //对非 ASCII 字符排序，使用String.localeCompare
            var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
            items.sort(function (a, b) {
                return a.localeCompare(b);
            });
            console.log(items);
            //使用映射改善排序
            /**
             * compareFunction 可能需要对元素做多次映射以实现排序，
             * 尤其当 compareFunction 较为复杂，且元素较多的时候，
             * 某些 compareFunction 可能会导致很高的负载。使用 map 辅助排序将会是一个好主意。
             * 基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。
             */
            // 需要被排序的数组
            var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
            // 对需要排序的数字和位置的临时存储
            var mapped = list.map(function (el, i) {
                return { index: i, value: el.toLowerCase() };
            });
            // 按照多个值排序数组
            mapped.sort(function (a, b) {
                return +(a.value > b.value) || +(a.value === b.value) - 1;
            });
            // 根据索引得到排序的结果
            var result = mapped.map(function (el) {
                return list[el.index];
            });
            console.log(result);
        };
        /**
         * splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
         * 参数1：指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；
         *      如果是负值，则表示从数组末位开始的第几位（从1计数）。
         * 参数2：可选，整数，表示要移除的数组元素的个数。如果 deleteCount 是 0，则不移除元素。
         *      这种情况下，至少应添加一个新元素。如果 deleteCount 大于start 之后的元素的总数，
         *      则从 start 后面的元素都将被删除（含第 start 位）。
         * 参数3：可选，要添加进数组的元素,从start 位置开始。如果不指定，
         *      则 splice() 将只删除数组元素。
         *
         * 返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。
         *      如果没有删除元素，则返回空数组。
         */
        ArrayMutatorFunTest.spliceTest = function () {
            var myFish = ["angel", "clown", "mandarin", "surgeon"];
            //从第 2 位开始删除 0 个元素，插入 "drum"
            var removed = myFish.splice(2, 0, "drum");
            console.log(myFish); //运算后的 myFish:["angel", "clown", "drum", "mandarin", "surgeon"]
            console.log(removed); //被删除元素数组：[]，没有元素被删除
            //从第 3 位开始删除 1 个元素
            removed = myFish.splice(3, 1);
            console.log(myFish); //运算后的myFish：["angel", "clown", "drum", "surgeon"]
            console.log(removed); //被删除元素数组：["mandarin"]
            //从第 2 位开始删除 1 个元素，然后插入 "trumpet"
            removed = myFish.splice(2, 1, "trumpet");
            console.log(myFish); //运算后的myFish: ["angel", "clown", "trumpet", "surgeon"]
            console.log(removed); //被删除元素数组：["drum"]
            //从第 0 位开始删除 2 个元素，然后插入 "parrot", "anemone" 和 "blue"
            removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
            console.log(myFish); //运算后的myFish：["parrot", "anemone", "blue", "trumpet", "surgeon"]
            console.log(removed); //被删除元素的数组：["angel", "clown"]
            //从第 3 位开始删除 2 个元素
            removed = myFish.splice(3, Number.MAX_VALUE);
            console.log(myFish); //运算后的myFish: ["parrot", "anemone", "blue"]
            console.log(removed); //被删除元素的数组：["trumpet", "surgeon"]
        };
        return ArrayMutatorFunTest;
    }());
    ArrayFun.ArrayMutatorFunTest = ArrayMutatorFunTest;
    __reflect(ArrayMutatorFunTest.prototype, "ArrayFun.ArrayMutatorFunTest");
})(ArrayFun || (ArrayFun = {}));
//# sourceMappingURL=ArrayMutatorTest.js.map