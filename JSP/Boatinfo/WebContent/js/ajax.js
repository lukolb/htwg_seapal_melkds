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