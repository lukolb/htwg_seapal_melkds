<%@ page import="java.io.*,java.util.*,java.net.*,java.sql.*" %>
<%@ include file="DB_Data.jsp" %>

<%!
public static class SQLConnector {

	private static Connection con = null;
	private static Statement s = null;
	
	public static Boolean connect() {
		PreparedStatement pst = null;
		String driver = "com.mysql.jdbc.Driver";
		String dburl = "jdbc:mysql://" + DBData.ServerAdr + "/" + DBData.database;
		
		try{
			Class.forName(driver);
			con = DriverManager.getConnection(dburl, DBData.UserName, DBData.pw);
			s = con.createStatement();
			return true;
		}
		catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}
	
	public static Boolean disconnect() {
		try {
			if(s!=null) s.close();
			if(con!=null) con.close();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static List<objects.boatInfo> getBoatinfoTable()
	{
		ResultSet rs = null;
		List<objects.boatInfo> result = new ArrayList<objects.boatInfo>();
		String sql = "SELECT * FROM boatinfo2 ORDER BY ID ASC";
		try {
			rs = s.executeQuery(sql);
			int i = 0;
			while(rs.next()) {
				objects.boatInfo bi = new objects.boatInfo();
				bi.id = i;
				bi.registernr = rs.getString("registernr");
				bi.bootsname = rs.getString("bootsname");
				bi.typ = rs.getString("typ");
				bi.konstrukteur = rs.getString("konstrukteur");
				bi.laenge = rs.getString("laenge");
				bi.eigner = rs.getString("eigner");
				bi.baujahr = rs.getString("baujahr");
				bi.motor = rs.getString("motor");
				bi.segelzeichen = rs.getString("segelzeichen");
				bi.tankgroesse = rs.getString("tankgroesse");
				bi.heimathafen = rs.getString("heimathafen");
				bi.breite = rs.getString("breite");
				bi.wassertankgroesse = rs.getString("wassertankgroesse");
				bi.yachtclub = rs.getString("yachtclub");
				bi.tiefgang = rs.getString("tiefgang");
				bi.abwassertankgroesse = rs.getString("abwassertankgroesse");
				bi.masthoehe = rs.getString("masthoehe");
				bi.grosssegelgroesse = rs.getString("grosssegelgroesse");
				bi.versicherung = rs.getString("versicherung");
				bi.verdraengung = rs.getString("verdraengung");
				bi.genuagroesse = rs.getString("genuagroesse");
				bi.rufzeichen = rs.getString("rufzeichen");
				bi.rigart = rs.getString("rigart");
				bi.spigroesse = rs.getString("spigroesse");
				result.add(bi);
				i++;
			}
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if(rs!=null) rs.close();
			} catch(Exception e) {
				e.printStackTrace();
				return null;
			}
		}
		return result;
	}
}
%>