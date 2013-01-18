<?php
	include 'DB_data.php';

 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Cold not connect: ' .mysql_error());
	}

	// Variable für Ergebnis
	$result = array();
	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);
	$registernr = $_POST['registernr'];

	// Hier evtl. die Tabelle anpassen
	$sql = "SELECT * FROM tripinfo
			WHERE registernr = " . $registernr;

	$content = mysql_query($sql, $con);

	if (!$content) {
		die('Error: ' . mysql_error());
	} else {
		while ($row = mysql_fetch_array($content)) {
			$triptitle = $row['triptitle'];
			$von = $row['von'];
			$nach = $row['nach'];
			$skipper = $row['skipper'];
			$dauer = $row['dauer'];
			$tripID = $row['tripid'];

			$result [] = array('triptitle'=>$triptitle,
							   'von'=>$von,
							   'nach'=>$nach,
							   'skipper'=>$skipper,
							   'dauer'=>$dauer,
							   'tripID'=>$tripID);
		}
	}
	// DB schließen
	mysql_close($con);

	echo json_encode($result);
?>