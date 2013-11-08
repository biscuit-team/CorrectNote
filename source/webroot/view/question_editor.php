<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>question_editor</title>
    <link href="../lib/jquery/mobile/jquery.mobile-1.3.2.min.css" rel="stylesheet" type="text/css"/>
    <link href="style/my-custom-theme.css" rel="stylesheet" type="text/css"/>
    <link href="style/app.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <div data-role="page" data-theme="d">
        <div data-role="header" data-theme="b" style="background: #f5f2e5">
            <a href="index.html" data-icon="delete">Cancel</a>
            <a href="index.html" data-icon="check">Save</a>
            <span class="ui-title" />
        </div>
        <!--
        <div id="edit-bar" style="background-image: linear-gradient(#52ba1f,#3b8716); height: 54px" >
            <div style="margin: 2px 0px 2px 10px">
        -->
        <div data-role="header" data-theme="d">
        <div data-role="feildcontain" style="margin-left: 5px">
            <fieldset data-role="controlgroup" data-type="horizontal">
                <label for="select-choice-month">学科</label>
                <select name="select-choice-month" id="select-choice-month">
                    <option>学科</option>
                    <option value="math">数学</option>
                    <option value="cho">化学</option>
                    <!-- etc. -->
                </select>

                <label for="select-choice-day">知识点</label>
                <select name="select-choice-day" id="select-choice-day">
                    <option>知识点</option>
                    <option >二次曲线</option>
                    <option value="1">椭圆</option>
                    <!-- etc. -->
                </select>

                <label for="select-choice-year">重要度</label>
                <select name="select-choice-year" id="select-choice-year">
                    <option>重要度</option>
                    <option>很重要</option>
                    <option value="2011">一般</option>
                    <!-- etc. -->
                </select>
            </fieldset>
        </div>
           <!--<a href="index.php" data-rel="dialog" class="ui-btn-right" style="background-image: url('style/images/1383742025_tag_fill.png');background-repeat: 1 1;">标签</a> -->
            <img src="style/images/1383742025_tag_fill.png" alt="tag" class="ui-btn-right" style="margin: 9px 0px 12px 0px">
        </div>
        <div data-role="content">

        </div>
    </div>

<script src="../lib/jquery/jquery-1.10.2.js"></script>
<script src="framework/js/nav.js"></script>
<script src="../lib/jquery/mobile/jquery.mobile-1.3.2.min.js"></script>
</body>
</html>