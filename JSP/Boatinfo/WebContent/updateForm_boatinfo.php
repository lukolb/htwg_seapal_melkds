<?php
	include 'DB_data.php';
	
 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Cold not connect: ' . mysql_error());
	}

	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);

	// Variable für Ergebnis
	$result = array();

	$reg_nr = $_POST['registernr'];

	// Hier evtl. die Tabelle anpassen
	$sql = 'SELECT * FROM boatinfo2 WHERE registernr = ' . '\'' . $reg_nr . '\'';

	$content = mysql_query($sql, $con);

	if (!$content) {
		die('Error: ' . mysql_error());
	} else {
		$row = mysql_fetch_array($content);
		$boot_name = $row['bootsname'];
		$typ = $row['typ'];
		$konstukteur = $row['konstrukteur'];
		$laenge = $row['laenge'];
		$eigner = $row['eigner'];
		$segelzeichen = $row['segelzeichen'];
		$heimathafen = $row['heimathafen'];
		$versicherung = $row['versicherung'];
		$rufzeichen = $row['rufzeichen'];
		$laenge = $row['laenge'];
		$breite = $row['breite'];
		$tiefgang = $row['tiefgang'];
		$masthoehe = $row['masthoehe'];
		$verdraengung = $row['verdraengung'];
		$rigart = $row['rigart'];
		$baujahr = $row['baujahr'];
		$motor = $row['motor'];
		$tankgroesse = $row['tankgroesse'];
		$wassertankgroesse = $row['wassertankgroesse'];
		$abwassertankgroesse = $row['abwassertankgroesse'];
		$grosssegelgroesse = $row['grosssegelgroesse'];
		$genuagroesse = $row['genuagroesse'];
		$spigroesse = $row['spigroesse'];
		$yachtclub = $row['yachtclub'];

		$result [] = array('bootsname'=>$boot_name,
						   'typ'=>$typ,
						   'konstrukteur'=>$konstukteur,
						   'laenge'=>$laenge,
						   'eigner'=>$eigner,
						   'registernr'=>$reg_nr,
						   'segelzeichen'=>$segelzeichen,
						   'heimathafen'=>$heimathafen,
						   'versicherung'=>$versicherung,
						   'rufzeichen'=>$rufzeichen,
						   'laenge'=>$laenge,
						   'breite'=>$breite,
						   'tiefgang'=>$tiefgang,
						   'masthoehe'=>$masthoehe,
						   'verdraengung'=>$verdraengung,
						   'rigart'=>$rigart,
						   'baujahr'=>$baujahr,
						   'motor'=>$motor,
						   'tankgroesse'=>$tankgroesse,
						   'wassertankgroesse'=>$wassertankgroesse,
						   'abwassertankgroesse'=>$abwassertankgroesse,
						   'grosssegelgroesse'=>$grosssegelgroesse,
						   'genuagroesse'=>$genuagroesse,
						   'spigroesse'=>$spigroesse,
						   'yachtclub'=>$yachtclub);
	 $handle = fopen ("test.txt", 'w');
		fwrite ($handle, $reg_nr);
		fclose ($handle);
  	}

  	// DB schließen
	mysql_close($con);

	echo json_encode($result);
?>