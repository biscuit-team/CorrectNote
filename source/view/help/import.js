/**
 * Created by shigong on 13-10-25.
 */

/**
 * this util is to dynamically import html page in client side.
 *
 * usage:
 * <script src="js/import.js" data-url="target_page.html"></script>
 *
 * the content of target_page.html will replace the script tag itself when remote page load complete
 */
(function () {
	"use strict";

	var script_list = document.getElementsByTagName('script');

	var url;
	for (var index = script_list.length - 1; index > -1; index++) {

		var c_script = script_list[index];

		url = c_script.getAttribute('data-url');
		if (url) {
			c_script.parentNode.removeChild(c_script);
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.open("GET", url, false);
			xmlHttp.send(null);

			document.write(xmlHttp.responseText);

			break;
		}
	}

})()