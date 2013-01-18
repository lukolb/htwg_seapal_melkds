var tripID;
var data_field;
var highestIndex;
var selectedIndex;
$(function() {
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
			alert("Error on updating Form");
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
				data_field = $.parseJSON(data);
				// Bei Crew-String Leerzeichen durch Zeilenumbruch ersetzen
				var crew = data_field[0].crew;
				while (crew.indexOf(' ') != -1) {
					crew = crew.replace(' ', '\n');
				}
				document.getElementById('triptitle').setAttribute('value', data_field[0].triptitle);
				document.getElementById('von').setAttribute('value', data_field[0].von);
				document.getElementById('nach').setAttribute('value', data_field[0].nach);
				document.getElementById('skipper').setAttribute('value', data_field[0].skipper);
				document.getElementById('crew').innerHTML = crew;
				document.getElementById('start').setAttribute('value', data_field[0].start);
				document.getElementById('ende').setAttribute('value', data_field[0].ende);
				document.getElementById('dauer').setAttribute('value', data_field[0].dauer);
				document.getElementById('motor').setAttribute('value', data_field[0].motor);
				document.getElementsByName('note')[0].innerHTML = data_field[0].notiz;
				if (data_field[0].tank == 1) {
					document.getElementById('tank').checked = 'true';
				} else {
					document.getElementById('tank').checked = 'false';
				}
			}
	}).error(function() {
		alert("Error on updating Form");
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
				var listContent = "";
				for(var i = 0; i < data_field.length; i++) {
					listContent = listContent + "<tr class=\"tripinfo_table_nolink\" id="+ i +" onMouseOver=\"javaScript:updateStyle(this.id)\" onMouseOut=\"javaScript:updateStyle(this.id)\" onClick=\"javaScript:selectLine(this.id)\">"
								  +	"<td id=\"tripname\" class=\"tripinfo_table_row\">"
						   		  + data_field[i].name + "</td><td class=\"tripinfo_table_row\">"
						   		  + data_field[i].zeitpunkt + "min" + "</td><td class=\"tripinfo_table_row\">"
						  		  + data_field[i].gradn + "&deg;" + data_field[i].minn + "\'" + data_field[i].sekn + "\''" + "</td><td class=\"tripinfo_table_row\">"
						   		  + data_field[i].grade + "&deg;" + data_field[i].mine + "\'" + data_field[i].seke + "\''" + "</td><td class=\"tripinfo_table_row\">COG "
						   		  + data_field[i].cog + "</td><td class=\"tripinfo_table_row\">SOG "
								  +	data_field[i].sog + "</td><td class=\"tripinfo_table_row\" style=\"text-align: center\">"
								  + "<input type=\"image\" src=\"\images\\button.png\" onClick=\"javaScript:openEntry(this.parentNode.parentNode.id)\"></td></tr>";
				}
				highestIndex = --i;
				var list = document.getElementById('tripinfo_list');
				list.innerHTML = listContent;
			}
	}).error(function() {
		alert("Error on updating Form");
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