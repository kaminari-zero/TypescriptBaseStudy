namespace ListExample{
    export interface ListImpl{
        /**
         * 列表的元素个数
         */
        listSize:number;
        /**
         * 列表的当前位置
         */
        pos:number;
        /**
         * 返回列表中元素的个数
         */
        length():number;
        /**
         * 清除列表中的所有元素
         */
        clear();
        /**
         * 返回列表的字符串形式
         */
        toString():string;
        /**
         * 返回当前位置的元素
         */
        getElement():any;
        /**
         * 在现有元素后插入新元素
         */
        insert(element:any,after:any);
        /**
         * 在列表的末尾添加新元素
         */
        append(element:any);
        /**
         * 在列表中删除元素
         */
        remove(element:any);
        /**
         * 将列表的当前位置移动到第一个元素
         */
        front();
        /**
         * 将列表的当前位置移动到最后一个元素
         */
        end();
        /**
         * 将当前位置向后移一位
         */
        prev();
        /**
         * 将当前位置向前移一位
         */
        next();
        /**
         * 返回列表当前位置
         */
        currPos():number;
        /**
         * 将当前位置移动到指定位置
         */
        moveTo(targetPos:number);
    }
}