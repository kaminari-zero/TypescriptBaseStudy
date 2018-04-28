namespace ArrayFun{
    /**
     * 下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。
     */
    export class ArrayAccessorFunTest{
        /**
         * concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
         * 参数：将数组和/或值连接成新数组（可多个）。
         * 返回值：新的 Array 实例。
         */
        public static concatTest(){
            var num1:any = [[1]];
            var num2 = [2, [3]];
            
            var nums = num1.concat(num2);
            console.log(nums); // results in [[1], 2, [3]]
            num1[0].push(4);
            console.log(nums); // results in [[1, 4], 2, [3]]
        }

        /**
         * join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。
         * 参数：separator 指定一个字符串来分隔数组的每个元素。
         *      如果省略()，数组元素用逗号分隔。默认为 ","。
         *      如果separator是空字符串("")，则所有元素之间都没有任何字符。
         * 返回值：一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串。
         */
        public static joinTest(){
            let a = ['Wind', 'Rain', 'Fire'];

            console.log(a.join()); // 默认为 ","
            // 'Wind,Rain,Fire'

            console.log(a.join("")); // 分隔符 === 空字符串 ""
            // "WindRainFire"

            console.log(a.join("-")); // 分隔符 "-"
            // 'Wind-Rain-Fire'

            console.log(a);
            // ['Wind', 'Rain', 'Fire']
        }

        /**
         * slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。原始数组不会被修改。
         * 参数1：begin 可选，从该索引处开始提取原数组中的元素（从0开始）。
         *       如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取。
         *      如果省略 begin，则 slice 从索引 0 开始。
         * 参数2：end 可选，在该索引处结束提取原数组元素（从0开始）。
         *      slice会提取原数组中索引从 begin 到 end 的所有元素（包含begin，但不包含end）。
         *      如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 
         *      如果 end 大于数组长度，slice 也会一直提取到原数组末尾。
         * 
         * 浅拷贝：如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。
         * 
         * 返回值：一个含有提取元素的新数组
         */
        public static sliceTest(){
            // 使用slice方法从myCar中创建一个newCar.
            var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
            var myCar:any = [myHonda, 2, "cherry condition", "purchased 1997"];
            var newCar = myCar.slice(0, 2);

            // 输出myCar, newCar,以及各自的myHonda对象引用的color属性.
            console.log('myCar = ' + JSON.stringify(myCar));
            console.log('newCar = ' + JSON.stringify(newCar));
            console.log('myCar[0].color = ' + JSON.stringify(myCar[0].color));
            console.log('newCar[0].color = ' + JSON.stringify(newCar[0].color));

            // 改变myHonda对象的color属性.
            myHonda.color = 'purple';
            console.log('The new color of my Honda is ' + myHonda.color);

            //输出myCar, newCar中各自的myHonda对象引用的color属性.
            console.log('myCar[0].color = ' + myCar[0].color);
            console.log('newCar[0].color = ' + newCar[0].color);
        }

        /**
         * toString() 返回一个字符串，表示指定的数组及其元素。
         * 对于数组对象，toString 方法返回一个字符串，该字符串由数组中的每个元素的 toString() 
         * 返回值经调用 join() 方法连接（由逗号隔开）组成。
         */
        public static toStringTest(){
            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
            var myVar = monthNames.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar.
            console.log(myVar);
        }

        /**
         * toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，
         * 这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
         * 
         * 数组中的Object，Number，Date分别调用其各自的toLocaleString()方法。
         */
        public static toLocaleStringTest(){
            var number = 1337;
            var date = new Date();
            var myArr = [number, date, "foo"];

            var str = myArr.toLocaleString(); 

            console.log(str); 
            // 输出 "1,337,2017/8/13 下午8:32:24,foo"
            // 假定运行在中文（zh-CN）环境，北京时区
        }

        /**
         * indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
         * 参数1：要查找的元素。
         * 参数2：可选，开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。
         *  如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 
         *  注意：如果参数中提供的索引值是一个负值，仍然从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
         * 
         * 返回值：首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。
         */
        public static indexOfTest(){
            var arrays = [2, 5, 9];
            console.log(arrays.indexOf(2));     // 0
            console.log(arrays.indexOf(7));     // -1
            console.log(arrays.indexOf(9, 2));  // 2
            console.log(arrays.indexOf(2, -1)); // -1
            console.log(arrays.indexOf(2, -3)); // 0

            //找出指定元素出现的所有位置
            var indices = [];
            var array = ['a', 'b', 'a', 'c', 'a', 'd'];
            var element = 'a';
            var idx = array.indexOf(element);
            while (idx != -1) {
                indices.push(idx);
                idx = array.indexOf(element, idx + 1);
            }
            console.log(indices); // [0, 2, 4]
        }

        /**
         * lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。
         * 从数组的后面向前查找，从 fromIndex 处开始。
         * 参数与返回值与上面的indexOf一致。
         */
        public static lastIndexOfTest(){
            var arrays = [2, 5, 9, 2];
            var index = arrays.lastIndexOf(2);
            console.log(index);// index is 3
            index = arrays.lastIndexOf(7);
            console.log(index);// index is -1
            index = arrays.lastIndexOf(2, 3);
            console.log(index);// index is 3
            index = arrays.lastIndexOf(2, 2);
            console.log(index);// index is 0
            index = arrays.lastIndexOf(2, -2);
            console.log(index);// index is 0
            index = arrays.lastIndexOf(2, -1);
            console.log(index);// index is 3

            //查找所有元素
            var indices = [];
            var array = ['a', 'b', 'a', 'c', 'a', 'd'];
            var element = 'a';
            var idx = array.lastIndexOf(element);

            while (idx != -1) {
                indices.push(idx);
                idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
            }

            console.log(indices);  // [4, 2, 0];
        }
    }
}