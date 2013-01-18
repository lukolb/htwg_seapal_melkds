<?php
	include 'DB_data.php';

 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Cold not connect: ' .mysql_error());
	}

	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);
	$entryID = $_POST['entry_ID'];

	$sql = 'DELETE FROM entryinfo
			WHERE entry_id = \'' . $entryID . '\' ';

	if (!mysql_query($sql, $con)) {
		die('Error: ' . mysql_error());
	}
	mysql_close($con);
?>