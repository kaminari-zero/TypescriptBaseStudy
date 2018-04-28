namespace StringFun{
    export class StringFunTest{

        /**
         * javascript 基本字符串方法
         */
        public static StringBaseTest(){
            //长字符串
            //使用+号拼接
            let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";
            console.log(longString);
            /**
             * 可以在每行末尾使用反斜杠字符（“\”），以指示字符串将在下一行继续。
             * 确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。
             */
            let longString2 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
            console.log(longString2);


            //从字符串中获取单个字符
            //两种方式：
            console.log('cat'.charAt(1));
            //使用括号访问字符串不可以对其进行删除或添加，因为字符串对应未知的属性并不是可读或配置的。
            console.log('cat'[1]);


            //比较字符串
            //在 JavaScript 中，你只需要使用比较操作符(>/</>=/<=),
            //首先比较的是首字母的顺序（小写比大写达），若相等然后接着后面依次
            var a = "Ab";
            var b = "Ab";
            if (a < b) // true
                console.log(a + " is less than " + b);
            else if (a > b)
                console.log(a + " is greater than " + b);
            else
                console.log(a + " and " + b + " are equal.");

            
            //基本字符串和字符串对象的区别
            /**
             * 字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法
             * (没有通过 new 生成字符串对象实例)的字符串都是基本字符串。
             * 
             * JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串可转化为字符串对象
             * 之后才可以使用字符串对象的方法。当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候
             * (基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。
             */
            var s_prim = "foo";
            var s_obj = new String(s_prim);

            console.log(typeof s_prim); // Logs "string"
            console.log(typeof s_obj);  // Logs "object"

            //当使用 eval时，基本字符串和字符串对象也会产生不同的结果。eval 会将基本字符串作为源代码处理; 而字符串对象则被看作对象处理, 返回对象。 
            var s1 = "2 + 2";               // creates a string primitive
            var s2 = new String("2 + 2");   // creates a String object
            console.log(eval(s1));      // returns the number 4
            // console.log(eval(s2));      // ts 报错，不允许基本字符串意外的参数
            //解决方法:利用 valueOf 方法，我们可以将字符串对象转换为其对应的基本字符串。
            console.log(eval(s2.valueOf()));

            //将其他值转换成字符串
            //使用 String() 方法将其它对象转化为字符串可以被认为是一种更加安全的做法，
            //虽然该方法底层使用的也是 toString() 方法，但是针对 null/undefined/symbols，String() 方法会有特殊的处理：
            console.log(String(4444));
            console.log(String(null));
            // console.log(null);
            console.log(String(undefined));
            // console.log(String(symbols));
        }


        /**
         * charAt() 方法从一个字符串中返回指定的字符。
         * 范围：(0~length-1)
         * 如果指定的 index 值超出了该范围，则返回一个空字符串。
         */
        public static charAtTest(){
            var anyString = "Brave new world";

            console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
            console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
            console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
            console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
            console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
            console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
        }

        /**
         * charCodeAt() 方法返回0到65535之间的整数
         * Unicode 编码单元（code points）的范围从 0 到 1,114,111（0x10FFFF）。
         * 开头的 128 个 Unicode 编码单元和 ASCII 字符编码一样。
         * 注意，charCodeAt 总是返回一个小于 65,536 的值。
         * 因此，为了查看或复制（reproduce）65536 及以上编码字符的完整字符，
         * 需要在获取 charCodeAt(i) 的值的同时获取 charCodeAt(i+1) 的值。
         * 
         * "ABC".charCodeAt(0) // returns 65
         */

        /**
         * es6支持：
         * codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。
         * 高位编码单元（higher code point）使用一对（低位编码（lower valued））
         * 代理伪字符（"surrogate" pseudo-characters）来表示，从而构成一个真正的字符。
         * 例如：'\uD87E\uDC04'  你
         * 
         * '\uD800\uDC00'.codePointAt(0); // 65536
         */

        /**
         * 获取所有字符
         * 确保通过字符串循环总是提供整个字符的方法，即使该字符串包含不在基本多文种平面（BMP）中的字符。
         */
        public static getAllChatTest(){
            var str = 'A \uD87E\uDC04 Z'; // 我们可以直接使用非BMP字符
            for (var i=0, chr; i < str.length; i++) {
                if ((chr = getWholeChar(str, i)) === false) {
                    continue;
                }
                //在每个循环的顶部调整这一行，传递整个字符串和当前的迭代，并返回一个变量来表示单个字符

                console.log(chr);
            }

            function getWholeChar (str, i) {
                var code = str.charCodeAt(i);     
                if (isNaN(code)) {
                    return ''; // 未找到位置
                }
                if (code < 0xD800 || code > 0xDFFF) {
                    return str.charAt(i);
                }

                // High surrogate (could change last hex to 0xDB7F to treat high private
                // surrogates as single characters)
                if (0xD800 <= code && code <= 0xDBFF) { 
                    if (str.length <= (i+1))  {
                        throw 'High surrogate without following low surrogate';
                    }
                    var next = str.charCodeAt(i+1);
                    if (0xDC00 > next || next > 0xDFFF) {
                        throw 'High surrogate without following low surrogate';
                    }
                    return str.charAt(i)+str.charAt(i+1);
                }
                // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
                if (i === 0) {
                    throw 'Low surrogate without preceding high surrogate';
                }
                var prev = str.charCodeAt(i-1);
                
                // (could change last hex to 0xDB7F to treat high private
                // surrogates as single characters)
                if (0xD800 > prev || prev > 0xDBFF) { 
                    throw 'Low surrogate without preceding high surrogate';
                }
                // We can pass over low surrogates now as the second component
                // in a pair which we have already processed
                return false; 
            }
        }

        /**
         * 修复charAt以支持非基本多文种平面（BMP）字符
         * 上面的例子对于那些希望支持非BMP字符的用户可能更有用
         * （因为它不要求调用者知道任何非BMP字符可能出现在哪里），
         * 在人们希望的情况下，在选择字符 通过索引，将字符串中的替代对作为它们表示的单个字符，
         * 可以使用以下：
         */
        public static fixedCharAtTest(){
            var str = 'A \uD87E\uDC04 Z'; // 我们可以直接使用非BMP字符
            console.log(str);
            for (var i=0, chr; i < str.length; i++) {
                if (!(chr = fixedCharAt(str, i))) {
                    continue;
                }
                console.log(chr);
            }

            function fixedCharAt(str, idx) {
                var ret = '';
                str += '';
                var end = str.length;

                var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                while ((surrogatePairs.exec(str)) != null) {
                    var li = surrogatePairs.lastIndex;
                    if (li - 2 < idx) {
                        idx++;
                    } else {
                        break;
                    }
                }

                if (idx >= end || idx < 0) {
                    return '';
                }

                ret += str.charAt(idx);

                if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx+1))) {
                    // Go one further, since one of the "characters" is part of a surrogate pair
                    ret += str.charAt(idx+1); 
                }
                return ret;
            }
        }
    }
}