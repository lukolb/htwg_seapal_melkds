var reg_nr;
var bootsname;
var data_field;
$(function() {
	var params = decodeURI(document.URL);
	var pos = params.indexOf('=');
	pos++;
	var pos2 = params.search('&');
	reg_nr = params.slice(pos, pos2);
	pos2 = params.lastIndexOf('=')
	pos2++;
	bootsname = params.slice(pos2);
	var boot = document.getElementById('trips_boatname');
	boot.innerHTML = bootsname;
	var reg = document.getElementById('trips_registernr');
	reg.innerHTML = reg_nr;
	updateTable();
});

function updateTable() {
	$.ajax({
			type: 'POST',
			url: 'select_trips.php',
			data: {
				'registernr' : reg_nr
			},
			success: function(data) {
				data_field = $.parseJSON(data);
				var listContent = "";
				for(var i = 0; i < data_field.length; i++) {
					listContent = listContent + "<tr class=\"trips_table_nolink\" id="+ i +" onMouseOver=\"javaScript:updateStyle(this.id)\" onMouseOut=\"javaScript:updateStyle(this.id)\" onClick=\"javaScript:loadTrip(this.id)\">"
								  +	"<td id=\"tripname\" class=\"trips_table_row\">"
						   		  + data_field[i].triptitle + "</td><td class=\"trips_table_row\">"
						   		  + data_field[i].von + "</td><td class=\"trips_table_row\">"
						  		  + data_field[i].nach + "</td><td class=\"trips_table_row\">"
						   		  + data_field[i].skipper + "</td><td class=\"trips_table_row\">"
						   		  + data_field[i].dauer + "</td></tr>";
				}
				
				var list = document.getElementById('trip_list');
				list.innerHTML = listContent;
			}
	}).error(function() {
	});
}

function updateStyle(index) {
	if (document.getElementById(index).className=='trips_table_link_click') {
		document.getElementById(index).className='trips_table_link_click';
	}

	if (document.getElementById(index).className=='trips_table_nolink') {
		document.getElementById(index).className='trips_table_link';
	} else if (document.getElementById(index).className=='trips_table_link') {
		document.getElementById(index).className='trips_table_nolink';
	}
}

function loadTrip(i) {
  	var page = "tripinfo.php?trip=" + data_field[i].tripID;
  	window.open(page, "_self");
}

function createNewTrip() {
	var page = "tripinfo_newTrip.php?regnr=" + reg_nr;
  	window.open(page, "_self");
}
