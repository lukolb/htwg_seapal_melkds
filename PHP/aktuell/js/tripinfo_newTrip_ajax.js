$(function() {
	$('#save').click(function() {
		var params = decodeURI(document.URL);
		var pos = params.indexOf('=');
		pos++;
		var regnr = params.slice(pos);
		var pos2 = params.search('&');
		pos2 = params.lastIndexOf('=')
		pos2++;
		var bootsname = params.slice(pos2);
		
		var tank;
		
		if (document.getElementsByName('tank')[0].checked) {
			tank = 1;
		} else {
			tank = 0;
		}

		$.ajax({
			type: 	'POST',
			url: 	'insert_tripinfo.php',
			data: {
				'title': 		document.getElementsByName('triptitle')[0].value,
				'registernr': 	regnr,
				'von':			document.getElementsByName('von')[0].value,
		  	    'nach': 		document.getElementsByName('nach')[0].value,
				'skipper': 		document.getElementsByName('skipper')[0].value,
				'crew':			document.getElementsByName('crew')[0].value,
				'start':	 	document.getElementsByName('start')[0].value,
				'ende': 		document.getElementsByName('ende')[0].value,
		  		'dauer': 		document.getElementsByName('dauer')[0].value,
				'motor': 		document.getElementsByName('motor')[0].value,
				'tank': 		tank,
				'note':         document.getElementsByName('note')[0].value
			},
			success: function(data) {
				// Wieder zur Tripliste zurück
				alert('Trip hinzugefügt');
				var page = "trips.php?regnr=" + regnr + "&boot=" + bootsname;
  				window.open(page, "_self");
			}
		}).error(function() {
			// Fehlerfall
			alert("Fehler");
		});
	});
});