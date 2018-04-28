var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StringFun;
(function (StringFun) {
    var StringFunTest2 = (function () {
        function StringFunTest2() {
        }
        /**
         * concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
         * concat 方法并不影响原字符串。
         *
         * 强烈建议使用 赋值操作符（+, +=）代替 concat 方法。
         */
        StringFunTest2.concatTest = function () {
            var hello = "Hello, ";
            console.log(hello.concat("Kevin", " have a nice day.")); /* Hello, Kevin have a nice day. */
        };
        /**
         * indexOf() 方法返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。
         * lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。
         * 从该字符串的后面向前查找，从 fromIndex 处开始。
         *
         * 区分大小写
         *
         * 返回：指定值的第一次出现的索引; 如果没有找到 -1。
         */
        StringFunTest2.indexOfAndLastTest = function () {
            var anyString = "Brave new world";
            console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));
            // Displays 8
            console.log("The index of the first w from the end is " + anyString.lastIndexOf("w"));
            // Displays 10
            console.log("The index of 'new' from the beginning is " + anyString.indexOf("new"));
            // Displays 6
            console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));
            // Displays 6
        };
        /**
         * es2015规范中
         * repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
         */
        /**
         * replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。
         * 模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。
         */
        StringFunTest2.replaceTest = function () {
            function replacer(match, p1, p2, p3, offset, string) {
                // p1 is nondigits, p2 digits, and p3 non-alphanumerics
                return [p1, p2, p3].join(' - ');
            }
            //[^]中括号内的^是非的意思，指不能存在这些字符
            var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
            console.log(newString); // abc - 12345 - #$*%
            //交换字符串中的两个单词
            var re = /(\w+)\s(\w+)/;
            var str = "John Smith";
            var newstr = str.replace(re, "$2, $1");
            console.log(newstr); // Smith, John
            //使用行内函数来修改匹配到的字符。
            /**
             * 所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符。
             * 重要的是，在返回一个替换了的字符串前需要在匹配元素前需要进行添加操作。
             */
            function styleHyphenFormat(propertyName) {
                function upperToHyphenLower(match) {
                    return '-' + match.toLowerCase();
                }
                return propertyName.replace(/[A-Z]/g, upperToHyphenLower); //border-top
                // return propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // border-Top
                //因为 '$&'.toLowerCase() 会先被解析成字符串字面量（这会导致相同的'$&')而不是当作一个模式。
            }
            console.log(styleHyphenFormat('borderTop'));
        };
        /**
         * repeat示例1：
         * 将华氏温度转换为对等的摄氏温度
         * 华氏温度用一个数字加一个"F"来表示，这个函数将返回一个数字加"C"来表示的摄氏温度。
         */
        StringFunTest2.FConventCTest = function (x) {
            function convert(str, p1, offset, s) {
                return ((p1 - 32) * 5 / 9) + "C";
            }
            var s = String(x);
            var test = /(\d+(?:\.\d*)?)F\b/g;
            return s.replace(test, convert);
        };
        /**
         * repeat示例2：
         * 使用行内函数和正则来避免循环
         * 下例把某种模式的字符串转换为一个对象数组（其元素为对象）。
         * 输入：一个由 x，- 和 _ 组成的字符串。
         * 输出：一个数组对象。'x' 产生一个 'on' 状态，'-'（连接符）产生一个 'off' 状态，
         *      而 '_' （下划线）表示 'on' 状态的长度。
         *
         */
        StringFunTest2.fStrConvJsonTest = function () {
            var str = 'x-x_';
            var retArr = [];
            str.replace(/(x_*)|(-)/g, function (match, p1, p2) {
                if (p1) {
                    retArr.push({ on: true, length: p1.length });
                }
                if (p2) {
                    retArr.push({ on: false, length: 1 });
                }
                return "";
            });
            console.log(retArr);
        };
        /**
         * search() 方法执行正则表达式和 String对象之间的一个搜索匹配。
         * 返回值：
         * 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。
         * 描述：
         * 当你想要知道字符串中是否存在某个模式（pattern）时可使用 search，
         * 类似于正则表达式的 test 方法。当要了解更多匹配信息时，可使用 match（会更慢），
         * 该方法类似于正则表达式的 exec 方法。
         */
        StringFunTest2.searchTest = function () {
            //str 中是否包含 re
            function testinput(re, str) {
                var midstring;
                if (str.search(re) != -1) {
                    midstring = " contains ";
                }
                else {
                    midstring = " does not contain ";
                }
                console.log(str + midstring + re);
            }
            testinput("aaaa", "???");
        };
        /**
         * slice() 方法提取一个字符串的一部分，并返回一新的字符串。
         * 参数1：
         *  从该索引（以 0 为基数）处开始提取原字符串中的字符。
         *  如果值为负数，会被当做 sourceLength + beginSlice 看待。
         * 参数2：
         *  可选。在该索引（以 0 为基数）处结束提取字符串。
         *  如果省略该参数，slice会一直提取到字符串末尾。
         *  如果该参数为负数，则被看作是 sourceLength + endSlice。
         */
        StringFunTest2.sliceTest = function () {
            var str = 'The morning is upon us.';
            console.log(str.slice(-3)); // returns 'us.'
            console.log(str.slice(-3, -1)); // returns 'us'
            console.log(str.slice(0, -1)); // returns 'The morning is upon us'
        };
        /**
         * split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，
         * 以将字符串分隔为子字符串，以确定每个拆分的位置。
         * 第一个参数：
         *  指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。
         *  Tip: 如果空字符串("")被用作分隔符，则字符串会在每个字符之间分割。
         * 第二个参数：
         *  一个整数，限定返回的分割片段数量。
         *
         */
        StringFunTest2.splitTest = function () {
            /**
             * 根据指定的分隔符将一个字符串分割成一个字符串数组。
             * 分隔字符串后，该函数依次输出原始字符串信息，被使用的分隔符，
             * 返回数组元素的个数，以及返回数组中所有的元素。
             */
            function splitString(stringToSplit, separator) {
                var arrayOfStrings = stringToSplit.split(separator);
                console.log('The original string is: "' + stringToSplit + '"');
                console.log('The separator is: "' + separator + '"');
                console.log("The array has " + arrayOfStrings.length + " elements: ");
                for (var i = 0; i < arrayOfStrings.length; i++)
                    console.log(arrayOfStrings[i] + " / ");
            }
            var tempestString = "Oh brave new world that has such people in it.";
            var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
            var space = " ";
            var comma = ",";
            splitString(tempestString, space);
            splitString(tempestString);
            splitString(monthString, comma);
            //移出字符串中的空格
            var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
            console.log(names);
            var re = /\s*;\s*/;
            var nameList = names.split(re);
            console.log(nameList);
            //如果 separator 包含捕获括号（capturing parentheses），则其匹配结果将会包含在返回的数组中。
            var myString = "Hello 1 word. Sentence number 2.";
            var splits = myString.split(/(\d)/);
            console.log(splits);
        };
        /**
         * substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。
         * 第一个参数：
         *  开始提取字符的位置。
         *  如果为负值，则被看作 strLength + start,
         *  start 为正值，且大于或等于字符串的长度，则 substr 返回一个空字符串。
         *  start 为负值且 abs(start) 大于字符串的长度，则 substr 使用 0 作为开始提取的索引。
         * 第二个参数：
         *  可选。提取的字符数。
         */
        StringFunTest2.substrTest = function () {
            var str = "abcdefghij";
            console.log("(1,2): " + str.substr(1, 2)); // (1,2): bc
            console.log("(-3,2): " + str.substr(-3, 2)); // (-3,2): hi
            console.log("(-3): " + str.substr(-3)); // (-3): hij
            console.log("(1): " + str.substr(1)); // (1): bcdefghij
            console.log("(-20, 2): " + str.substr(-20, 2)); // (-20, 2): ab
            console.log("(20, 2): " + str.substr(20, 2)); // (20, 2):
        };
        /**
         * substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集,
         * 或从开始索引直到字符串的末尾的一个子集。
         * 第一个参数：
         *  一个 0 到字符串长度之间的整数。
         * 第二个参数：
         *  可选。一个 0 到字符串长度之间的整数。
         *
         * 如果第一个第二个参数相等的话，返回空字符串；
         * 如果省略第二个参数的话，substring 提取字符一直到字符串末尾。
         * 如果任一参数小于 0 或为 NaN，则被当作 0。
         * 如果任一参数大于 stringName.length，则被当作 stringName.length。
         * 果 开始位置 大于 结束位置，则 substring 的执行效果就像两个参数调换了一样。
         */
        StringFunTest2.substringTest = function () {
            var anyString = "Mozilla";
            // 输出 "Moz"
            console.log(anyString.substring(0, 3));
            console.log(anyString.substring(3, 0));
            console.log(anyString.substring(3, -3));
            console.log(anyString.substring(3, NaN));
            console.log(anyString.substring(-2, 3));
            console.log(anyString.substring(NaN, 3));
            // 输出 "lla"
            console.log(anyString.substring(4, 7));
            console.log(anyString.substring(7, 4));
            // 输出 ""
            console.log(anyString.substring(4, 4));
            // 输出 "Mozill"
            console.log(anyString.substring(0, 6));
            // 输出 "Mozilla"
            console.log(anyString.substring(0, 7));
            console.log(anyString.substring(0, 10));
        };
        /**
         * trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符
         * (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。
         */
        StringFunTest2.trimTest = function () {
            var orig = '   foo  ';
            console.log(orig.trim()); // 'foo'
            var orig = 'foo    ';
            console.log(orig.trim()); // 'foo'
        };
        /**
         * valueOf() 方法返回一个String对象的原始值（primitive value）。
         */
        StringFunTest2.valueOfTest = function () {
            var x = new String("Hello world");
            var xx = "Hello world";
            var xxx = x.valueOf();
            console.log(x === xx); //false
            console.log(x === xxx); //false
            console.log(xx === xxx); //true
            //这是基础字符串和字符串对象的差别
        };
        return StringFunTest2;
    }());
    StringFun.StringFunTest2 = StringFunTest2;
    __reflect(StringFunTest2.prototype, "StringFun.StringFunTest2");
})(StringFun || (StringFun = {}));
//# sourceMappingURL=StringFunTest2.js.map