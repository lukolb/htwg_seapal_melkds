<html>
  <head>
    <title>Comet php backend</title>
  </head>
  <body>
    <script type="text/javascript">
	  	var c_coords = window.parent.c_coords;
    </script>
    <?php
		// Startwerte
	 	$start_long = 9.20;
	 	$start_lat = 47.66;

	 	// Aktueller Wert
	 	$lat = $start_lat;
	 	$long = $start_long;
		$lat_arr = array(47.657987988,47.65878012,47.661398765,47.666138796,47.692201275,47.6882725106,47.67180314686,47.67267008509,47.6509344892,47.65775674098);
		$long_arr = array(9.1796779632,9.20456886,9.223794937,9.232635499,9.2690277099,9.2723751069,9.30687904378,9.31486129761,9.24654006958,9.182510375977);
		// Laufvariable
		$i = 0;

	    while($i <= 10) {
		    echo '<script type="text/javascript">';
		    echo "c_coords(".$lat_arr[$i].','.$long_arr[$i].');'.str_repeat(' ',5000);
		    $i++; /*
		    if ($i%2 == 0) {
				$lat = $lat + 0.001;
				$long = $long + 0.01;
			} else {
				$lat = $lat - 0.002;
				$long = $long + 0.005;
			} */
		    echo "</script>";
		    flush();
		    usleep(2000000);
	    }
    ?>
  </body>
</html>