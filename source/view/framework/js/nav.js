/**
 * Created by gongshw on 13-10-27.
 */

(function () {
	"use strict";


	function setActiveMenu(arr, crtPage) {

		arr.each(function () {
			if (this.href == crtPage) {
				$(this).parents('li').addClass('ui-btn-active');
			}
		});
	}

	function setPage() {
		var hrefString = document.location.href ? document.location.href : document.location;

		hrefString = hrefString.substr(0,hrefString.indexOf('?'));

		setActiveMenu($('ul[data-role=listview] a'), hrefString);
	}

	setPage();
})();
