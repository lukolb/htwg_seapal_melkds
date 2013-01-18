var entry_id;
$(function() {
	var params = decodeURI(document.URL);
	var pos = params.indexOf('=');
	pos++;
	entry_id = params.slice(pos);
	updateForm();
});

function updateForm() {
	$.ajax({
			type: 'POST',
			url: 'select_entrys.php',
			data: {
				'entryID' : entry_id
			},
			success: function(data) {
				data_field = $.parseJSON(data);
				var pos = data_field[0].gradn + "%B" + data_field[0].minn + "\'N "
						  + data_field[0].grade + data_field[0].mine + "\'E";
				// Bei Crew-String Leerzeichen durch Zeilenumbruch ersetzen
				document.getElementById('name').setAttribute('value', data_field[0].name);
				document.getElementsByName('position')[0].setAttribute('value', pos);
				//validate(document.getElementsByName('pos'));
				document.getElementsByName('cog')[0].setAttribute('value', data_field[0].cog);
				document.getElementsByName('sog')[0].setAttribute('value', data_field[0].sog);
				document.getElementsByName('btm')[0].setAttribute('value', data_field[0].btm);
				document.getElementsByName('dtm')[0].setAttribute('value', data_field[0].dtm);
				document.getElementById('time').innerHTML = data_field[0].zeitpunkt;
				switch (data_field[0].fahr) {
					case "-":
						document.getElementsByName('fahrtnach')[0].selectedIndex = 0;
						break;
					case "Mark 1":
						document.getElementsByName('fahrtnach')[0].selectedIndex = 1;
						break;
					case "Mark 2":
						document.getElementsByName('fahrtnach')[0].selectedIndex = 2;
						break;
					default:
						alert("Ungueltiger Wert fuer fahrt nach");
						break;
				}
				switch (data_field[0].manoever) {
					case "-":
						document.getElementsByName('manoever')[0].selectedIndex = 0;
						break;
					case "Tack":
						document.getElementsByName('manoever')[0].selectedIndex = 1;
						break;
					case "Jibe":
						document.getElementsByName('manoever')[0].selectedIndex = 2;
						break;
					case "Lay to":
						document.getElementsByName('manoever')[0].selectedIndex = 3;
						break;
					case "Set Sails":
						document.getElementsByName('manoever')[0].selectedIndex = 4;
						break;
					case "Change Sails":
						document.getElementsByName('manoever')[0].selectedIndex = 5;
						break;
					case "Sails down":
						document.getElementsByName('manoever')[0].selectedIndex = 6;
						break;
					case "Reff":
						document.getElementsByName('manoever')[0].selectedIndex = 7;
						break;
					case "Anker up":
						document.getElementsByName('manoever')[0].selectedIndex = 8;
						break;
					case "Anker down":
						document.getElementsByName('manoever')[0].selectedIndex = 9;
						break;
					default:
						alert("Ungueltiger Wert fuer Manoever");
						break;
				}
				switch (data_field[0].vorsegel) {
					case "-":
						document.getElementsByName('vorsegel')[0].selectedIndex = 0;
						break;
					case "Genua 1":
						document.getElementsByName('vorsegel')[0].selectedIndex = 1;
						break;
					case "Genua 2":
						document.getElementsByName('vorsegel')[0].selectedIndex = 2;
						break;
					case "Genua 3":
						document.getElementsByName('vorsegel')[0].selectedIndex = 3;
						break;
					case "Fock":
						document.getElementsByName('vorsegel')[0].selectedIndex = 4;
						break;
					case "Storm Fock":
						document.getElementsByName('vorsegel')[0].selectedIndex = 5;
						break;
					case "Blister":
						document.getElementsByName('vorsegel')[0].selectedIndex = 6;
						break;
					case "Spinaker":
						document.getElementsByName('vorsegel')[0].selectedIndex = 7;
						break;
					default:
						alert("Ungueltiger Wert fuer Vorsegel");
						break;
				}
				switch (data_field[0].grosssegel) {
					case "-":
						document.getElementsByName('grosssegel')[0].selectedIndex = 0;
						break;
					case "full":
						document.getElementsByName('grosssegel')[0].selectedIndex = 1;
						break;
					case "reef 1":
						document.getElementsByName('grosssegel')[0].selectedIndex = 2;
						break;
					case "reef 2":
						document.getElementsByName('grosssegel')[0].selectedIndex = 3;
						break;
					default:
						alert("Ungueltiger Wert fuer Grosssegel");
						break;
				}
			}
	}).error(function() {
		alert("Error on updating Form");
	});
}