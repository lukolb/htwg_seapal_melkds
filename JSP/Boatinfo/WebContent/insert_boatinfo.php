<?php
	include 'DB_data.php';
	
 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Cold not connect: ' .mysql_error());
	}

	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);

	$bootsname = 	$_POST['bootsname'];
	$registernr = 	$_POST['registernr'];
	$segelzeichen = $_POST['segelzeichen'];
	$heimathafen =	$_POST['heimathafen'];
    $yachtclub = 	$_POST['yachtclub'];
	$eigner = 		$_POST['eigner'];
    $versicherung = $_POST['versicherung'];
	$rufzeichen = 	$_POST['rufzeichen'];
	$typ =	 		$_POST['typ'];
	$konstrukteur = $_POST['konstrukteur'];
	$laenge = 		$_POST['laenge'];
	$breite = 		$_POST['breite'];
    $tiefgang = 	$_POST['tiefgang'];
	$masthoehe = 	$_POST['masthoehe'];
	$verdraengung = $_POST['verdraengung'];
    $rigart = 		$_POST['rigart'];
	$baujahr = 		$_POST['baujahr'];
	$motor = 		$_POST['motor'];
    $tankgroesse = 	$_POST['tankgroesse'];
	$wassertankgroesse = 	$_POST['wassertankgroesse'];
    $abwassertankgroesse =  $_POST['abwassertankgroesse'];
	$grosssegelgroesse = 	$_POST['grosssegelgroesse'];
    $genuagroesse = 		$_POST['genuagroesse'];
	$spigroesse = 			$_POST['spigroesse'];
	
	// Abfragen ob es Registernr schon gibt
	$sql = 'SELECT count(*) FROM boatinfo2 WHERE registernr = \'' . $registernr . '\'';

	$result = mysql_query($sql, $con);

	if(!$result) {
		die('Error:' .mysql_error());
	} else {
		$rows = mysql_result($result,0);
		if ($rows > 0) {
			$sql='UPDATE boatinfo2
				  SET bootsname = \'' . $bootsname . '\',
				  	  registernr = \'' . $registernr . '\',
					  segelzeichen = \'' . $segelzeichen . '\',
					  heimathafen = \'' . $heimathafen . '\',
					  yachtclub = \'' . $yachtclub . '\',
					  eigner = \'' . $eigner . '\',
					  versicherung = \'' . $versicherung . '\',
					  rufzeichen = \'' . $rufzeichen . '\',
					  typ= \'' . $typ . '\',
					  konstrukteur = \'' . $konstrukteur . '\',
					  laenge = \'' . $laenge . '\',
					  breite = \'' . $breite . '\',
					  tiefgang = \'' . $tiefgang . '\',
					  masthoehe = \'' . $masthoehe . '\',
					  verdraengung = \'' . $verdraengung . '\',
					  rigart = \'' . $rigart . '\',
					  baujahr = \'' . $baujahr . '\',
					  motor = \'' . $motor . '\',
					  tankgroesse = \'' . $tankgroesse . '\',
					  wassertankgroesse = \'' . $wassertankgroesse . '\',
					  abwassertankgroesse = \'' . $abwassertankgroesse . '\',
					  grosssegelgroesse = \'' . $grosssegelgroesse . '\',
					  genuagroesse = \'' . $genuagroesse . '\',
					  spigroesse = \'' . $spigroesse . '\'
		  		  WHERE registernr = \'' . $registernr . '\'';

		} else {
			// JSON in DB schreiben
			// Hier evtl. die Tabelle anpassen
			$sql="INSERT INTO boatinfo2(bootsname, registernr, segelzeichen,
		  	      heimathafen, yachtclub, eigner, versicherung, rufzeichen,
		  		  typ, konstrukteur, laenge, breite, tiefgang, masthoehe,
		  		  verdraengung, rigart, baujahr, motor, tankgroesse,
		  		  wassertankgroesse, abwassertankgroesse, grosssegelgroesse,
		  		  genuagroesse, spigroesse)
		  		  VALUES
		  		  ('$bootsname', '$registernr', '$segelzeichen', '$heimathafen',
				   '$yachtclub', '$eigner', '$versicherung', '$rufzeichen',
				   '$typ', '$konstrukteur', '$laenge', '$breite', '$tiefgang',
				   '$masthoehe', '$verdraengung', '$rigart', '$baujahr',
				   '$motor', '$tankgroesse', '$wassertankgroesse',
				   '$abwassertankgroesse', '$grosssegelgroesse',
				   '$genuagroesse', '$spigroesse')";
		}
  		
	}
	if(!mysql_query($sql, $con)) {
		die('Error:' .mysql_error());
	}
	mysql_close($con);
?>