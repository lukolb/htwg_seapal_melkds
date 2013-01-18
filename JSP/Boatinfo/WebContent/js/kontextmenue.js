// Nur für IE 5+ und NN 6+
ie5=(document.getElementById && document.all && document.styleSheets)?1:0;
nn6=(document.getElementById && !document.all)?1:0;

// Kontextmenü initialisieren
if (ie5 || nn6) {
  menuWidth=150, menuHeight=183;
  menuStatus=0;

  document.write(
	 "<div id='menu' style='position:absolute;top:-250;left:0;z-index:100;'>"
	+"<table width='"+menuWidth+"' height='"+menuHeight+"'>"
	+"<tr><td>Lat....Lon....</td></tr>"
	+"<tr><td><img src='images/flagge32px.png' /><a href='#' onclick='javascript:marker()'>Markierung setzen</a></td></tr>"
	+"<tr><td><hr /></td></tr>"
	+"<tr><td><img src='images/route32px.png' /><a href='#' onclick='javascript:polyline()'>Route setzen</a></td></tr>"
	+"<tr><td><hr /></td></tr>"
	+"<tr><td><img src='images/abstand32px.png' /><a href='#' onclick='javascript:distance()'>Abstand von hier</a></td></tr>"
	+"<tr><td><hr /></td></tr>"
	+"<tr><td><img src='images/delete32px.png' /><a href='#' onclick='javascript:deleteMarkers()'>L&ouml;schen</a></td></tr>"
	+"</table></div>");

  // Rechter Mausklick: Menü anzeigen, linker Mausklick: Menü verstecken
	onclick=showMenu; //oncontextmenu geht nicht bei NN 6.01
  //document.onmouseup=hideMenu;
}

// Kontextmenü anzeigen
function showMenu(e) {
	if(routezeichnen == 0 && abstandmessen == 0 && aufkarte == 1){
	  if(ie5) {
		if(event.clientX>menuWidth) xPos=event.clientX-menuWidth+document.body.scrollLeft;
		else xPos=event.clientX+document.body.scrollLeft;
		if (event.clientY>menuHeight) yPos=event.clientY-menuHeight+document.body.scrollTop;
		else yPos=event.clientY+document.body.scrollTop;
	  }
	  else {
		if(e.pageX>menuWidth+window.pageXOffset) xPos=e.pageX-menuWidth;
		else xPos=e.pageX;
		if(e.pageY>menuHeight+window.pageYOffset) yPos=e.pageY-menuHeight;
		else yPos=e.pageY;
	  }
	  document.getElementById("menu").style.left=xPos-12;
	  document.getElementById("menu").style.top=yPos-20;
	  menuStatus=1;
	  return false;
	}else{
		if (menuStatus==1 && ((ie5 && event.button==1) || (nn6 && e.which==1))) {
			setTimeout("document.getElementById('menu').style.top=-250",250);
			menuStatus=0;
		  }
	}
}

// Kontextmenü verstecken
function hideMenu(e) {
  if (menuStatus==1 && ((ie5 && event.button==1) || (nn6 && e.which==1))) {
    setTimeout("document.getElementById('menu').style.top=-250",250);
    menuStatus=0;
  }
}