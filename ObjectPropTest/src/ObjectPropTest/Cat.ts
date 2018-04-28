class Cat extends Animal{

    public age:number = 10;

    //静态字段，方法属性ts翻译后是作为该类对象的属性
    public static teshu:number = 11;

    // public static teshu2:number = 12;

    public constructor(){
        super();
        Cat.prototype.toString = this.toString;
    }

    public call(){
        console.log("喵叫");
    }

    public showAge(){
        console.log("年龄："+this.age);
    }

    public static teshuFun(){
        console.log(Cat.teshu);
    }

    //因为ts的原型继承的关系，这样子并没重写object的tostring方法
    public toString(){
        return "重写了cat的tostring()";
    }

}