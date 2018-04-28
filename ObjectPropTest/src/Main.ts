class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        ObjectProp.ObjectPorpTest.hasOwnPropertyTest();
        ObjectProp.ObjectPorpTest.getOwnPropertyNamesTest();
        ObjectProp.ObjectPorpTest.egretClassFunTest(new Cat());
        ObjectProp.ObjectPorpTest.getClassNameTest(new Cat());
        ObjectProp.ObjectPorpTest.getClassTypeTest(new Cat());
        // ObjectProp.ObjectPorpTest.getPrototypeTest(new Cat());
        ObjectProp.ObjectPorpTest.getConstructorTest(new Cat());
        ObjectProp.ObjectPorpTest.getOwnPropertyDescriptorTest();
        ObjectProp.ObjectPorpTest.useInTest();
        ObjectProp.ObjectPorpTest.toStringTypeTest();
    }
}