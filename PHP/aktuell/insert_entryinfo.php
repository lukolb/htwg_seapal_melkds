<?php
	include 'DB_data.php';

 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Could not connect: ' .mysql_error());
	}

	$handle = fopen('test.txt', 'w');
	fwrite($handle, 'blaaa');
	fclose($handle);

	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);

	$tid=           $_POST['tripID'];
	$name= 			$_POST['name'];
	$gradn= 		$_POST['gradn'];
	$minn=			$_POST['minn'];
	$sekn= 			$_POST['sekn'];
	$grade= 		$_POST['grade'];
	$mine= 			$_POST['mine'];
	$seke= 			$_POST['seke'];
	$cog= 			$_POST['cog'];
	$sog= 			$_POST['sog'];
	$btm= 			$_POST['btm'];
	$dtm= 			$_POST['dtm'];
	$fahrt= 		$_POST['fahrt'];
	$manoever= 		$_POST['manoever'];
	$vorsegel=		$_POST['vorsegel'];
	$grosssegel= 	$_POST['grosssegel'];
	$zeitpunkt=     $_POST['zeit'];
	$note= 			$_POST['note'];

	$sql="INSERT INTO entryinfo(id, name, gradn, minn, sekn, grade,
		  mine, seke, cog, sog, btm, dtm, fahr, manoever,
		  vorsegel, grosssegel, zeitpunkt)
  		  VALUES
  		  ('$tid', '$name', '$gradn', '$minn', '$sekn',
		   '$grade', '$mine', '$seke', '$cog',
		   '$sog', '$btm', '$dtm', '$fahrt',
		   '$manoever', '$vorsegel', '$grosssegel',
		   '$zeitpunkt')";

	if(!mysql_query($sql, $con)) {
		die('Error:' .mysql_error());
	}
	mysql_close($con);
?>