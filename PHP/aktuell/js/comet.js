var pos_field = new Array();
var marker_field = new Array();
var poly_field = new Array();
var demo_done = false;
function connect() {
  ifrm=document.createElement("iframe");
  ifrm.setAttribute("src", "comet.php");
  ifrm.setAttribute("class", "hiddenIFrame");
  document.body.appendChild(ifrm);
  //var btn = document.getElementById('dlt_spn');
  //btn.innerHTML = "<input type=\"button\" value=\"Delete Demo-Route\" id=\"del_demo_btn\" onclick=\"del_demo()\" />";
}

var c_coords = function (lat, lng) {
	var coordinate = new google.maps.LatLng(lat, lng);
	map.setZoom(13);
	map.setCenter(coordinate);
	var marker = new google.maps.Marker({
	    position: coordinate,
	    map: map,
	    icon: "images/marker.png"
	});
	pos_field.push(coordinate);
	var t_route = new google.maps.Polyline({
						path: pos_field,
						strokeColor: "#FF0000",
						strokeOpacity: 1.0,
						strokeWeight: 2
					});
	t_route.setMap(map);
	marker_field.push(marker);
	poly_field.push(t_route);
	demo_done = true;
}

function del_demo() {
	// Route löschen
}