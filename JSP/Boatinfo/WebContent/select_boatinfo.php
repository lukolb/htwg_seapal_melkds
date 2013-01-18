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

	// Hier evtl. die Tabelle anpassen
	$sql = "SELECT * FROM boatinfo2
			ORDER BY ID ASC ";
	
	$content = mysql_query($sql, $con);
	
	if (!$content) {
		die('Error: ' . mysql_error());
	} else {
		while ($row = mysql_fetch_array($content)) {
			$bootsname = $row['bootsname'];
			$typ = $row['typ'];
			$konstukteur = $row['konstrukteur'];
			$laenge = $row['laenge'];
			$eigner = $row['eigner'];
			$registernr = $row['registernr'];

			$result [] = array('bootsname'=>$bootsname,
							   'typ'=>$typ,
							   'konstrukteur'=>$konstukteur,
							   'laenge'=>$laenge,
							   'eigner'=>$eigner,
							   'registernr'=>$registernr);
		}
  	}
  	
  	// DB schließen
	mysql_close($con);

	echo json_encode($result);
?>