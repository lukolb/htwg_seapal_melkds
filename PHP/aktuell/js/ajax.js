var boat_name = "";
var data_field;
var highestIndex = 0;
var selectedIndex = -1;
$(function() {
	// sobald Page komplett geladen hat Tabelle füllen
	updateTable();

	$('#save').click(function() {
		// Daten aus Formular auslesen
		$.ajax({
			type: 	'POST',
			url: 	'insert_boatinfo.php',
			data: {
				'bootsname': 	document.getElementsByName('bootsname')[0].value,
				'registernr': 	document.getElementsByName('registernr')[0].value,
				'segelzeichen':	document.getElementsByName('segelzeichen')[0].value,
		  	    'heimathafen': 	document.getElementsByName('heimathafen')[0].value,
				'yachtclub': 	document.getElementsByName('yachtclub')[0].value,
				'eigner':		document.getElementsByName('eigner')[0].value,
				'versicherung': document.getElementsByName('versicherung')[0].value,
				'rufzeichen': 	document.getElementsByName('rufzeichen')[0].value,
		  		'typ': 			document.getElementsByName('typ')[0].value,
				'konstrukteur': document.getElementsByName('konstrukteur')[0].value,
				'laenge': 		document.getElementsByName('laenge')[0].value,
				'breite': 		document.getElementsByName('breite')[0].value,
				'tiefgang': 	document.getElementsByName('tiefgang')[0].value,
				'masthoehe':	document.getElementsByName('masthoehe')[0].value,
		  		'verdraengung': document.getElementsByName('verdraengung')[0].value,
				'rigart': 		document.getElementsByName('rigart')[0].value,
				'baujahr': 		document.getElementsByName('baujahr')[0].value,
				'motor': 		document.getElementsByName('motor')[0].value,
				'tankgroesse': 	document.getElementsByName('tankgroesse')[0].value,
		  		'wassertankgroesse': 	document.getElementsByName('wassertankgroesse')[0].value,
				'abwassertankgroesse': 	document.getElementsByName('abwassertankgroesse')[0].value,
				'grosssegelgroesse': 	document.getElementsByName('grosssegelgroesse')[0].value,
		  		'genuagroesse': 		document.getElementsByName('genuagroesse')[0].value,
				'spigroesse': 			document.getElementsByName('spigroesse')[0].value
			},
			success: function(data) {
				// Inhalt aus Textfeldern löschen
				document.getElementsByName('bootsname')[0].value = '';
				document.getElementsByName('registernr')[0].value = '';
				document.getElementsByName('segelzeichen')[0].value = '';
		  	    document.getElementsByName('heimathafen')[0].value = '';
				document.getElementsByName('yachtclub')[0].value = '';
				document.getElementsByName('eigner')[0].value = '';
				document.getElementsByName('versicherung')[0].value = '';
				document.getElementsByName('rufzeichen')[0].value = '';
		  		document.getElementsByName('typ')[0].value = '';
				document.getElementsByName('konstrukteur')[0].value = '';
				document.getElementsByName('laenge')[0].value = '';
				document.getElementsByName('breite')[0].value = '';
				document.getElementsByName('tiefgang')[0].value = '';
				document.getElementsByName('masthoehe')[0].value = '';
		  		document.getElementsByName('verdraengung')[0].value = '';
				document.getElementsByName('rigart')[0].value = '';
				document.getElementsByName('baujahr')[0].value = '';
				document.getElementsByName('motor')[0].value = '';
				document.getElementsByName('tankgroesse')[0].value = '';
		  		document.getElementsByName('wassertankgroesse')[0].value = '';
				document.getElementsByName('abwassertankgroesse')[0].value = '';
				document.getElementsByName('grosssegelgroesse')[0].value = '';
		  		document.getElementsByName('genuagroesse')[0].value = '';
				document.getElementsByName('spigroesse')[0].value = '';

				updateTable();
				isCorrect();
			}
		}).error(function() {
			// Fehlerfall
			alert("Fehler");
		});
	});

	$('#next').click(function() {
		selectedIndex++;
		if (selectedIndex >= highestIndex) {
			selectedIndex = highestIndex;
		}
	  	updateForm(data_field[selectedIndex].registernr);
		changeOtherElements(selectedIndex);
		if (document.getElementById(selectedIndex).className=='boatinfo_table_link') {
			document.getElementById(selectedIndex).className='boatinfo_table_link_click';
		}
		isCorrect();
	});
	
	$('#previous').click(function() {
		selectedIndex--;
		if (selectedIndex < 0) {
			selectedIndex = 0;
		}
	  	updateForm(data_field[selectedIndex].registernr);
		changeOtherElements(selectedIndex);
		if (document.getElementById(selectedIndex).className=='boatinfo_table_link') {
			document.getElementById(selectedIndex).className='boatinfo_table_link_click';
		}
		isCorrect();
	});
	
	$('#latest').click(function() {
		selectedIndex = highestIndex;
	  	updateForm(data_field[selectedIndex].registernr);
		changeOtherElements(selectedIndex);
		if (document.getElementById(selectedIndex).className=='boatinfo_table_link') {
			document.getElementById(selectedIndex).className='boatinfo_table_link_click';
		}
		isCorrect();
	});
	
	$('#delete').click(function() {
		var reg_nr = data_field[selectedIndex].registernr;
  		$.ajax({
			type: 'POST',
			url: 'delete_boatinfo.php',
			data: {
				'registernr': reg_nr
			},
			success: function(data) {
				// Inhalt aus Textfeldern löschen
				document.getElementsByName('bootsname')[0].value = '';
				document.getElementsByName('registernr')[0].value = '';
				document.getElementsByName('segelzeichen')[0].value = '';
		  	    document.getElementsByName('heimathafen')[0].value = '';
				document.getElementsByName('yachtclub')[0].value = '';
				document.getElementsByName('eigner')[0].value = '';
				document.getElementsByName('versicherung')[0].value = '';
				document.getElementsByName('rufzeichen')[0].value = '';
		  		document.getElementsByName('typ')[0].value = '';
				document.getElementsByName('konstrukteur')[0].value = '';
				document.getElementsByName('laenge')[0].value = '';
				document.getElementsByName('breite')[0].value = '';
				document.getElementsByName('tiefgang')[0].value = '';
				document.getElementsByName('masthoehe')[0].value = '';
		  		document.getElementsByName('verdraengung')[0].value = '';
				document.getElementsByName('rigart')[0].value = '';
				document.getElementsByName('baujahr')[0].value = '';
				document.getElementsByName('motor')[0].value = '';
				document.getElementsByName('tankgroesse')[0].value = '';
		  		document.getElementsByName('wassertankgroesse')[0].value = '';
				document.getElementsByName('abwassertankgroesse')[0].value = '';
				document.getElementsByName('grosssegelgroesse')[0].value = '';
		  		document.getElementsByName('genuagroesse')[0].value = '';
				document.getElementsByName('spigroesse')[0].value = '';
				updateTable();
				isCorrect();
			}
		}).error(function() {
			alert("Error on updating Form");
		});
	});
});

function updateTable() {
	$.ajax({
			url: 'select_boatinfo.php',
   			success: function(data) {
				//alert(data);
				// data (ist ein string) in JSON konvertieren
				data_field = $.parseJSON(data);
				// in list wird der HTML-Code geschrieben
				var listContent = "";
				
				// Ausgelesene Werte in Dokument schreiben
				for(var i = 0; i < data_field.length; i++) {
					listContent = listContent + "<tr class=\"boatinfo_table_nolink\" id="+ i +" onMouseOver=\"javaScript:updateStyle(this.id)\" onMouseOut=\"javaScript:updateStyle(this.id)\" onClick=\"javaScript:updateVariables(this.id)\">"
								  +	"<td id=\"bootsname\" class=\"boatinfo_table_row\">"
						   		  + data_field[i].bootsname + "</td><td class=\"boatinfo_table_row\">"
						   		  + data_field[i].typ + "</td><td class=\"boatinfo_table_row\">"
						  		  + data_field[i].konstrukteur + "</td><td class=\"boatinfo_table_row\">"
						   		  + data_field[i].laenge + "</td><td class=\"boatinfo_table_row\">"
						   		  + data_field[i].eigner + "</td><td class=\"boatinfo_table_row\" style=\"text-align: center\">"
								  + "<input type=\"image\" src=\"\images\\button.png\" onClick=\"javaScript:openTrips(this.parentNode.parentNode.id)\"></td></tr>";
				}
				highestIndex = i - 1;
				var list = document.getElementById('list');
				list.innerHTML = listContent;
			}
	}).error(function() {
		// Fehlerfall
		alert("Error");
	});
}

function openTrips(id) {
  	var page = "trips.php?regnr=" + data_field[id].registernr + "&boot=" + data_field[id].bootsname;
  	window.open(page, "_self");
}

function updateStyle(index) {
	if (document.getElementById(index).className=='boatinfo_table_link_click') {
		document.getElementById(index).className='boatinfo_table_link_click';
	}

	if (document.getElementById(index).className=='boatinfo_table_nolink') {
		document.getElementById(index).className='boatinfo_table_link';
	} else if (document.getElementById(index).className=='boatinfo_table_link') {
		document.getElementById(index).className='boatinfo_table_nolink';
	}
}

function updateVariables(i) {
	selectedIndex = i;
	updateForm(data_field[i].registernr);
	changeOtherElements(i);
	if (document.getElementById(i).className=='boatinfo_table_link') {
		document.getElementById(i).className='boatinfo_table_link_click';
	}
}

function changeOtherElements(i) {
	for (var j = 0; j <= highestIndex; j++) {
		if (j == i) {
   			document.getElementById(i).className='boatinfo_table_link_click';
		} else {
			document.getElementById(j).className='boatinfo_table_nolink';
		}
	}
}

function updateForm(reg_nr) {
	$.ajax({
		type: 'POST',
		url: 'updateForm_boatinfo.php',
		data: {
			'registernr': reg_nr
		},
		success: function(data) {
			// In JSON konvertieren
			var data = $.parseJSON(data);
			// Inhalt in Textfelder eintragen
			document.getElementsByName('bootsname')[0].value = data[0].bootsname;
			document.getElementsByName('registernr')[0].value = reg_nr;
			document.getElementsByName('segelzeichen')[0].value = data[0].segelzeichen;
	  	    document.getElementsByName('heimathafen')[0].value = data[0].heimathafen;
			document.getElementsByName('yachtclub')[0].value = data[0].yachtclub;
			document.getElementsByName('eigner')[0].value = data[0].eigner;
			document.getElementsByName('versicherung')[0].value = data[0].versicherung;
			document.getElementsByName('rufzeichen')[0].value = data[0].rufzeichen;
	  		document.getElementsByName('typ')[0].value = data[0].typ;
			document.getElementsByName('konstrukteur')[0].value = data[0].konstrukteur;
			document.getElementsByName('laenge')[0].value = data[0].laenge;
			document.getElementsByName('breite')[0].value = data[0].breite;
			document.getElementsByName('tiefgang')[0].value = data[0].tiefgang;
			document.getElementsByName('masthoehe')[0].value = data[0].masthoehe;
	  		document.getElementsByName('verdraengung')[0].value = data[0].verdraengung;
			document.getElementsByName('rigart')[0].value = data[0].rigart;
			document.getElementsByName('baujahr')[0].value = data[0].baujahr;
			document.getElementsByName('motor')[0].value = data[0].motor;
			document.getElementsByName('tankgroesse')[0].value = data[0].tankgroesse;
	  		document.getElementsByName('wassertankgroesse')[0].value = data[0].wassertankgroesse;
			document.getElementsByName('abwassertankgroesse')[0].value = data[0].abwassertankgroesse;
			document.getElementsByName('grosssegelgroesse')[0].value = data[0].grosssegelgroesse;
	  		document.getElementsByName('genuagroesse')[0].value = data[0].genuagroesse;
			document.getElementsByName('spigroesse')[0].value = data[0].spigroesse;
		}
	}).error(function() {
		/*alert("Error on updating Form");*/
	});
}