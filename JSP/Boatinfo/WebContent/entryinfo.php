<!DOCTYPE HTML>
<html>
<head>
	<link href="include/tripinfo_style.css" rel="stylesheet" type="text/css" media="screen"/>
	<link href="include/entryinfo_style.css" rel="stylesheet" type="text/css" media="screen"/>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	<script src="js/entryinfo_ajax.js"></script>
	<?php
		$title = "Seapal-Logbuch-Entryinfo";
		include("header.php");
	?>
	<script src="formChecker.js"></script>
	<!--Formatierung-->
	<script language="JavaScript" charset="UTF-8" src="js/formatierung.js"></script>
</head>
<body>
	<!--Menü-->
	<?php
		$main = "class='current_page_item'";
		include("menu.php");
	?>
	<table class="entryinfo" border="0">
		<form name="formular" action="" method="post" name="formular">
			<tr>
				<td><label for="name">Name </label></td>
				<td><input type="text" name="name" id="name" onkeyup="isText(this.value, this.id, 0, true)" /></td>
			</tr>
			<tr>
				<td><label for="position">Position </label></td>
				<td><input type="text" name= "position" onblur="validate(this)"/></td>
				<td  class="entryinfo_column2"><label for="cog">COG </label><input type="text" name="cog"/></td>
				<td><label for="sog">SOG </label><td><input type="text" name="sog" size="10"/></td>
				<td><label for="at">at </label></td>
				<td id="time"></td>
			</tr>
			<tr>
				<td><label for="btm">BTM </label></td>
				<td><input type="text" name="btm" /></td>
				<td class="entryinfo_column2"><label for="dtm">DTM </label>
				<input type="text" name="dtm" /></td>
				<td><label for="fahrtnach">Fahrt nach </label></td>
				<td><select name="fahrtnach">
						<option>-</option>
						<option>Mark 1</option>
						<option>Mark 2</option>
					</select>
				</td>
			</tr>
			<tr>
				<td><label for="manoever">Man&ouml;ver </label></td>
				<td><select name="manoever">
						<option>-</option>
						<option>Tack</option>
						<option>Jibe</option>
						<option>Lay to</option>
						<option>Set Sails</option>
						<option>Change Sails</option>
						<option>Sails down</option>
						<option>Reff</option>
						<option>Anker up</option>
						<option>Anker down</option>
					</select>
				</td>
				<td class="entryinfo_column2"><label for="vorsegel">Vorsegel </label>
					<select name="vorsegel">
						<option>-</option>
						<option>Genua 1</option>
						<option>Genua 2</option>
						<option>Genua 3</option>
						<option>Fock</option>
						<option>Storm Fock</option>
						<option>Blister</option>
						<option>Spinaker</option>
					</select>
				</td>
				<td><label for="grosssegel">Gro&szlig;segel </label></td>
				<td><select name="grosssegel">
						<option>-</option>
						<option>full</option>
						<option>reef 1</option>
						<option>reef 2</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="padding-top: 20px;"><label for="note">Notes </label><textarea id="note" name="note" rows="3" style="width: 90%; height: 94%"  onkeyup="isText(this.value, this.id, 0, true)" ></textarea></td>
				<td colspan="2" style="padding-top: 40px;"><img src="images/Karte.jpg" height="100%" width="100%" /></td>
				<td colspan="3" style="padding-top: 40px; padding-left: 18px"><img src="images/Photos.jpg" height="100%" width="100%" /></td>
			</tr>
		</form>
	</table>
	
	<!--footer-->
	<?php
		include("footer.php");
	?>
</body>
</html>