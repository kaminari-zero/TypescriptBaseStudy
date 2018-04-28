var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ListExample;
(function (ListExample) {
    var List = (function () {
        function List() {
            /**
             * 列表的元素个数
             */
            this.listSize = 0;
            /**
             * 列表的当前位置
             */
            this.pos = 0;
            /**
             * 初始化一个空数组来保存列表元素
             */
            this.dataStore = [];
        }
        /**
         * 返回列表中元素的个数
         */
        List.prototype.length = function () {
            return this.listSize;
        };
        /**
         * 清除列表中的所有元素
         */
        List.prototype.clear = function () {
            //将dataStore清空
            //方式一：
            //delete 删除数组dataStore，再重创一个空数组
            delete this.dataStore;
            //这里其实并不能说是严格意义的清空数组，只是将ary重新赋值为空数组，
            //之前的数组如果没有引用在指向它将等待垃圾回收。
            this.dataStore = [];
            //方式二：
            // this.dataStore.length = 0;
            //方式三：
            // this.dataStore.splice(0,this.dataStore.length);
            this.listSize = this.pos = 0;
        };
        /**
         * 返回列表的字符串形式
         */
        List.prototype.toString = function () {
            return this.dataStore.toString();
        };
        /**
         * 在现有元素后插入新元素
         */
        List.prototype.insert = function (element, after) {
            var insertPos = this.find(after);
            if (insertPos > -1) {
                this.dataStore.splice(insertPos + 1, 0, element);
                ++this.listSize;
                return element;
            }
            return false;
        };
        /**
         * 在列表的末尾添加新元素
         */
        List.prototype.append = function (element) {
            this.dataStore[this.listSize++] = element;
            return element;
        };
        /**
         * 在列表中查找某一元素(可以用indexOf代替)
         */
        List.prototype.find = function (element) {
            for (var i = 0; i < this.dataStore.length; ++i) {
                if (this.dataStore[i] == element) {
                    return i;
                }
            }
            return -1;
        };
        /**
         * 在列表中删除元素
         */
        List.prototype.remove = function (element) {
            var foundAt = this.find(element);
            if (foundAt > -1) {
                this.dataStore.splice(foundAt, 1);
                --this.listSize;
                return element;
            }
            return false;
        };
        /**
         * 判断给定值是否在列表中
         */
        List.prototype.contains = function (element) {
            for (var i = 0; i < this.dataStore.length; i++) {
                if (this.dataStore[i] == element) {
                    return true;
                }
            }
            return false;
        };
        //=========================以下是遍历列表的方式===============================
        //允许用户在列表上自由移动，最后一个方法 getElement() 返回列表的当前元素：
        /**
         * 将列表的当前位置移动到第一个元素
         */
        List.prototype.front = function () {
            this.pos = 0;
        };
        /**
         * 将列表的当前位置移动到最后一个元素
         */
        List.prototype.end = function () {
            this.pos = this.listSize - 1;
        };
        /**
         * 将当前位置向后移一位
         */
        List.prototype.prev = function () {
            if (this.pos > 0) {
                this.pos--;
            }
        };
        /**
         * 将当前位置向前移一位
         */
        List.prototype.next = function () {
            if (this.pos < this.listSize - 1) {
                this.pos++;
            }
        };
        /**
         * 返回列表当前位置
         */
        List.prototype.currPos = function () {
            return this.pos;
        };
        /**
         * 将当前位置移动到指定位置
         */
        List.prototype.moveTo = function (targetPos) {
            this.pos = targetPos;
        };
        /**
         * 返回当前位置的元素
         */
        List.prototype.getElement = function () {
            return this.dataStore[this.pos];
        };
        /**
         * 演示迭代器向前遍历列表
         */
        List.prototype.forwardList = function () {
            for (this.front(); this.currPos() < this.length(); this.next()) {
                console.log(this.getElement());
            }
        };
        /**
         * 演示迭代器向后遍历列表
         */
        List.prototype.backwardList = function () {
            for (this.end(); this.currPos() >= 0; this.prev()) {
                console.log(this.getElement());
            }
        };
        return List;
    }());
    ListExample.List = List;
    __reflect(List.prototype, "ListExample.List", ["ListExample.ListImpl"]);
})(ListExample || (ListExample = {}));
//# sourceMappingURL=List.js.map