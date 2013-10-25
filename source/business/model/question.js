/**
 * Created by gongshw on 13-10-23.
 */

var model = (function (model, Content, Element) {
	"use strict"

	/**
	 * @constructor
	 */
	function Question() {
		this._tags = new Array();
		this._q = new Content();
		this._a = new Content;
	}

	Question.prototype = {

		get body() {
			return this._q;
		},
		set body(body) {
			this._q = model.setValue(Content,body)
		},

		/**
		 * @returns {Array}
		 */
		get tags() {
			return this._tags;
		},
		/**
		 * @param {Array} tags
		 */
		set tags(tags) {
			this._tags = tags;
		},


	}

	model.Question = Question;

	return model;

})(model || {}, model.Content, model.Element);
