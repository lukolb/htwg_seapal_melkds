<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<%@ include file="ajax.jsp" %>

<!DOCTYPE HTML>
<html>
<head>
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	<script type="text/javascript" src="js/formChecker.js"></script>
	<script type="text/javascript" src="js/updater.js"></script>
	
	<% String title = "Seapal-Logbuch-Boatinfo"; %>
	<%@ include file="header.jsp" %>
	
</head>
<body onload="javaScript:updateTable('<%= ajax.getBoatListContent() %>', <%= ajax.maxIdx %>)">

	<%@ include file="menu.jsp" %>
	
	<div class="boatinfo">
		<table id="boatinfo_table">
			<tr>
				<td><label for="bootsname">Bootsname</label></td>
				<td><input type="text" name="bootsname" id="bootsname" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="typ">Typ</label></td>
				<td><input type="text" name="typ" id="typ" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="baujahr">Baujahr</label></td>
				<td><input type="text" name="baujahr" id="baujahr" onChange="isNumber(this.value, this.id, 4)" /></td>
			</tr>
			<tr>
				<td><label for="registernr">Registernr.</label></td>
				<td><input type="text" name="registernr" id="registernr" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="konstrukteur">Konstrukteur</label></td>
				<td><input type="text" name="konstrukteur" id="konstrukteur" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="motor">Motor</label></td>
				<td><input type="text" name="motor" id="motor" onChange="isText(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="segelzeichen">Segelzeichen</label></td>
				<td><input type="text" name="segelzeichen" id="segelzeichen" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="laenge">L&auml;nge</label></td>
				<td><input type="text" name="laenge" id="laenge" onChange="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="tankgroesse">Tankgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="tankgroesse" id="tankgroesse" onChange="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="heimathafen">Heimathafen</label></td>
				<td><input type="text" name="heimathafen" id="heimathafen" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="breite">Breite</label></td>
				<td><input type="text" name="breite" id="breite" onChange="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="wassertankgroesse">Wassertrankgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="wassertankgroesse" id="wassertankgroesse" onChange="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="Yachtclub">Yachtclub</label></td>
				<td><input type="text" name="yachtclub" id="yachtclub" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="Tiefgang">Tiefgang</label></td>
				<td><input type="text" name="tiefgang" id="tiefgang" onChange="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="abwassertankgroesse">Abwassertankgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="abwassertankgroesse" id="abwassertankgroesse" onChange="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="eigner">Eigner</label></td>
				<td><input type="text" name="eigner" id="eigner" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="masthoehe">Masth&ouml;he</label></td>
				<td><input type="text" name="masthoehe" id="masthoehe" onChange="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="grosssegelgroesse">Gro&szlig;segelgr&ouml;&szlig;e</label></td>
				<td><input type="text" name="grosssegelgroesse" id="grosssegelgroesse" onChange="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="versicherung">Versicherung</label></td>
				<td><input type="text" name="versicherung" id="versicherung" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="verdraengung">Verdr&auml;ngung</label></td>
				<td><input type="text" name="verdraengung" id="verdraengung" onChange="isNumber(this.value, this.id, 0)" /></td>
				<td><label for="genuagroesse">Genuagr&ouml;&szlig;e</label></td>
				<td><input type="text" name="genuagroesse" id="genuagroesse" onChange="isNumber(this.value, this.id, 0)" /></td>
			</tr>
			<tr>
				<td><label for="rufzeichen">Rufzeichen</label></td>
				<td><input type="text" name="rufzeichen" id="rufzeichen" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="rigart">Rig-Art</label></td>
				<td><input type="text" name="rigart" id="rigart" onChange="isText(this.value, this.id, 0)" /></td>
				<td><label for="spigroesse">Spigr&ouml;&szlig;e</label></td>
				<td><input type="text" name="spigroesse" id="spigroesse" onChange="isNumber(this.value, this.id, 0)" /></td>
			</tr>
		</table>

		<table id="boatinfo_list" border="0">
			<thead>
				<td class="boatinfo_table_header">Bootsname</td>
				<td class="boatinfo_table_header">Bootstyp</td>
				<td class="boatinfo_table_header">Konstrukteur</td>
				<td class="boatinfo_table_header">L&auml;nge</td>
				<td class="boatinfo_table_header">Inhaber</td>
				<td class="boatinfo_table_header">Trips</td>
   			</thead>
			<tbody id="list">
				<!-- Hier wird die Liste mittels JavaScript eingefügt -->
			</tbody>
		</table>

		<!-- Buttons -->
		<div id="boatinfo_buttons">
			<button id="delete">L&ouml;schen</button>
			<button id="save">Speichern</button>
			<button id="latest">Neuester</button>
			<button id="previous">Vorheriger</button>
			<button id="next">N&auml;chster</button>
		</div>
	</div>

	<div id="boatinfo_footer">
		<!--footer-->
		<%@ include file="footer.jsp" %>
	</div>
</body>
</html>