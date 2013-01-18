<?php
	include 'DB_data.php';

 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Cold not connect: ' .mysql_error());
	}

	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);
	$reg_nr = $_POST['registernr'];

	$sql = 'DELETE FROM boatinfo2
			WHERE registernr = \'' . $reg_nr . '\' ';
	if (!mysql_query($sql, $con)) {
		die('Error: ' . mysql_error());
	}
	mysql_close($con);
?>