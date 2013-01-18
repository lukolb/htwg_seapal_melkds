var tripID;
var data_field;
var data_field_form;
var highestIndex;
var selectedIndex;
var map;
var routePoints = new Array;
$(function() {
	initialize();
	var params = decodeURI(document.URL);
	var pos = params.indexOf('=');
	pos++;
	tripID = params.slice(pos);
	updateForm();
	updateList();
	
	$('#first').click(function() {
		selectedIndex = 0;
		changeOtherElements(selectedIndex);
		if (document.getElementById(selectedIndex).className=='tripinfo_table_link') {
			document.getElementById(selectedIndex).className='tripinfo_table_link_click';
		}
	});
	
	$('#last').click(function() {
		selectedIndex = highestIndex;
		changeOtherElements(selectedIndex);
		if (document.getElementById(selectedIndex).className=='tripinfo_table_link') {
			document.getElementById(selectedIndex).className='tripinfo_table_link_click';
		}
	});
	
	$('#next').click(function() {
		selectedIndex++;
		if (selectedIndex >= highestIndex) {
			selectedIndex = highestIndex;
		}
		changeOtherElements(selectedIndex);
		if (document.getElementById(selectedIndex).className=='tripinfo_table_link') {
			document.getElementById(selectedIndex).className='tripinfo_table_link_click';
		}
	});
	
	$('#previous').click(function() {
		selectedIndex--;
		if (selectedIndex == -1) {
			selectedIndex = 0;
		}
		changeOtherElements(selectedIndex);
		if (document.getElementById(selectedIndex).className=='tripinfo_table_link') {
			document.getElementById(selectedIndex).className='tripinfo_table_link_click';
		}
	});
	
	$('#delete').click(function() {
		var entryID = data_field[selectedIndex].entryID;
  		$.ajax({
			type: 'POST',
			url: 'delete_entryinfo.php',
			data: {
				'entry_ID': entryID
			},
			success: function(data) {
				updateList();
			}
		}).error(function() {
		});
	});
});

function updateForm() {
	$.ajax({
			type: 'POST',
			url: 'select_tripinfo.php',
			data: {
				'tripID' : tripID
			},
			success: function(data) {
				data_field_form = $.parseJSON(data);
				// Bei Crew-String Leerzeichen durch Zeilenumbruch ersetzen
				var crew = data_field_form[0].crew;
				while (crew.indexOf(' ') != -1) {
					crew = crew.replace(' ', '\n');
				}
				document.getElementById('triptitle').setAttribute('value', data_field_form[0].triptitle);
				document.getElementById('von').setAttribute('value', data_field_form[0].von);
				document.getElementById('nach').setAttribute('value', data_field_form[0].nach);
				document.getElementById('skipper').setAttribute('value', data_field_form[0].skipper);
				document.getElementById('crew').innerHTML = crew;
				document.getElementById('start').setAttribute('value', data_field_form[0].start);
				document.getElementById('ende').setAttribute('value', data_field_form[0].ende);
				document.getElementById('dauer').setAttribute('value', data_field_form[0].dauer);
				document.getElementById('motor').setAttribute('value', data_field_form[0].motor);
				document.getElementsByName('note')[0].innerHTML = data_field_form[0].notiz;
				if (data_field_form[0].tank == 1) {
					document.getElementById('tank').checked = 'true';
				}
			}
	}).error(function() {
	});
}

function updateList() {
	$.ajax({
			type: 'POST',
			url: 'select_entryinfo.php',
			data: {
				'tripID' : tripID
			},
			success: function(data) {
				data_field = $.parseJSON(data);
				var Lat;
				var Lng;
				var coordinate;
				var listContent = "";
				for (var j = routePoints.length; j >= 0; j--) {
					routePoints.pop();
				}
				for(var i = 0; i < data_field.length; i++) {
					listContent = listContent + "<tr class=\"tripinfo_table_nolink\" id="+ i +" onMouseOver=\"javaScript:updateStyle(this.id)\" onMouseOut=\"javaScript:updateStyle(this.id)\" onClick=\"javaScript:selectLine(this.id)\">"
								  +	"<td id=\"tripname\" class=\"tripinfo_table_row\">"
						   		  + data_field[i].name + "</td><td class=\"tripinfo_table_row\">"
						   		  + data_field[i].zeitpunkt + "</td><td class=\"tripinfo_table_row\">"
						  		  + data_field[i].gradn + "&deg;" + data_field[i].minn + "\'" + data_field[i].sekn + "\''" + "</td><td class=\"tripinfo_table_row\">"
						   		  + data_field[i].grade + "&deg;" + data_field[i].mine + "\'" + data_field[i].seke + "\''" + "</td><td class=\"tripinfo_table_row\">COG "
						   		  + data_field[i].cog + "</td><td class=\"tripinfo_table_row\">SOG "
								  +	data_field[i].sog + " kn</td><td class=\"tripinfo_table_row\" style=\"text-align: center\">"
								  + "<input type=\"image\" src=\"\images\\button.png\" onClick=\"javaScript:openEntry(this.parentNode.parentNode.id)\"></td></tr>";
					// LatLng Wert speichern
					Lat = data_field[i].gradn + "." + data_field[i].minn + data_field[i].sekn;
					Lng = data_field[i].grade + "." + data_field[i].mine + data_field[i].seke;
					coordinate = new google.maps.LatLng(Lat, Lng);
					routePoints.push(coordinate);
				 	var marker = new google.maps.Marker({
				 	   	position: coordinate,
				    	map: map,
				    	icon: "images/marker.png"
					});
				}
				highestIndex = --i;
				var list = document.getElementById('tripinfo_list');
				list.innerHTML = listContent;
				drawRoute();
			}
	}).error(function() {
	});
}

function updateStyle(index) {
	if (document.getElementById(index).className=='tripinfo_table_link_click') {
		document.getElementById(index).className='tripinfo_table_link_click';
	}

	if (document.getElementById(index).className=='tripinfo_table_nolink') {
		document.getElementById(index).className='tripinfo_table_link';
	} else if (document.getElementById(index).className=='tripinfo_table_link') {
		document.getElementById(index).className='tripinfo_table_nolink';
	}
}

function selectLine(i) {
	selectedIndex = i;
	changeOtherElements(i);
	if (document.getElementById(i).className=='tripinfo_table_link') {
		document.getElementById(i).className='tripinfo_table_link_click';
	}
}

function changeOtherElements(i) {
	for (var j = 0; j <= highestIndex; j++) {
		if (j == i) {
   			document.getElementById(i).className='tripinfo_table_link_click';
		} else {
			document.getElementById(j).className='tripinfo_table_nolink';
		}
	}
}

function openEntry(id) {
	var page = "entryinfo.php?entry=" + data_field[id].entryID;
  	window.open(page, "_self");
}

function addEntry() {
	var page = "entryinfo.php?trip="+tripID;
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

function drawRoute() {
	var tmp = routePoints[routePoints.length/2];
	var coord = new google.maps.LatLng(tmp.lat()-5.01, tmp.lng());
	map.setCenter(coord);
	map.setZoom(5);
	var t_route = new google.maps.Polyline({
						path: routePoints,
						strokeColor: "#FF0000",
						strokeOpacity: 1.0,
						strokeWeight: 2
					});
	t_route.setMap(map);
}