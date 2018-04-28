var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 正则表达式基本语法规则2:捕获组，反向引用
 */
var RegexTestForRules2 = (function () {
    function RegexTestForRules2() {
    }
    /**
     * 正则表达式---捕获组：
     * 捕获组就是把正则表达式中子表达式匹配的内容，保存到内存中以数字编号或显示命名的组里，
     * 方便后面使用；可以在正则表达式内部使用，也可以在外部使用；
     *
     * 捕获组有2种，一种是捕获性分组，另一种是 非捕获性分组；
     */
    /**
     * 中括号是表示范围内选择，
     * 大括号表示重复次数，
     * 小括号的含义是允许重复多个字符；
     *
     * 捕获组分组语法：
     * 捕获性分组的编号规则：编号是按照”(”出现的顺序，从左到右，从1开始进行编号；
     *
     * 反向引用
     * 反向引用标识由正则表达式中的匹配组捕获的子字符串。
     * 每个反向引用都由一个编号或名称来标识；并通过 ”\编号” 表示法来进行引用；
     */
    RegexTestForRules2.CaptureGroupTest = function () {
        // 分组的列子
        console.log(/(longen){2}/.test("longen")); // false
        console.log(/(longen){2}/.test("longenlongen")); //true
        // 分组的运用 RegExp.$1 获取小括号的分组
        var str = 11122;
        /(\d+)/.test(str);
        console.log(RegExp.$1); // 11122
        // 使用replace替换 使用分组 把内容替换
        var num = "11 22";
        var n = num.replace(/(\d+)\s*(\d+)/, "$2 $1");
        console.log(n); // 22 11
        // 反向引用
        console.log(/(longen)\1/.test("longen")); // false
        console.log(/(longen)\1/.test("longenlongen")); // true
    };
    /**
     * 非捕获性分组：
     *  并不是所有分组都能创建反向引用，有一种分组叫做非捕获性分组，它不能创建反向引用，
     * 要创建一个非捕获性分组，只要在分组的左括号的后面紧跟一个问号与冒号就ok；
     * 非捕获分组的含义我们可以理解为如下：
     * 子表达式可以作为被整体修饰但是子表达式匹配的结果不会被存储；
     */
    RegexTestForRules2.UnCaptureGroupTest = function () {
        // 非捕获性分组
        var num2 = "11 22";
        /#(?:\d+)/.test(num2);
        console.log(RegExp.$1); //""
        // 我们再来看下使用 非捕获性分组来把页面上的所有标签都去掉，如下代码：
        // 把页面上所有的标签都移除掉
        var html = "<p><a href='http://baidu.com'>我来测试下</a>by <em>龙恩</em></p>";
        var text = html.replace(/<(?:.|\s)*?>/g, "");
        console.log(text); // 我来测试下by 龙恩
        /**
         * 如上：我们来分析下：正则/<(?:.|\s)*?>/g 的含义是：
         * g是修饰符，全局匹配的含义；使用非捕获性分组?:
         * 的含义是 子表达式可以作为被整体修饰但是子表达式匹配的结果不会被存储；
         * 因此：正则/<(?:.|\s)*?>/g 的含义变为：匹配以< 开头 及 > 结束的所有字符；
         * (?:.|\s)*? 含义是：. 代表任意字符，| 含义是或者的意思，\s 是匹配空格的意思；
         * *号修饰符的含义是零个或者多个的意思；后面的?（问号）代表可匹配，可不匹配的含义；
         * 优先是可匹配；
         * 总起来的意思是：
         * 全局匹配字符串html 中的 以<开头 以>结尾的所有字符 替换成 空字符串，
         * 因此留下来就是文本；当然我们使用捕获性分组也可以得到同样的结果~
         */
    };
    /**
     * 反向引用详细讲解:
     * 捕获性分组取到的内容，不仅可以在正则表达式外部通过程序进行引用，
     * 也可以在正则表达式内部进行引用，这种引用方式就叫做反向引用。
     *
     * 反向引用的作用是：是用来查找或限定重复，查找或限定指定标识配对出现等。
     *
     * 捕获性分组的反向引用的写法如：\number
     * Number是十进制数字，即捕获组的编号。
     *
     * 反向引用的匹配原理:
     *  捕获分组在匹配成功时，会将子表达式匹配到的内容，保存到内存中一个以数字编号的组里，
     * 可以简单的认为是对一个局部变量进行了赋值，这时就可以通过反向引用，
     * 引用这个局部变量的值。一个捕获分组在匹配成功之前，它的内容可以是不确定的，
     * 一旦匹配成功了，它的内容就确定了，反向引用的内容也就确定了。
     */
    RegexTestForRules2.ReverseReferenceTest = function () {
        var str = "longenaabcd";
        console.log(str.match(/([ab])\1/)[0]); //aa
        /**
         * 码分析：对于如上代码中的正则 /([ab])\1/, 捕获组中子表达式[ab]；
         * 可以匹配a，也可以匹配b，但是如果匹配成功的话，那么它的反向引用也就确定了，
         * 如果捕获分组匹配到的是a，那么它的反向引用就只能匹配a，
         * 如果捕获分组匹配到的是b，那么它的反向引用就只能匹配到b；
         * \1的含义是 捕获分组匹配到是什么，那么它必须与捕获分组到是相同的字符；
         * 也就是说 只能匹配到aa或者bb才能匹配成功；
         *
         * 该正则匹配的过程我们可以来分析下：
         * 字符串匹配正则/([ab])\1/, 在位置0处开始匹配，0处字符是l，很明显不满足，
         * 把控制权就交给下一个字符，一直到第6个字符，才匹配到a，
         * 匹配成功，把控制权交给\1, 也就是反向引用和分组中是相同的字符，
         * 因此也匹配a，字符串中下一个字符也是a，因此匹配成功，
         * 因此整个表达式找到匹配的字符，匹配的位置开始于6，结束与8；
         * 我们再可以匹配b，原理和上面一样，这里就不再多解释了；
         */
    };
    /**
     * 将字符串转换成正则表达式
     */
    RegexTestForRules2.StringConvRegexTest = function () {
        var strReg = "/Hello/i";
        var strReg2 = "//Hello//i";
        var strReg3 = "Hello";
        var str = "hello hello world";
        //第一种方式：直接使用new RegExp创建一个新的正则表达式对象
        //注意：他会给正则表达式自动生成// ，并且会将/字符都做转义\/，
        //需要加上标记，在第二个参数放入标记
        // 标记：g ：全文查找；i ：忽略大小写；m：多行查找
        var regex = new RegExp(strReg); //错误写法   /\/Hello\/i/
        var regex2 = new RegExp(strReg2); //错误写法 /\/\/Hello\/\/i/
        var regex3 = new RegExp(strReg3); //正确写法     /Hello/
        var regex5 = new RegExp(strReg3, "i"); //正确写法 /Hello/i
        console.log(regex, regex2, regex3, regex5);
        //第二种方式：使用eval,可将字符串正则表达式变成正则表达式
        var strReg4 = '//Hello//i';
        //如果是后台传的正则表达式多数是上面这种形式，会有两个//（不知为啥，反正根据需要将该字符串变成一个正则表达式的格式就行了）
        strReg4 = strReg4.replace(/\/\//g, "\/");
        // console.log(strReg4);
        var re = eval(strReg4); //转成正则
        // console.log(re);
        console.log(str.match(/Hello/i)); // ["hello", index: 0, input: "hello hello world"]
        console.log(str.match(str)); // ["hello hello world", index: 0, input: "hello hello world"]
        console.log(str.match(regex)); // null
        console.log(str.match(regex2)); // null
        console.log(str.match(regex3)); // null
        console.log(str.match(regex5)); // ["hello", index: 0, input: "hello hello world"]
        console.log(str.match(re)); // ["hello", index: 0, input: "hello hello world"]
    };
    /**
     *  g ：全文查找
     */
    RegexTestForRules2.QuanWenSearchTest = function () {
        var reg = /\d/;
        var str1 = "AAA9BBBB2CCCC3DDDD";
        console.log(str1.replace(reg, "--")); //AAA--BBBBCCCCDDDD
        //用--替换字符串中数字，但结果发现却只替换掉了第一个，因为reg默认匹配第个
        //那么要替换所有的数字，需要在reg后面加个全部的参数 g            
        var reg = /\d/g;
        var str1 = "AAA9BBBB2CCCC3DDDD";
        console.log(str1.replace(reg, "--")); //AAA--BBBB--CCCC--DDDD
    };
    /**
     * i ：忽略大小写
     */
    RegexTestForRules2.HuLueDaXiaoXieTest = function () {
        var reg = /a/i;
        var str1 = "AAA9BBBB2CCCC3DDDD";
        console.log(str1.replace(reg, "--")); // AAA9BBBB2CCCC3DDDD           
        var reg = /a/;
        var str1 = "AAA9BBBB2CCCC3DDDD";
        console.log(str1.replace(reg, "--")); //--AA9BBBB2CCCC3DDDD
    };
    /**
     * m：多行查找(默认是非贪婪模式)
     */
    RegexTestForRules2.HuangHangSearchTest = function () {
        //例：全文查找        替换所有的A
        var reg = /A/g;
        var str1 = "AAA9BBBB2CCCCAAAA3DDDD";
        console.log(str1.replace(reg, "-")); // ---9BBBB2CCCC----3DDDD
        //例：多行查找        
        var reg = /A/m;
        var str1 = "AAA9BBBB2CCCCAAAA3DDDD";
        console.log(str1.replace(reg, "-")); // -AA9BBBB2CCCCAAAA3DDDD
        //多行查找一般用于有换行的字符中
        var reg = /^A/;
        var str1 = "BBBB9BBBB2CCCC\r\nAAAA3DDDD";
        console.log(str1.replace(reg, "-"));
        //BBBB9BBBB2CCCC
        //AAAA3DDDD
        //字符串里有个换行符当正则匹配第一行后就结束了,所以这里就引用了换符符的功能
        var reg = /^A/m;
        var str1 = "BBBB9BBBB2CCCC\r\nAAAA3DDDD";
        console.log(str1.replace(reg, "-"));
        //BBBB9BBBB2CCCC
        //-AAA3DDDD 
        //总结全文查找的范围大于多行查找
    };
    return RegexTestForRules2;
}());
__reflect(RegexTestForRules2.prototype, "RegexTestForRules2");
//# sourceMappingURL=RegexTestForRules2.js.map