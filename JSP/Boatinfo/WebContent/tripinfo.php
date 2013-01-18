<!DOCTYPE HTML>
<html>
<head>
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
 <link href="include/tripinfo_style.css" rel="stylesheet" type="text/css" media="screen"/>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	<script src="js/tripinfo_ajax.js"></script>
	<!--Header-->
	<?php
		$title = "Seapal-Logbuch-Tripinfo";
		include("header.php");
	?>
	<script src="formChecker.js"></script>
</head>
<body class="tripinfo">
	<!--MenÃ¼-->
	<?php
		$screenshots = "class='current_page_item'";
		include("menu.php");
	?>
	<div class="tripinfo_content">
	<table class="tripinfo_table" border="0">
		<tr>
			<td colspan="2"><label for="triptitle">Trip title </label>
			<input type="text" size="70" id="triptitle" name="triptitle" onkeyup="isText(this.value, this.id, 0, true)" /></td>
		</tr>
		<tr>
			<td>
				<table border="0">
					<tr><td><label for="von">Von </label></td><td><input type="text" id="von" name="von" onkeyup="isText(this.value, this.id, 0, true)" /></td></tr>
					<tr><td><label for="nach">Nach </label></td><td><input type="text" id="nach" name="nach" onkeyup="isText(this.value, this.id, 0, true)" /></td></tr>
					<tr><td><label for="skipper">Skipper </label></td><td><input type="text" id="skipper" name="skipper" onkeyup="isText(this.value, this.id, 0, true)" /></td></tr>
				</table>
			</td>
			<td>
				<label for="crew">Crew </label><textarea id="crew" name="crew" rows="3" style="width: 70%; height: 50px"  onkeyup="isText(this.value, this.id, 0, true)" ></textarea>
			</td>
			<td>
				<table border="0">
					<tr><td><label for="start">Start </label></td><td><input type="text" id="start" name="start" onkeyup="isText(this.value, this.id, 0, true)" /></td></tr>
					<tr><td><label for="ende">Ende </label></td><td><input type="text" id="ende" name="ende" onkeyup="isText(this.value, this.id, 0, true)" /></td></tr>
					<tr><td><label for="dauer">Dauer </label></td><td><input type="text" id="dauer" name="dauer" onkeyup="isNumber(this.value, this.id, 0, true)" /></td></tr>
				</table>
			</td>
			<td>
				<table border="0">
					<tr><td><label for="motor">Motor(min) </label></td><td><input type="text" id="motor" name="motor" onkeyup="isNumber(this.value, this.id, 0, true)" /></td></tr>
					<tr><td><label for="tank">Tank gef&uuml;llt </label></td><td><input type="checkbox" id="tank" name="tank" /></td></tr>
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 20px;"><label for="note">Notes </label><textarea id="note" name="note" rows="3" style="width: 90%; height: 94%"  onkeyup="isText(this.value, this.id, 0, true)" ></textarea></td>
			<td colspan="2" style="padding-top: 40px;"><img src="images/Karte.jpg" height="100%" width="100%" /></td>
			<td colspan="2" style="padding-top: 40px; padding-left: 18px"><img src="images/Photos.jpg" height="100%" width="100%" /></td>
		</tr>
	</table>
 	<table id="tripinfo_list" border="0">
		<thead>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</thead>
		<tbody id="list">
			<!-- Hier wird die Liste mittels JavaScript eingefügt -->
		</tbody>
	</table>

	<div class="tripinfo_buttons">
  		<button id="new">Neuer Eintrag</button>
		<button id="delete">L&ouml;schen</button>
		<button id="filter">Filter</button>
		<button id="first">Erster</button>
		<button id="last">Letzter</button>
		<button id="previous">Vorheriger</button>
		<button id="next">N&auml;chster</button>
	</div>
	</div>
	<!--footer-->
	<?php
		include("footer.php");
	?>
</body>
</html>