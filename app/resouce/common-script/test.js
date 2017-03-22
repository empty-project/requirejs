/**
 * Created by Loki.Luo on 2017/3/22.
 */
//闭包执行一个立即定义的匿名函数
!function(factory) {

    //factory是一个函数，下面的koExports就是他的参数

    // Support three module loading scenarios
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // [1] CommonJS/Node.js
        // [1] 支持在module.exports.abc,或者直接exports.abc
        var target = module['exports'] || exports; // module.exports is for Node.js
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        // [2] AMD anonymous module
        // [2] AMD 规范
        //define(['exports'],function(exports){
        //    exports.abc = function(){}
        //});
        define(['exports'], factory);
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        factory(window['ko'] = {});
    }
}(function(koExports){

    //ko的全局定义 koExports是undefined 对应着上面的[3] 这种情况
    var ko = typeof koExports !== 'undefined' ? koExports : {};

    //定义一个ko的方法
    ko.abc = function(s){
        alert(s);
    }
});
