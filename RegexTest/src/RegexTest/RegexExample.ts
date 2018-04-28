class RegexExample{

    /**
     * 匹配以数字结尾的:
     */
    public static IsNumberWithEndTest(){
        var regex = /\d+$/g;
        console.log(regex.test("fajdsfa1")); //true
        console.log(regex.test("12645fd")); //false
    }

    /**
     * 去掉空格
     */
    public static SpaceDelTest(){
        var str = "我 是 龙 恩";
        console.log(str.replace(/\s+/g,""));//我是龙恩
    }

    /**
     * 电话号码正则
     */
    public static IsPhoneTest(){
        //分析如下：
        //电话号码有区号(3-4位数字)，区号之后使用 ”-” 与电话号码连接，正则：^\d{3,4}
        //电话号码7~8位，正则：\d{7,8}
        //电话号码也有分机号，分机号为3-4位数字，非必填项，如果要填写的话，则以”-”与电话号码相连接，正则：(-\d{3,4})?。
        var regex = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
        console.log(regex.test("0759-2520080")); //true
        console.log(regex.test("2520080")); //false

        //前面的区号可以不存在（不写）
        var regex2 = /^(\d{3,4}-)?\d{7,8}(-\d{3,4})?$/;
        console.log(regex2.test("0759-2520080")); //true
        console.log(regex2.test("2520080")); //true
        console.log(regex2.test("2520080000")); //false
    }

    /**
     * 手机号码正则
     */
    public static IsTelPhoneTest(){
        var str:any = 15606512345;
        //手机号码需要匹配；手机号码开头不以0开始的，并且是11位数字，
        //目前的手机号码有如下开头的：13,14,15,17,18开头的；因此正则如下：
        var reg = /(^1[3|4|5|7|8][0-9]{9}$)/;
        console.log(reg.test(str)); //true
    }

    /**
     *  删除字符串左右空格
     */
    public static TrimTest(){
        var str1 = " 1234 ";
        /*
        * 下面的正则的含义是以1个或者多个空白开头的
        * | 是或者的意思 或者以1个或者多个空白结尾的
        * 也就是去掉头部和尾部的1个或者多个空格
        */
        var regex = /^\s+|\s+$/g;
        console.log(str1.replace(regex,'')); // 输出去掉空格的 1234
    }

    /**
     * 限制文本框只能输入数字和小数点(二位小数点)
     */
    public static InputNumberTest(){
        //分析：开头有0个或者多个数字，中间有0个或者1个小数点，小数点后面有0个或者最多2个数字；
        var reg = /^\d*\.?\d{0,2}$/;
        var str1:any = .9;
        console.log(reg.test(str1)); // true

        var str2:any = 1.99;
        console.log(reg.test(str2)); // true

        var str3 = "1a.99";
        console.log(reg.test(str3)); // false
    }

    /**
     * 替换小数点前面的内容为指定内容
     */
    public static ReplacePointContentTest(){
        var href = "aa.php?d=1";
        var reg = href.replace(/\b^(\w*)(?=\.)/,"bb");
        console.log(reg); // bb.php?d=1
        /**
         * 代码分析如下：
         * 如上代码的含义是 使用正则replace替换操作找出以字母数字下划线开头的字符，
         * 前面以\b分隔单词与边界的地方因此会找出第一个字符串中第一个开头的字符,
         * 后面是以捕获性分组来匹配后面紧跟着一个.号的匹配，
         * 分组只匹配位置，不匹配字符，是零宽度的；
         */
    }

    /**
     * 匹配中文的正则
     */
    public static IsChineseTest(){
        //使用 Unicode，必须使用\u开头，接着是字符编码的四位16进制表现形式。
        var regex = /[\u4E00-\u9FA5\uf900-\ufa2d]/g;
        console.log(regex.test("我是")); //true
    }

    /**
     *  返回字符串中 中文字符的个数
     */
    public static GetChineseCharTest(){
        //分析:使用replace方法把不是中文字符全部替换成空,返回被替换的字符，因此剩下是中文字符；
        var str = "111我是涂根华说得对aaaaa1234556";
        var reg = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g;
        var val = str.replace(reg,'');
        console.log(val); // 我是涂根华说得对
        console.log(val.length); // 长度为 8
    }

    /**
     * 正则获取ip地址的前三段
     */
    public static IPTset(){
        /**
         * 比如如:192.168.16.162 需要变成 192.168.16
         * 分析：使用正则匹配 .号后面带1-3位数字即可，
         * 且以数字结尾的，把他们替换成空字符串。
         */
        var ip = "192.168.16.162";
        console.log(ip.replace(/\.\d{1,3}$/,""));// 192.168.16
    }

    /**
     *  匹配标签中的内容
     */
    public static ReplaceLableContentTest(){
        /**
         * 分析： 想获取ul中的内容，可以对匹配的内容使用分组然后打印RegExp.$1 
         * 就获取到分组的内容了; 匹配所有字符使用[\s\S]+ 空白和非空白的所有字符，
         * 且使用修饰符g代表全局的
         */
        var str2 = "<ul><li>aaa</li><li>bbb</li></ul>";
        var regex = /<ul>([\s\S]+?)<\/ul>/g;
        str2.match(regex);
        console.log(RegExp.$1); //<li>aaa</li><li>bbb</li>
    }

    /**
     * 匹配标签中的文本
     */
    public static GetLableTextTest(){
        //匹配文本思路：可以先把字符串内的所有标签替换成空字符串,因此返回的就是文本了；
        var str3 = "<ul><li>aaa</li><li>bbb</li></ul>";
        var regex = /<\/?[\s\S]+?>/gi;
        var c = str3.replace(regex,"");
        console.log(c); // aaabbb
    }

    /**
     * 从路径中获取文件名
     */
    public static GetFileNameTest(){
        var s1 = "c:\\images\\tupian\\006.jpg",
        s2 = "c:\\images\\tupian\\aa.jpg",
        s3 = "c:/images/tupian/test2.jpg",
        s4 = "C:\006.JPG",
        s5 = "c:\images\tupian\006.jpg";

        /**
         * 正则含义是：[^\\\/]* 不以一个\ 或者 2个\\ 
         * 或者 /(需要转义,使用\)这样的反斜杠开头的零个或者多个字符,
         * 后面紧跟以一个\ 或者 两个\\ 或者 /(需要转义，使用\)这样一个
         * 或者多个分隔符全局匹配；
         */
        function getFileName(str){
            var reg = /[^\\\/]*[\\\/]+/gi;
            str = str.replace(reg,'');
            return str;
        }
        console.log(getFileName(s1)); // 006.jpg
        console.log(getFileName(s2)); // aa.jpg
        console.log(getFileName(s3)); // test2.jpg
        //下面这两个形式不太理想，因为\没有被转义
        console.log(getFileName(s4)); // C:.JPG
        console.log(getFileName(s5)); // c:images	upian.jpg
    }

    /**
     * 绝对路径变成相对路径
     */
    public static GetPathConvertTest(){
        /**
         * 比如绝对路径 http://172.16.28.162/images/a.jpg 需要替换成./images/a.jpg 
         * 使用正则匹配 http:// //需要使用转义字符转义的 继续匹配除/以外的任何一个字符
         * 直到有反斜杠/为止；然后替换成 . 字符
         */
        var reg = /http:\/\/[^\/]+/g;
        var r1 = "http://172.16.28.162/images/a.jpg";
        console.log(r1.replace(reg,'.')); // ./images/a.jpg
    }

    /**
     * 用户名正则
     */
    public static IsUserNameTest(){
        //匹配规则：只能是中文，英文，数字，下划线，4-16个字符；
        var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d\w]{4,16}$/;
        var str = "我是12345678aa_123";
        console.log(reg.test(str)); // true
        var str = "我是12345678aa_1235";
        console.log(reg.test(str)); // 17位 false
    }

    /**
     *  匹配英文地址
     */
    public static IsEnglishPathTest(){
        //匹配规则：包含点，字母，空格，逗号，数字，但是开头和结尾必须为字母
        var reg = /^[a-zA-Z][\.a-zA-Z\s,0-9]*?[a-zA-Z]+$/;
        var str1 = "11aa";
        console.log(reg.test(str1)); // false
        var str2 = "aa111aaa";
        console.log(reg.test(str2)); // true
    }

    /**
     * 匹配价格
     */
    public static IsPriceTest(){
        //匹配规则: 开头有0个或者多个数字，中间可能有一个小数点，后面有可能有0-2位小数
        var reg = /^\d*(\.\d{0,2})?$/
        var num1:any = 12;
        console.log(reg.test(num1)); // true
        var num2:any = .01;
        console.log(reg.test(num2)); // true
        var num3:any = 1.01;
        console.log(reg.test(num3)); // true
        var num4:any = "1.aa1";
        console.log(reg.test(num4)); //false
        var num5:any = "1.1a";
        console.log(reg.test(num5)); //false
    }

    /**
     * 身份证号码的匹配
     */
    public static IsIDCardTest(){
        //匹配规则：身份证号码有15位或者18位，其中最后一位可能是X，其他全是数字
        var reg = /^(\d{14}|\d{17})(\d|[xX])$/;
        var identity1 = "36232919578996x";
        console.log(reg.test(identity1)); // true
        var identity2 = "36232919578996a";
        console.log(reg.test(identity2)); // false
        // 16位
        var identity3 = "362329195789961x";
        console.log(reg.test(identity3)); // false
    }

    /**
     * 单词的首字母大写
     */
    public static FirstLetterTest(){
        //匹配字符串，让其字符串的首个字母大写
        function replaceReg(reg,str) {
            // 先转换为小写
            str = str.toLowerCase();
            return str.replace(reg,function(m){
                return m.toUpperCase();
            });
        }

        var reg = /\b(\w)|\s(\w)/g;
        var str = "aadfdfCC";
        console.log(replaceReg(reg,str)); // Aadfdfcc
    }

    /**
     *  验证日期格式
     */
    public static IsDataTest(){
        //日期格式有2种 第一种是yyyy-mm-dd 或 yyyy/mm/dd
        //分析:月和天数可以有1位或者2位
        var reg = /^\d{4}[-\/]\d{1,2}[-\/]\d{1,2}$/;
        var d1 = "2015-12-1";
        console.log(reg.test(d1)); //true
        var d2 = "2015-12-02";
        console.log(reg.test(d2)); //true
        var d3 = "2015/12/12";
        console.log(reg.test(d3)); // true
    }

    /**
     * 验证邮箱的正则表达式
     */
    public static EmailTest(){
        //思路分析: 邮箱的规则是: 由3部分组成
        //由1个或者多个字母数字下划线和杠 + @ + 1个或者多个字母数字下划线和杠 + . + 1个
        //或者多个字母数字下划线和杠
        var reg = /^([a-zA-Z_0-9-])+@([a-zA-Z_0-9-])+(\.[a-zA-Z_0-9-])+/;
        var email1 = "tugenhua@126.com";
        console.log(reg.test(email1)); //true
        var email2 = "879083421_aaAA@qqAAzz_AA.comaaa";
        console.log(reg.test(email2)); // true
    }

    /**
     *  匹配代码中的a链接
     */
    public static ALinkTest(){
        //比如<a href='http://www.baidu.com'>222</a> 匹配这样的
        var reg = /<a[.\s]*href\s*=\s*'http:\/\/.*'>\w*<\/a>/gi;
        var html = "<div><a href='http://www.baidu.com'>222</a><p>344</p></div>";
        console.log(html.match(reg)); // ["<a href='http://www.baidu.com'>222</a>"]
        var html2 = "<div><a href='http://www.baidu.com'>222</a><p>344</p><a href='http://www.baidu2.com'>333</a></div>";
        console.log(html2.match(reg)); //["<a href='http://www.baidu.com'>222</a><p>344</p><a href='http://www.baidu2.com'>333</a>"]
    }

    /**
     * 正则判断标签是否闭合
     */
    public static IsLableCloseTest(){
        var reg = /<([a-z]+)(\s*\w*?\s*=\s*".+?")*(\s*?>[\s\S]*?<\/\1>)|\s*\/>/i;
        var str1 = "<img src='aa' />";
        var str2 = "<div></div>";
        console.log(reg.test(str1));  // true
        console.log(reg.test(str2));  // true

        var str3 = "<img src='bb'";
        console.log(reg.test(str3)); // false

        var str4 = "<div>aaa";
        console.log(reg.test(str4)); // false

        //但是如上正则对下面的这个demo列子就不适用了；相同的标签嵌套没有闭合的情况下 如下
        var str5  = "<div><div>aaa</div>";
        console.log(reg.test(str5)); // true 实际上是false 因为有没有闭合标签
    }

    /**
     * 获取标签里面的内容
     */
    public static GetLableContentTest(){
        var str = "<div>111</div>";
        str.match(/<([a-z]+)(\s*\w*?\s*=\s*".+?")*\s*?>([\s\S]*?)<\/\1>/);
        console.log(RegExp.$3);  // 111
    }

    /**
     * 正则判断是否为数字和字母的混合
     */
    public static IsNumAndCharTest(){
        //规则：字母和数字的混合
        var reg = /^(([a-z]+)([0-9]+)|([0-9]+([a-z]+)))[a-z0-9]*$/i;
        var str1 = "aaaa";
        var str2 = "aa22";
        var str3 = "111sddtr";
        var str4 = "问问啊啊啊ass";
        var str5 = "1111ssdsd111sasddas";

        console.log(reg.test(str1));  //false
        console.log(reg.test(str2));  // true
        console.log(reg.test(str3));  // true
        console.log(reg.test(str4));  // false
        console.log(reg.test(str5));  // true
    }

    /**
     * 将阿拉伯数字转换为中文大写字符
     */
    public static NumConvChineseTest(){
        var arrs = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];

        function replaceReg2(reg,str){
            return str.replace(reg,function(m){return arrs[m];})
        }

        var reg = /\d/g;
        var str1 = '13889294444';
        var str2 = '12889293333';
        var str3 = '23445567';

        console.log(replaceReg2(reg,str1)); // 壹叁捌捌玖贰玖肆肆肆肆
        console.log(replaceReg2(reg,str2)); // 壹贰捌捌玖贰玖叁叁叁叁
        console.log(replaceReg2(reg,str3)); // 贰叁肆肆伍伍陆柒
    }

    /**
     * 替换文本中的url为链接
     */
    public static ReplaceURLForLinkTest(){
        //比如一段文本中有 aaaaahttp://www.baidu.combbbbb 需要替换成 
        //aaaaa<a href="http://www.baidu.com">http://www.baidu.com</a>bbbbb
        var str1 = "aaaaahttp://www.baidu.com bbbbb";
        //分析：最主要的还是需要正则匹配http://www.baidu.com 的url
        //var reg = /http:\/\/\w*(\.\w)+/ig;
        var reg = /http:\/\/\w*(\.\w*)+/ig;

        function replaceUrl(reg,str) {
            return str.replace(reg,function(r){
                return "<a href='"+r+"'>"+r+"</a>";
            });

        }

        console.log(replaceUrl(reg,str1)); 
        // aaaaa<a href='http://www.baidu.com'>http://www.baidu.com</a> bbbbb
    }
}