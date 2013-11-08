/**
 * Created by gongshw on 13-10-24.
 *
 * define class model.Content.
 *
 * Content can be seen as a list of model.Element
 */

var model = (function (model, Element) {
	"use strict";

	/**
	 * @constructor
	 */
	function Content() {
		this._elements = new Array();
	}

	Content.prototype.__defineGetter__('elements', function () {
		return this._elements;
	})

	Content.prototype.__defineSetter__('elements', function (elements) {
		this._elements = model.setValue(Array, elements);
	})

	Content.prototype.add = function () {

		if (arguments.length === 1 && typeof arguments[0] === Element) {
			this._elements.push(arguments[0]);
		} else if (arguments.length === 2) {
			this._elements.push(new Element(arguments[0], arguments[1]));
		}

	}

	model.Content = Content;

	return model;


})(model || {}, model.Element);
