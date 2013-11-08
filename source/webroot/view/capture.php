<!DOCTYPE html>
<html>
<head>
	<title>启动相机...</title>
</head>
<body>
<div data-role="page">

	<div data-role="header" class="ui-header ui-bar-a" role="banner" data-position="fixed">
		<h1 class="ui-title" role="heading">从相机添加题目</h1>
	</div>

	<div data-role="content">
		<p><strong>
				这个功能还没有实现</strong></p>
	</div>

	<div data-role="footer" class="ui-bar" data-position="fixed">
		<a href="question_editor.php?target=new" data-role="button" data-icon="plus">添加错题</a>
		<a href="filter.php" data-role="button" data-icon="search" class="ui-btn-right">搜索</a>
	</div>


	<?php include('side_nav.php') ?>
</div>
<?php require('foot_lib.php') ?>
<!--<script>

	(function () {
		'use strict';

		function successCallback() {
			//TODO get photo
			console.log('s');
			console.log(arguments);
		}

		function failureCallback() {
			console.log('f');
			console.log(arguments);
		}

		if (typeof navigator.tglContext !== 'undefined') {
			var c = navigator.tglContext.getActivityContext()
			var intent = c.createIntent();
			var ACTION_IMAGE_CAPTURE = 'android.media.action.IMAGE_CAPTURE';
			intent.action = ACTION_IMAGE_CAPTURE;
			c.startActivityForResult(intent, successCallback, failureCallback);
		} else {
			document.write('这个功能需要运行在yunos上！')
		}

	})();

</script>-->
</body>
</html>
