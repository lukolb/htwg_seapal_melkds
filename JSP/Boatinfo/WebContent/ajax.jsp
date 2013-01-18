<%@page import="objects.boatInfo"%>
<%@ include file="SQL_functions.jsp" %>

<%!
public static class ajax {
	
	public static int maxIdx = 0;
	
	public static String getBoatListContent() {
		String retVal = "";
		SQLConnector.connect();
		List<boatInfo> biList = SQLConnector.getBoatinfoTable();
		maxIdx = biList.size() - 1;
		for (boatInfo bi: biList) {
			retVal = retVal + "<tr class=\\u0027boatinfo_table_nolink\\u0027 id="+ bi.id +" onMouseOver=\\u0027javaScript:updateStyle(this.id)\\u0027 onMouseOut=\\u0027javaScript:updateStyle(this.id)\\u0027 onClick=\\u0027javaScript:updateVariables(this.id, \\u0022"
							+ bi.bootsname + "\\u0022, \\u0022" + bi.registernr + "\\u0022, \\u0022" + bi.segelzeichen + "\\u0022, \\u0022" + bi.heimathafen
							+ "\\u0022, \\u0022" + bi.yachtclub + "\\u0022, \\u0022" + bi.eigner + "\\u0022, \\u0022" + bi.versicherung
							+ "\\u0022, \\u0022" + bi.rufzeichen + "\\u0022, \\u0022" + bi.typ + "\\u0022, \\u0022" + bi.konstrukteur
							+ "\\u0022, \\u0022" + bi.laenge + "\\u0022, \\u0022" + bi.breite + "\\u0022, \\u0022" + bi.tiefgang
							+ "\\u0022, \\u0022" + bi.masthoehe + "\\u0022, \\u0022" + bi.verdraengung + "\\u0022, \\u0022" + bi.rigart
							+ "\\u0022, \\u0022" + bi.baujahr + "\\u0022, \\u0022" + bi.motor + "\\u0022, \\u0022" + bi.tankgroesse
							+ "\\u0022, \\u0022" + bi.wassertankgroesse + "\\u0022, \\u0022" + bi.abwassertankgroesse + "\\u0022, \\u0022" + bi.grosssegelgroesse
							+ "\\u0022, \\u0022" + bi.genuagroesse + "\\u0022, \\u0022" + bi.spigroesse + "\\u0022)\\u0027>"
					+ "<td id=\\u0027bootsname\\u0027 class=\\u0027boatinfo_table_row\\u0027>" + bi.bootsname + "</td>"
					+ "<td class=\\u0027boatinfo_table_row\\u0027>" + bi.typ + "</td>"
					+ "<td class=\\u0027boatinfo_table_row\\u0027>" + bi.konstrukteur + "</td>"
					+ "<td class=\\u0027boatinfo_table_row\\u0027>" + bi.laenge + "</td>"
					+ "<td class=\\u0027boatinfo_table_row\\u0027>" + bi.eigner + "</td>"
					+ "<td class=\\u0027boatinfo_table_row\\u0027 style=\\u0027text-align: center\\u0027><input type=\\u0027image\\u0027 src=\\u0027images/button.png\\u0027 onClick=\\u0027javaScript:openTrips(\\u0022" + bi.registernr + "\\u0022, \\u0022" + bi.bootsname + "\\u0022)\\u0027></td>"
					+ "</tr>";
		}
		SQLConnector.disconnect();
		return retVal;
	}
}
%>