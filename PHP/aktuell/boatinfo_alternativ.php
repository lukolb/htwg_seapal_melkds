<!DOCTYPE HTML>
<html>
<head>
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	<script src="js/ajax.js"></script>
	<script src="js/formChecker.js"></script>
	<?php
		$title = "Seapal";
		include("header.php");
	?>
</head>
<body>
	<!--MenÃ¼-->
	<?php
		$main = "class='current_page_item'";
		include("menu.php");
	?>
	<div class="boatinfo">
		<table id="boatinfo_table">
			<tr>
				<td><label for="bootsname">Bootsname</label></td>
				<td><input type="text" name="bootsname" id="bootsname" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="typ">Typ</label></td>
				<td><input type="text" name="typ" id="typ" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="baujahr">Baujahr</label></td>
				<td><input type="text" name="baujahr" id="baujahr" onkeyup="isNumber(this.value, this.id, 4)" /></td>
			</tr>
			<tr>
				<td><label for="registernr">Registernr.</label></td>
				<td><input type="text" name="registernr" id="registernr" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="konstrukteur">Konstrukteur</label></td>
				<td><input type="text" name="konstrukteur" id="konstrukteur" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="motor">Motor</label></td>
				<td><input type="text" name="motor" id="motor" onkeyup="isText(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="segelzeichen">Segelzeichen</label></td>
				<td><input type="text" name="segelzeichen" id="segelzeichen" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="laenge">L&auml;nge</label></td>
				<td><input type="text" name="laenge" id="laenge" onkeyup="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="tankgroesse">Tankgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="tankgroesse" id="tankgroesse" onkeyup="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="heimathafen">Heimathafen</label></td>
				<td><input type="text" name="heimathafen" id="heimathafen" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="breite">Breite</label></td>
				<td><input type="text" name="breite" id="breite" onkeyup="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="wassertankgroesse">Wassertrankgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="wassertankgroesse" id="wassertankgroesse" onkeyup="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="Yachtclub">Yachtclub</label></td>
				<td><input type="text" name="yachtclub" id="yachtclub" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="Tiefgang">Tiefgang</label></td>
				<td><input type="text" name="tiefgang" id="tiefgang" onkeyup="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="abwassertankgroesse">Abwassertankgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="abwassertankgroesse" id="abwassertankgroesse" onkeyup="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="eigner">Eigner</label></td>
				<td><input type="text" name="eigner" id="eigner" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="masthoehe">Masth&ouml;he</label></td>
				<td><input type="text" name="masthoehe" id="masthoehe" onkeyup="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="grosssegelgroesse">Gro&szlig;segelgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="grosssegelgroesse" id="grosssegelgroesse" onkeyup="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="versicherung">Versicherung</label></td>
				<td><input type="text" name="versicherung" id="versicherung" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="verdraengung">Verdr&auml;ngung</label></td>
				<td><input type="text" name="verdraengung" id="verdraengung" onkeyup="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="genuagroesse">Genuagr&ouml;&szlig;e</label></td>
				<td><input type="text" name="genuagroesse" id="genuagroesse" onkeyup="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="rufzeichen">Rufzeichen</label></td>
				<td><input type="text" name="rufzeichen" id="rufzeichen" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="rigart">Rig-Art</label></td>
				<td><input type="text" name="rigart" id="rigart" onkeyup="isText(this.value, this.id, 0)" /></td>
				<td><label for="spigroesse">Spigr&ouml;&szlig;e</label></td>
				<td><input type="text" name="spigroesse" id="spigroesse" onkeyup="isNumber(this.value, this.id, 0)" /></td>
			</tr>
		</table>

		<table id="boatinfo_list" border="0">
			<thead>
				<td>Bootsname</td>
				<td>Bootstyp</td>
				<td>Konstrukteur</td>
				<td>L&auml;nge</td>
				<td>Inhaber</td>
   			</thead>
			<tbody >
				<div>
					<select id="list" size="5" onclick="updateForm(this.value)">

					</select>
				</div>
				<!-- Hier wird die Liste mittels JavaScript eingefügt -->
			</tbody>
		</table>

		<!-- Buttons -->
		<div id="boatinfo_buttons">
			<button>L&ouml;schen</button>
			<button id="save">Speichern</button>
			<button>Neuester</button>
			<button>Vorheriger</button>
			<button>N&auml;chster</button>
		</div>
	</div>

	<div id="boatinfo_footer">
		<!--footer-->
		<?php
			include("footer.php");
		?>
	</div>
</body>
</html>