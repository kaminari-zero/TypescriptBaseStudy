var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 正则表达式基本语法规则
 */
var RegexTestForRules = (function () {
    function RegexTestForRules() {
    }
    /**
     * 了解正则中的普通字符:
     * 字母，数字，汉字，下划线及一些没有特殊定义的标点符号，都属于普通字符，
     * 正则中的普通字符，在匹配字符串的时候，匹配与之相同的字符即可~ 比如如下代码：
     */
    RegexTestForRules.normalStrTest = function () {
        var str = "abcde";
        console.log(str.match(/a/)); // ["a", index: 0, input: "abcde"]
    };
    /**
     * 了解正则中的方括号[]的含义:
     * 方括号包含一系列字符，能够匹配其中任意一个字符, 如[abc]可以匹配abc中任意一个字符，
     * 使用[^abc]包含的字符abc，则能够匹配abc字符之外的任何一个字符，只能是一个字符。
     * 如下的含义：
     *  [abc]:  查找在方括号中的任意一个字符；
     *  [^abc]: 查找不在方括号中的任意一个字符；
     *  [a-z]: 查找从小写a到z中的任意一个字符；
     *  (red|blue|green); 查找小括号中的任意一项，小括号中的 | 是或者的意思；
     */
    RegexTestForRules.zhongKuoHaoTest = function () {
        /**
         * 列举1：表达式[bcd][bcd] 匹配 "abcde"时候，匹配成功，内容是bc，
         * 匹配到的位置开始于1，结束与3；如下代码：
         */
        var str = "abcde";
        console.log(str.match(/[bcd][bcd]/)); // ["bc", index: 1, input: "abcde"]
    };
    /**
     * 理解javascript中的元字符:
     * .    查找任意的单个字符，除换行符外
     * \w   任意一个字母或数字或下划线，A_Za_Z0_9,_中任意一个
     * \W   查找非单词的字符，等价于[^A_Za_z0_9_]
     * \d   匹配一个数字字符，等价于[0-9]
     * \D   匹配一个非数字字符，等价于[^0-9]
     * \s   匹配任何空白字符，包括空格，制表符，换行符等等。等价于[\f\n\r\t\v]
     * \S   匹配任何非空白字符，等价于[^\f\n\r\t\v]
     * \b   匹配一个单词边界，也就是指单词和空格间的位置，比如’er\b’可以匹配”never”中的”er”,但是不能匹配”verb”中的”er”
     * \B   匹配非单词边界,’er\B’能匹配’verb’中的’er’,但不能匹配’never’中的’er’
     * \0   查找NUL字符。
     * \n   匹配一个换行符
     * \f   匹配一个换页符
     * \r   匹配一个回车符
     * \t   匹配一个制表符
     * \v   匹配一个垂直制表符
     * \xxx     查找一个以八进制数xxx规定的字符
     * \xdd     查找以16进制数dd规定的字符
     * \uxxxx   查找以16进制数的xxxx规定的Unicode字符。
     */
    RegexTestForRules.metacharacterTest = function () {
        var str = "abcde";
        console.log(str.match(/a.c/)); // ["abc", index: 0, input: "abcde"]
        // 匹配单个字符，找到一个直接返回
        console.log(str.match(/\w/)); // ["a", index: 0, input: "abcde"]
        // 匹配所有字符
        console.log(str.match(/\w+/)); //["abcde", index: 0, input: "abcde"]
        //匹配单个非单词字符
        console.log(str.match(/\W/)); // null
        var str2 = "abcde111";
        //匹配一个非数字字符，等价于[^0-9]
        console.log(/\d/g.exec(str2)); // ["1", index: 5, input: "abcde111"]
        console.log(/\D+/g.exec(str2)); // ["abcde", index: 0, input: "abcde111"]
        var str3 = "Is this all there is?";
        //匹配任何空白字符
        console.log(/\s/g.exec(str3)); // [" ", index: 2, input: "Is this all there is?"]
        console.log(/\S+/g.exec(str3)); // ["Is", index: 0, input: "Is this all there is?"]
        //匹配一个单词边界
        console.log(/\bthis\b/g.exec(str3)); // ["this", index: 3, input: "Is this all there is?"]
        console.log(/\Bhi/g.exec(str3)); // ["hi", index: 4, input: "Is this all there is?"]
        var str4 = "Is this all \nthere is?";
        console.log(/\n/g.exec(str4)); // ["换行符", index: 12, input: "Is this all ↵there is?"]
        var str5 = "Visit W3School. Hello World!";
        //查找一个以八进制数xxx规定的字符
        console.log(/\127/g.exec(str5)); // ["W", index: 6, input: "Visit W3School. Hello World!"]
        //如上代码分析：127的八进制转换为10进制的值等于 1*8的二次方 + 2*8的一次方 + 7*8的0次方 = 64 + 16 + 7 = 87 而W的ASCLL编码转换为10进制也是87，因此打印W
        //查找以16进制数dd规定的字符
        console.log(/\x57/g.exec(str5)); // ["W", index: 6, input: "Visit W3School. Hello World!"]
        //查找以16进制数的xxxx规定的Unicode字符
        console.log(/\u0057/g.exec(str5)); // ["W", index: 6, input: "Visit W3School. Hello World!"]
    };
    /**
     * RegExp特殊字符中的需要转义字符:
     * 需要转义的特殊字符前面加 \
        匹配输入字符串的结尾位置，如果需要匹配匹配输入字符串的结尾位置，如果需要匹配本身的话，使用\$
        ^ 匹配输入字符串的开始位置，匹配^本身的话，使用\^
        * 匹配前面的子表达式的零次或者多次，匹配*本身的话，使用\*
        + 匹配子表达式的1次或者多次，匹配+本身的话，使用\+
        . 匹配除换行符之外的任何一个字符，匹配.本身的话，使用\.
        [ 匹配一个中括号开始，匹配本身的，使用\[
        ? 匹配前面的子表达式的零次或者1次，或指明一个非贪婪限定符，要匹配本身的话，使用\?
        \ 匹配本身的话，请使用\\
        { 标记限定符开始的地方，要匹配{ ,请使用\{
        | 指明多项中的一个选择，可以理解含义为或的意思，匹配本身的话，使用\|
     */
    /**
     * 量词:
     *  n+      匹配任何至少包含一个n的字符串
     *  n*      匹配零个或者多个n的字符串
     *  n?      匹配零个或者1个n的字符串
     *  n{x}    匹配包含x个n的序列字符串
     *  n{x,y}  匹配至少x个，最多y个n的字符串
     *  n{x,}   匹配至少x个的字符串
     *  n$      匹配以n结尾的字符串
     *  ^n      匹配以n开头的字符串
     *  ?=n     匹配其后紧接指定的n字符串
     *  ?!n     匹配其后没有紧接指定的n字符串
     */
    RegexTestForRules.quantifierTest = function () {
        var str = "hello longen";
        // 匹配至少一个或者多个l的字符串
        console.log(str.match(/l+/g)); //["ll", "l"]
        // 匹配至少一个或者多个字母数字或者下划线
        console.log(str.match(/\w+/g)); //["hello", "longen"]
        var str2 = "hello longen hello";
        // 匹配至少零个或者多个l的字符串 
        // 可以匹配多个l或者不匹配l 全局匹配
        console.log(str2.match(/el*/g)); //["ell", "e", "ell"]
        // 可以匹配多个u或者不匹配u 全局匹配
        console.log(str2.match(/hu*/g)); //["h", "h"]
        //n？匹配零个或者1个n的字符串，可以匹配n字符串，也可以只匹配一个n；先尽量匹配，如没有匹配到，就回溯，再进行不匹配；
        // 匹配至少零个或者1个l的字符串 
        console.log(str2.match(/el?/g)); //["el", "e", "el"]
        // 可以匹配1个u或者不匹配u 全局匹配
        console.log(str2.match(/hu?/g)); //["h", "h"]
        //n{x}  匹配包含x个的n的序列字符串。X必须是数字。
        var str3 = "100, 1000 or 10000?";
        // 匹配4个数字的 匹配到1000和10000
        console.log(str3.match(/\d{4}/g)); //["1000", "1000"]
        // 匹配最小3个数字 匹配到100，1000和10000
        console.log(str3.match(/\d{3,}/g)); //["100", "1000", "1000"]
        var str4 = "my name is longen";
        // 匹配以en结尾的字符串
        console.log(str4.match(/en$/g)); //["en"]
        // 匹配以my开头的字符串
        console.log(str4.match(/^my/g)); //["my"]
        // 匹配以na开头的字符串,没匹配到，返回null
        console.log(str4.match(/^na/g)); //null
        // 匹配以na其后紧接m的字符串
        // ?= 只是匹配位置，不会返回值
        console.log(str4.match(/na(?=m)/g)); //["na"]
        // 匹配以na其后不紧接ma的字符串
        // ?! 只是匹配位置，不会返回值
        console.log(str4.match(/na(?!ma)/g)); //["na"]
        console.log(str4.match(/na(?!m)/g)); // null
        var str5 = "longen aaa bbb";
        // ^ 以字符串开始的地方匹配，不匹配任何字符；
        //比如：表达式^aaa 在匹配字符串 “longen aaa bbb”的时候，匹配的结果是失败的；
        //因为^的含义是以某某字符串开始进行匹配；只有当aaa在字符串起始位置才能匹配成功；
        //比如”aaa longen bbb” 才匹配成功；
        console.log(str5.match(/^aaa/g)); //null
        // $ 以字符串结束的地方匹配，不匹配任何字符；
        //比如：表达式aaa在匹配字符串的时候，匹配的结果是失败的；
        //因为在匹配字符串“longenaaabbb”的时候，匹配的结果是失败的；
        //因为的含义是以某某字符串结束进行匹配；只有当aaa在字符串结束位置才能匹配成功；
        //比如”longen bbb aaa” 才匹配成功；
        console.log(str5.match(/aaa$/g)); //null
        // \b 匹配一个单词边界，也就是单词与空格之间的位置，不匹配任何字符；
        // 匹配单词边界的字符
        console.log(str4.match(/\bname\b/g)); //["name"]
        // 如果不是单词边界的地方，就匹配失败
        console.log(str4.match(/\blong\b/g)); // null
        //|  左右两边表达式之间 “或” 关系，匹配左边或者右边。
        var str6 = "hello world";
        // 使用|的含义是 或者 匹配成功 结果为["hello "] 
        //如果再次匹配的话 就是world
        console.log(str6.match(/(hello | world)/g)); // ["hello "]
        //()的含义 
        //在被修饰匹配次数的时候，括号中的表达式可以作为整体被修饰。
        //取匹配结果的时候，括号中的表达式匹配到的内容可以被单独得到。
    };
    /**
     * 贪婪模式与非贪婪模式:
     * Javascript中的正则贪婪与非贪婪模式的区别是：
     * 被量词修饰的子表达式的匹配行为；
     * 贪婪模式在整个表达式匹配成功的情况下尽可能多的匹配；
     * 非贪婪模式在整个表达式匹配成功的前提下，尽可能少的匹配；
     * 一些常见的修饰贪婪模式的量词如下：
        {x,y} ,  {x,} ,  ? ,  * , 和  +
        那么非贪婪模式就是在如上贪婪模式后加上一个?(问号)，就可以变成非贪婪模式的量词；如下：
        {x,y}?，{x,}?，??，*?，和 +?
     */
    RegexTestForRules.greedyOperator = function () {
        var str = "longen<p>我是中国人</p>yunxi<p>我是男人</p>boyboy";
        // 贪婪模式 匹配所有字符
        console.log(str.match(/<p>.*<\/p>/)[0]);
        // <p>我是中国人</p>yunxi<p>我是男人</p>
        // 后面加问号，变成非贪婪模式
        console.log(str.match(/<p>.*?<\/p>/)[0]); // <p>我是中国人</p>
        var str2 = "longen<p>我是中国人</p>yunxi<p>我是男人</p>boyboy<p>我是中国人2</p>yunxi<p>我是男人</p>boyboy";
        // 非贪婪模式1
        console.log(str2.match(/<p>.*?<\/p>boyboy/)[0]);
        //<p>我是中国人</p>yunxi<p>我是男人</p>boyboy
        // 贪婪模式
        console.log(str2.match(/<p>.*<\/p>yunxi/)[0]);
        //<p>我是中国人</p>yunxi<p>我是男人</p>boyboy<p>我是中国人2</p>yunxi
    };
    /**
     * 正则表达式匹配原理：
     * 占有字符和零宽度:
     *  在正则表达式匹配的过程中，如果子表达式匹配到的是字符内容，而非位置的话，
     * 并被保存在匹配的结果当中，那么就认为该子表达式是占有字符的；
     * 如果子表达式匹配的仅仅是位置，或者说匹配中的内容不保存到匹配的结果当中，
     * 那么就认为该子表达式是零宽度的。我们先来理解下零宽度的列子，最常见的就是环视~
     * 它只匹配位置；比如顺序环视；
     *
     * 1）正则匹配方式：
     *  /abc/
        匹配过程：首先由字符a取得控制权，从位置0开始进行匹配，a匹配a,匹配成功；
        接着往下匹配，把控制权交给b，那么现在从位置1开始，往下匹配，匹配到字符串b，
        匹配成功，接着继续往下匹配，位置是从2开始，把控制权交给c，继续往下匹配，
        匹配到字符串c，匹配成功，所以整个表达式匹配成功；
        匹配结果为 abc 匹配的开始位置为0，结束位置为3；
     *
     * 2）含有匹配优先量词的匹配过程：
     *  源字符串abc，正则表达式为ab?c ；量词?可以理解为匹配优先量词，
     * 在可匹配可不匹配的时候，会优先选择匹配；当匹配不到的时候，再进行不匹配。
     * 先匹配b是否存在，如果不存在的话，就不匹配b；因此结果可以匹配的有 abc，ac等
     *
     *  匹配过程：
        首先由字符a取得控制权，从位置0开始匹配，a匹配到字符串a，匹配成功；
        接着继续匹配，把控制权交给b，b现在就从位置1开始匹配；匹配到字符串b，匹配成功；
        接着就把控制权交给c，c从位置2开始继续匹配，匹配字符串c，匹配成功；
        整个表达式匹配成功；
        假如b那会儿匹配不成功的话，它会忽略b，继续匹配字符串c，也就是如果匹配成功的话，结果是ac；
        因此abc匹配字符串abc，匹配的位置从0开始，到3结束。
        如果匹配的结果为ac的话，那么匹配的位置从0开始，到2结束；
        假如我们把字符串改为abd，或者abe等其他的，那么当匹配到最后一个字符的时候，就匹配失败；
     *
     * 3）含有忽略优先量词的匹配过程：
     * 量词?? 含义是 忽略优先量词，在可匹配和可不匹配的时候，会选择不匹配，
     * 这里的量词是修饰b字符的，所以b?? 是一个整体的。
     *
     * 匹配过程如下：
        首先由字符a取得控制权，从位置0开始匹配，有”a”匹配a，匹配成功，控制权交给b?? ;
        首先先不匹配b，控制权交给c，由c来匹配b，匹配失败，此时会进行回溯，
        由b??来进行匹配b，匹配成功，然后会再把控制权交给c，c匹配c，匹配成功，
        因此整个表达式都匹配成功；
     */
    /**
     * 正则表达式----环视：
     * 环视只进行子表达式匹配，不占有字符，匹配到的内容不保存到最终的匹配的结果，
     * 是零宽度的，它匹配的结果就是一个位置；
     * 环视的作用相当于对所在的位置加了一个附加条件，
     * 只有满足了这个条件，环视子表达式才能匹配成功。
     * 环视有顺序和逆序2种，顺序和逆序又分为肯定和否定，因此共加起来有四种；
     * 但是javascript中只支持顺序环视，因此我们这边来绍顺序环视的匹配过程；
     *
     * 如下说明：
        1.  (?=Expression):
        顺序肯定环视，含义是所在的位置右侧位置能够匹配到regexp.
        2. (?!Expression)
        顺序否定环视，含义是所在的位置右侧位置不能匹配到regexp.
     *
     * 1）顺序肯定环视
     * 源字符串：a12
     * 正则：^(?=[a-z])[a-z0-9]+$
     *
     * 首先我们需要明白的是：^和$ 是匹配的开始和结束位置的；
     * ?= 是顺序肯定环视，它只匹配位置，不会占有字符，因此它是零宽度的。
     * 这个正则的含义是：
     *  以字母或者数字组成的，并且第一个字符必须为小写字母开头；
     *
     * 匹配过程如下：
        首先由元字符^取得控制权，需要以字母开头，接着控制权就交给
        顺序肯定环视 (?=[a-z]); 它的含义是：
        要求它所在的位置的右侧是有a-z小写字母开头的才匹配成功，字符a12，第一个字符是a，
        因此匹配成功；我们都知道环视都是匹配的是一个位置，不占有字符的，是零宽度的，
        因此位置是0，把控制权交给[a-z0-9]+,它才是真正匹配字符的，
        因此正则[a-z0-9]+从位置0开始匹配字符串a12，且必须以小写字母开头，
        第一个字母是a匹配成功，接着继续从1位置匹配，是数字1，也满足，继续，数字2也满足，
        因此整个表达式匹配成功；最后一个$符合的含义是以字母或者数字结尾的；
     *
     * 2）顺序否定环视
     *  当顺序肯定环视匹配成功的话，顺序否定环视就匹配失败，当顺序肯定环视匹配失败的话，
     * 那么顺序否定环视就匹配成功；
     *
     * 源字符串：aa<p>one</p>bb<div>two</div>cc
     * 正则：<(?!/?p\b)[^>]+>
     * 正则的含义是：匹配除<p>之外的其余标签；
     *
     * 匹配过程如下：
     * 首先由”<” 取得控制权，从位置0开始匹配，第一个位置和第二个位置都是字符a，
     * 因此匹配失败~ 接着从位置2匹配，匹配到<， 匹配成功了，现在控制权就交给(?!/?p\b)；
     * ?!是顺序否定环视，只匹配一个位置，不匹配字符，这个先不用管，首先是 /? 取得控制权，
     * 它的含义是：可匹配/,或者不匹配/, 接着往下匹配的是p字符，匹配失败，进行回溯，
     * 不匹配，那么控制权就到一位了p字符，p匹配p，匹配成功，控制权就交给\b;
     * \b的含义是匹配单词的边界符，\b就匹配到了 > ，结果就是匹配成功，子表达式匹配就完成了；
     * /?p\b 就匹配成功了；所以(?!/?p\b) 这个就匹配失败了；从而使表达式匹配失败；
     * 我们继续往下匹配，从b字符开始，和上面一样匹配失败，
     * 当位置是从14开始的时候 < 字符匹配到”<”，匹配成功，把控制权又交给了(?!/?p\b)，
     * 还是/?取得控制权，和上面匹配的逻辑一样，最后?p\b匹配失败了，
     * 但是(?!/?p\b) 就匹配成功了，因此这一次表达式匹配成功；
     * 如下代码匹配：
     */
    RegexTestForRules.OrderToLookAroundTest = function () {
        var str2 = "a12";
        //顺序肯定环视（具体解析如上）
        console.log(str2.match(/^(?=[a-z])[a-z0-9]+$/));
        var str2 = "aa<p>one</p>bb<div>two</div>cc";
        //顺序否定环视（具体解析如上）
        // 匹配的结果为div，位置从14开始 19结束
        console.log(str2.match(/<(?!\/?p\b)[^>]+>/)[0]);
    };
    return RegexTestForRules;
}());
__reflect(RegexTestForRules.prototype, "RegexTestForRules");
//# sourceMappingURL=RegexTestForRules.js.map