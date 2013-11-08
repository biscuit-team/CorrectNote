/**
 * Created by gongshw on 13-10-23.
 */
var DIP = (function (self) {
	"use strict";

	self.TYPE_QUESTION = 'question';
	self.TYPE_ANSWER = 'answer';

	/**
	 *
	 * @param {string} img_url
	 * @returns {HTMLElement}
	 * @private
	 */
	function _draw_to_canvas(img_url) {
		var image = new Image();
		image.src = img_url;
		var canvas = document.createElement('canvas');
		canvas.width = image.width;
		canvas.height = image.height;
		canvas.getContext('2d').drawImage(image, 0, 0);
		return canvas;
	}

	/**
	 * @param {string} content_type
	 * @param {string} img_url
	 * @returns {{top: number, left: number, width: number, height: number}}
	 */
	self.get_select = function (content_type, img_url) {

		var canvas = _draw_to_canvas(img_url);
		canvas.getContext('2d');

		if (content_type === self.TYPE_QUESTION) {
			//TODO select a rectangle question area from the image in given img_url
			return {
				top: 160,
				left: 230,
				width: 700,
				height: 230
			};
		} else if (content_type === self.TYPE_ANSWER) {
			//TODO just like 'question' condition, but select answer area
			return {
				top: 380,
				left: 200,
				width: 700,
				height: 260
			};
		} else {
			throw 'First argument must be "question" or "answer"';
		}
	}

	/**
	 * decolorize the image in given url.
	 * @param {string} img_url
	 * @returns {HTMLElement}
	 */
	self.decolorize = function (img_url) {
		var canvas = _draw_to_canvas(img_url);
		//TODO decolorize the image in given url, draw it in a canvas
		return canvas;
	}

	return self;

})(DIP || {})

console.log(DIP)
