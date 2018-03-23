/**
 *  
 * Usage:
 *  var jsbase = require(JsBase.js)
 *  
 */
var JsBase = {};

module.exports = JsBase;

JsBase.InsertSort = function(arr){    
    if(!arr instanceof Array){
        console.error("Error argument, argument type is " + typeof arr + ", require Array");
        return void 0;
    }
    var cloneArr = JsBase.clone(arr);
    for(var i = 0;i < JsBase.SizeOf)
}

JsBase.SizeOf = function(obj){
    var count = void 0;
    if(obj instanceof Array){
        count = obj.length;
    }else if(typeof obj == "object"){
        count = 0;
        for(var key in obj){
            count++;
        }
    }else if(typeof obj == "string"){
        return obj.length;
    }
    return count;
}

//Clone obj
JsBase.clone = function(obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}
