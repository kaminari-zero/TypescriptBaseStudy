class Animal extends BaseObject{
    private aId:number;
    public name:string;
    public type:string;

    public call(){
        console.log("动物叫");
    }

    public showInfo(){
        console.log(`该动物的名字是：${this.name};该动物是：${this.type}`);
    }
}