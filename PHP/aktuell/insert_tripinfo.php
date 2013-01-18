<?php
	include 'DB_data.php';

 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Cold not connect: ' .mysql_error());
	}

	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);

	$title = 		$_POST['title'];
	$registernr = 	$_POST['registernr'];
	$von = 			$_POST['von'];
	$nach =			$_POST['nach'];
    $skipper = 		$_POST['skipper'];
	$crew = 		$_POST['crew'];
    $start = 		$_POST['start'];
	$ende = 		$_POST['ende'];
	$dauer =		$_POST['dauer'];
	$motor = 		$_POST['motor'];
	$tank = 		$_POST['tank'];
	$note = 		$_POST['note'];


	$sql="INSERT INTO tripinfo(triptitle, von, nach, skipper, crew,
		  start, ende, dauer, motor, tank, registernr, note)
  		  VALUES
  		  ('$title', '$von', '$nach', '$skipper',
		   '$crew', '$start', '$ende', '$dauer',
		   '$motor', '$tank', '$registernr', '$note')";



	if(!mysql_query($sql, $con)) {
		die('Error:' .mysql_error());
	}
	mysql_close($con);
?>