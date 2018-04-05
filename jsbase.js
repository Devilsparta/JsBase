/**
 *  
 * Usage:
 *  var JsBase = require(JsBase.js)
 *  
 */
var JsBase = {};

if(module){
	module.exports = JsBase;
}


JsBase.InsertSortDescend = function (arr) {
	if (!(arr instanceof Array)) {
		console.error("Error argument, argument type is " + typeof arr + ", require Array");
		return void 0;
	}
	var cloneArr = JsBase.clone(arr);
	for (var i = 1; i < JsBase.SizeOf(cloneArr); i++) {
		var key = cloneArr[i];
		var j = i - 1;
		while (j >= 0 && cloneArr[j] < key) {
			cloneArr[j + 1] = cloneArr[j];
			j--;
		}
		cloneArr[j + 1] = key;
	}
	return cloneArr;
}

JsBase.SizeOf = function (obj) {
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
JsBase.clone = function (obj) {
	var o;
	if (typeof obj == "object") {
		if (obj === null) {
			o = null;
		} else {
			if (obj instanceof Array) {
				o = [];
				for (var i = 0, len = obj.length; i < len; i++) {
					o.push(JsBase.clone(obj[i]));
				}
			} else {
				o = {};
				for (var j in obj) {
					o[j] = JsBase.clone(obj[j]);
				}
			}
		}
	} else {
		o = obj;
	}
	return o;
}

JsBase.GetCurTimestamp = function () {
	return (new Date).getTime();
}

//All value except undefined is VALID
JsBase.IsValid = function (value) {
	return typeof(value) !== undefined;
}