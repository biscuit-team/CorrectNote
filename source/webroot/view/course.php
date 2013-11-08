<!--TODO complete welcome page-->
<!DOCTYPE html>
<html>
<head>
	<title>course list</title>
	<?php require('head.php') ?>
</head>
<body>
<div data-role="page">

	<div data-role="header" class="ui-header ui-bar-a" role="banner" data-position="fixed">
		<h1 class="ui-title" role="heading">所有科目</h1>
		<a href="#side_nav_panel" class="ui-btn-right ui-icon-nodisc" data-role="button" data-icon="bars"
		   data-iconpos="notext"
		   data-theme="a"
		   data-inline="true"></a>
	</div>

	<div data-role="content">
		<p><strong>Test</strong></p>
	</div>

	<div data-role="footer" class="ui-bar" data-position="fixed">
		<a href="question_editor.php?target=new" data-role="button" data-icon="plus">添加错题</a>
		<a href="filter.php" data-role="button" data-icon="search" class="ui-btn-right">搜索</a>
	</div>


	<?php include('side_nav.php') ?>
</div>
<?php require('foot_lib.php') ?>
</body>
</html>
