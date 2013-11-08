/**
 * Created by gongshw on 13-10-24.
 *
 * define class model.Element;
 */

var model = (function (model) {
	"use strict";

	var _TYPE_TEXT = 'text';
	var _TYPE_IMG = 'img';

	/**
	 *
	 * @param {string} type
	 * @param {string} value
	 * @constructor
	 */
	function Element(type, value) {
		this.type = type;
		this.value = value;
	}

	Element.TYPE_TEXT = _TYPE_TEXT;
	Element.TYPE_IMG = _TYPE_IMG;

	Element.prototype = {

		/**
		 *
		 * @returns {string}
		 */	
		get type() {
			return this._type;
		},
		set type(type) {
			if (type === _TYPE_TEXT || type === _TYPE_IMG) {
				this._type = type;
			} else {
				throw 'type must be "' + _TYPE_TEXT + '" or "' + _TYPE_IMG + '"!';
			}

		},
		get value() {
			return this._elements;
		},
		set value(value) {
			this._value = model.setValue('string',value);

		},
	}


	model.Element = Element;

	return model;


})(model || {});
