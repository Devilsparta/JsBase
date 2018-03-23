/**
 *  
 * Usage:
 *  var jsbase = require(jsbase.js)
 *  
 */
var jsbase = {};

module.exports = jsbase;

jsbase.InsertSortDescend = function (arr) {
    if (!arr instanceof Array) {
        console.error("Error argument, argument type is " + typeof arr + ", require Array");
        return void 0;
    }
    var cloneArr = jsbase.clone(arr);
    for (var i = 1; i < jsbase.SizeOf(cloneArr); i++) {
        var key = cloneArr[i];
        var j = i - 1;
        while (j >= 0 && cloneArr[j] < key) {
            cloneArr[j + 1] = cloneArr[j];
            j--;
        }
        cloneArr[j+1] = key;
    }
    return cloneArr;
}

jsbase.SizeOf = function (obj) {
    var count = void 0;
    if (obj instanceof Array) {
        count = obj.length;
    } else if (typeof obj == "object") {
        count = 0;
        for (var key in obj) {
            count++;
        }
    } else if (typeof obj == "string") {
        return obj.length;
    }
    return count;
}

//Clone obj
jsbase.clone = function (obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(jsbase.clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = jsbase.clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}