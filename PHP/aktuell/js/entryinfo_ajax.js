var entry_id;
var tripID;
var map;
$(function() {
	var params = decodeURI(document.URL);
	var pos = params.indexOf('?');
	var pos2 = params.lastIndexOf('=');
	pos++;

	var text = params.slice(pos, pos2);
	pos2++;
	if (text == 'entry') {
		entry_id = params.slice(pos2);
		tripID = -1;
	} else {
		entry_id = -1;
		tripID = params.slice(pos2);
	}
	
	if (entry_id != -1) {
		// Button ausblenden
		document.getElementById('save').style.opacity=0;
		document.getElementById('back').style.opacity=0;
		updateForm();

		// Karte initialisieren
		initialize();
	} else {
		//Map und Photos ausblenden
		document.getElementById('map_canvas').style.opacity=0;
		document.getElementById('photos').style.opacity=0;
	}
	
	$('#save').click(function() {
		var position = document.getElementsByName('position')[0].value;
		var gradn;
		var minn;
		var sekn;
		var grade;
		var seke;
		var mine;
		
		// Position zerteilen
		var pos;
		var pos2;
		gradn = position.slice(0, 2);
		pos2 = position.indexOf('.');
		minn = position.slice(3, pos2);
		pos = position.indexOf('\'');
		sekn = position.slice(++pos2, pos);
		
		pos = position.indexOf('N');
		grade = position.slice(++pos, pos+3);
		pos2 = position.lastIndexOf('.');
		mine = position.slice(pos2-2, pos2);
		pos = position.lastIndexOf('\'');
		seke = position.slice(++pos2, pos);
		
		var date = new Date();
		var s_date = date.getMinutes() + ":" + date.getSeconds();
		// EntryPoint in DB speichern
		$.ajax({
			type: 'POST',
			url: 'insert_entryinfo.php',
			async: false,
  			data: {
				'tripID': tripID,
				'name': document.getElementsByName('name')[0].value,
				'gradn': gradn,
				'minn': minn,
				'sekn': sekn,
				'grade': grade,
				'mine': mine,
				'seke': seke,
				'cog': document.getElementsByName('cog')[0].value,
				'sog': document.getElementsByName('sog')[0].value,
				'btm': document.getElementsByName('btm')[0].value,
				'dtm': document.getElementsByName('dtm')[0].value,
				'fahrt': document.getElementsByName('fahrtnach')[0].value,
				'manoever': document.getElementsByName('manoever')[0].value,
				'vorsegel': document.getElementsByName('vorsegel')[0].value,
				'grosssegel': document.getElementsByName('grosssegel')[0].value,
				'note': document.getElementsByName('note')[0].value,
				'zeit': s_date
			},
			success: function(data) {
				alert('Entry hinzugefuegt');
			}
		});
	});
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
    			var pos = data_field[0].gradn + "\°" + data_field[0].minn + "\'N "
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
				
				// Marker auf Karte setzen
				var Lat = data_field[0].gradn + "." + data_field[0].minn + data_field[0].sekn;
				var Lng = data_field[0].grade + "." + data_field[0].mine + data_field[0].seke;
				var coordinate = new google.maps.LatLng(Lat, Lng);
				drawMarker(coordinate);
			}
	}).error(function() {
		alert("Error on updating Form");
	});
}

function GoBack() {
	// Wieder auf Tripinfo verlinken
	var page = "tripinfo.php?trip=" + tripID;
	window.open(page, "_self");
}

// Map Funktionen
function initialize() {
	var mapTypeIds = ["roadmap","satellite","OSM"];
	var mapOptions = {
		center: new google.maps.LatLng(47.66, 9.16),
		zoom: 14,
		zoomControl: false,
		streetViewControl: false,
		panControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControlOptions: {
				mapTypeIds: mapTypeIds
		}
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

function drawMarker(coordinate) {
	var coord = new google.maps.LatLng(coordinate.lat()-0.01, coordinate.lng());
	map.setCenter(coord);
	map.setZoom(13);
	var marker = new google.maps.Marker({
 	   	position: coordinate,
    	map: map,
    	icon: "images/marker.png"
	});
}