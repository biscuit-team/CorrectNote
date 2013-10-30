/**
 * Created by gongshw on 13-10-23.
 */

(function () {
    "use strict";

    var _wait_time = 1000;

    function _go_main(){
		location.href = 'course.html';
    }

    window.onload = function () {
        setTimeout(_go_main, _wait_time);
    }
})();


var http = require('http');