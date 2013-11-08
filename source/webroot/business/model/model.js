/**
 * Created by gongshw on 13-10-24.
 */


var model = (function (self) {
	"use strict";

	/**
	 * @constructor
	 */

	/**
	 * @param {function|string} type
	 * @param {*} value
	 * @param {*} throwable
	 * @returns {*}
	 */
	self.setValue = function (type, value) {
		if ((typeof type === 'function')) {
			if (value.constructor === type) {
				return value;
			} else {
				throw 'need a ' + type.name;
			}

		} else if ((typeof type === 'string')) {
			if (typeof value === type) {
				return value;
			} else {
				throw 'need a ' + type;
			}
		} else {
			throw 'first argument must be a Function or string';
		}
	}

	self.extend = function (o, p) {

		for (var index in p) {
			console.log(index);
			o[index] = p[index];
			var getter = p.__lookupGetter__(index);
			if (typeof getter === 'function') {
				o.__defineGetter__(index, getter);
			}

			var setter = p.__lookupSetter__(index);
			if (typeof setter === 'function') {
				o.__defineSetter__(index, setter);
			}

		}
		return o;
	}

	return self;

})(model || {});
