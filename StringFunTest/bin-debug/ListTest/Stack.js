var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ListExample;
(function (ListExample) {
    var Stack = (function () {
        function Stack() {
            this.dataStore = [];
            this.top = 0;
        }
        Stack.prototype.push = function (element) {
        };
        return Stack;
    }());
    ListExample.Stack = Stack;
    __reflect(Stack.prototype, "ListExample.Stack");
})(ListExample || (ListExample = {}));
//# sourceMappingURL=Stack.js.map