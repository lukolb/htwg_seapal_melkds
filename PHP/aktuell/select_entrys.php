<?php
	include 'DB_data.php';

 	$con = mysql_connect($ServerAdr, $UserName, $pw);
	if(!$con) {
		die('Cold not connect: ' .mysql_error());
	}

	// Variable f�r Ergebnis
	$result = array();
	// Hier evtl. die DB anpassen
	mysql_select_db($database, $con);
	$entryID = $_POST['entryID'];

	// Hier evtl. die Tabelle anpassen
	$sql = "SELECT * FROM entryinfo
			WHERE entry_id = " . $entryID;

	$content = mysql_query($sql, $con);

	if (!$content) {
		die('Error: ' . mysql_error());
	} else {
		while ($row = mysql_fetch_array($content)) {
			$name = $row['name'];
			$gradn = $row['gradn'];
			$minn = $row['minn'];
			$sekn = $row['sekn'];
			$grade = $row['grade'];
			$mine = $row['mine'];
			$seke = $row['seke'];
			$cog = $row['cog'];
			$sog = $row['sog'];
			$btm = $row['btm'];
			$dtm = $row['dtm'];
			$fahr = $row['fahr'];
			$manoever = $row['manoever'];
			$vorsegel = $row['vorsegel'];
			$grosssegel = $row['grosssegel'];
			$zeitpunkt = $row['zeitpunkt'];
			$entryID = $row['entry_id'];
			$tripID = $row['id'];

			$result [] = array('name'=>$name,
							   'gradn'=>$gradn,
							   'minn'=>$minn,
							   'sekn'=>$sekn,
							   'grade'=>$grade,
							   'mine'=>$mine,
							   'seke'=>$seke,
							   'cog'=>$cog,
							   'sog'=>$sog,
							   'btm'=>$btm,
							   'dtm'=>$dtm,
							   'manoever'=>$manoever,
							   'vorsegel'=>$vorsegel,
							   'grosssegel'=>$grosssegel,
							   'zeitpunkt'=>$zeitpunkt,
							   'entryID'=>$entryID,
							   'fahr'=>$fahr,
							   'tripID'=>$tripID);
		}
	}
	// DB schlie�en
	mysql_close($con);

	echo json_encode($result);
?>