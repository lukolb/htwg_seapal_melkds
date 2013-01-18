<!DOCTYPE HTML>
<html>
<head>
 	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
	<link href="include/trips_style.css" rel="stylesheet" type="text/css" media="screen"/>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	<script src="js/trips_ajax.js"></script>
	<?php
		$title = "Seapal";
		include("header.php");
	?>
	
</head>
<body>
	<!--Menü-->
	<?php
		$main = "class='current_page_item'";
		include("menu.php");
	?>
	<div class="trips">
		<table>
			<tr>
				<p>
					<pre><div class="titles">Bootsname:  <span id="trips_boatname"></span></div>
					<div class="titles">Registernummer: <span id="trips_registernr"></span></div>
					</pre>
     			</p>
			</tr>
		</table>
		<table id="trips_table">
			<thead>
				<td class="trips_table_header">Tripname</td>
				<td class="trips_table_header">Von</td>
				<td class="trips_table_header">Nach</td>
				<td class="trips_table_header">Skipper</td>
				<td class="trips_table_header">Dauer</td>
			</thead>
			<tbody id="trip_list">
				<!-- Hier werden die Trips des Bootes aufgelistet -->
    		</tbody>
		</table>
	</div>
	<div id="boatinfo_footer">
		<!--footer-->
		<?php
			include("footer.php");
		?>
	</div>
</body>
</html>