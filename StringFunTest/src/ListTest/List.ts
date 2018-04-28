namespace ListExample{
    export class List implements ListImpl{

        /**
         * 列表的元素个数
         */
        listSize:number = 0;
        /**
         * 列表的当前位置
         */
        pos:number = 0;

        /**
         * 初始化一个空数组来保存列表元素
         */
        dataStore:any[] = [];

        /**
         * 返回列表中元素的个数
         */
        public length():number{
            return this.listSize;
        }

        /**
         * 清除列表中的所有元素
         */
        public clear(){
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
        }
        /**
         * 返回列表的字符串形式
         */
        public toString():string{
            return this.dataStore.toString();
        }
        
        /**
         * 在现有元素后插入新元素
         */
        insert(element:any,after:any):any{
            var insertPos = this.find(after);
            if (insertPos > -1) {
                this.dataStore.splice(insertPos+1, 0, element);
                ++this.listSize;
                return element;
            }
            return false;
        }
        /**
         * 在列表的末尾添加新元素
         */
        public append(element:any):any{
            this.dataStore[this.listSize++] = element;
            return element;
        }
        /**
         * 在列表中查找某一元素(可以用indexOf代替)
         */
        public find(element:any):number{
            for(let i = 0; i<this.dataStore.length;++i){
                if(this.dataStore[i]==element){
                    return i;
                }
            }
            return -1;
        }
        /**
         * 在列表中删除元素
         */
        remove(element:any):any{
            let foundAt = this.find(element);
            if(foundAt > -1){
                this.dataStore.splice(foundAt,1);
                --this.listSize;
                return element;
            }
            return false;
        }

        /**
         * 判断给定值是否在列表中
         */
        public contains(element:any){
            for(let i = 0;i<this.dataStore.length;i++){
                if(this.dataStore[i] == element){
                    return true
                }
            }
            return false;
        }

        //=========================以下是遍历列表的方式===============================
        //允许用户在列表上自由移动，最后一个方法 getElement() 返回列表的当前元素：

        /**
         * 将列表的当前位置移动到第一个元素
         */
        front(){
            this.pos = 0;
        }
        /**
         * 将列表的当前位置移动到最后一个元素
         */
        end(){
            this.pos = this.listSize-1;
        }
        /**
         * 将当前位置向后移一位
         */
        prev(){
            if(this.pos>0){
                this.pos--;
            }
        }
        /**
         * 将当前位置向前移一位
         */
        next(){
            if(this.pos < this.listSize-1){
                this.pos++;
            }
        }
        /**
         * 返回列表当前位置
         */
        public currPos():number{
            return this.pos;
        }
        /**
         * 将当前位置移动到指定位置
         */
        moveTo(targetPos:number){
            this.pos = targetPos;
        }
        /**
         * 返回当前位置的元素
         */
        getElement():any{
            return this.dataStore[this.pos];
        }

        /**
         * 演示迭代器向前遍历列表
         */
        public forwardList(){
            for(this.front(); this.currPos() < this.length(); this.next()) {
                console.log(this.getElement());
            }
        }

        /**
         * 演示迭代器向后遍历列表
         */
        public backwardList(){
            for(this.end();this.currPos() >=0;this.prev()){
                console.log(this.getElement());
            }
            
        }
    }
}