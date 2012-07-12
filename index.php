<?php

$_ROOT = str_replace('index.php', '', $_SERVER['PHP_SELF']);

?><! doctype html>
<html>
<head>
	<title>Game Framework</title>
	<script type='text/javascript'>
	var _root = '<?php echo $_ROOT ?>';
	</script>
	<script src='//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'></script>
	<script src='assets/js/base.js'></script>
	<link rel='stylesheet' type='text/css' media='all' href='<?php echo $_ROOT ?>assets/css/game_framework.css' />
</head>
<body>
	<p id='loading_javascript'>Loading JavaScript...</p>
</body>
</html>