package models;

import java.sql.*;
import java.util.*;
import javax.sql.DataSource;
import play.db.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

public class Boats {
	public ArrayList<Boat> boat_list;
	
	private Connection con = null;
	private DataSource ds = null;
	private Boolean loaded = false;
	
	public Boats() {
		boat_list = new ArrayList<Boat>();
	}
	
	public boolean add(Boat b) {
		return boat_list.add(b);
	}
	
	public ArrayList<Boat> getList() {
		return boat_list;
	}
	
	public void addAt(int i, Boat b) {
		boat_list.add(i, b);
	}
	
	public boolean delete(Boat b) {
		return boat_list.remove(b);
	}
	
	public int getSize() {
		return boat_list.size();
	}
	
	public int getIndex(Boat b) {
		for (int i = 0; i < getSize(); i++) {
			if (get(i).id == b.id) {
				return i;
			}
		}
		return -1;
	}
	
	public Boat get(int i) {
		return boat_list.get(i);
	}
	
	public Boat gethighestID() {
		int ID = -1;
		int idx = -1;
		for (int i = 0; i < getSize(); i++) {
			if (get(i).id > ID) {
				ID = get(i).id;
				idx = i;
			}
		}
		return get(idx);
	}
	
	private void openDB() {
		ds = DB.getDataSource();
		con = DB.getConnection();
	}
	
	private void closeDB() {
		if (con != null) {
            try {
                con.close();
            } catch (Exception e) {
            }
        }
	}
	
	public boolean isConnected() {
        try {
            Statement st = con.createStatement();
        	ResultSet rs = st.executeQuery("SELECT 1;");
            if (rs == null) {
                return false;
            }
            if (rs.next()) {
                return true;
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }
	
	private void deleteAll() {
		boat_list.clear();
	}
	
	public boolean loadDB() throws SQLException {
		deleteAll();
		openDB();
		if (isConnected()) {
			// Connected to DB
			Statement stmt = con.createStatement();
			String sql = "SELECT * FROM boatinfo2";
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()) {
				Boat b = new Boat(rs.getInt("id"));
				add(b);
				b.name = rs.getString("bootsname");
				b.reg_nr = Integer.parseInt(rs.getString("registernr"));
				b.sailsign = rs.getString("segelzeichen");
				b.port = rs.getString("heimathafen");
				b.club = rs.getString("yachtclub");
				b.owner = rs.getString("eigner");
				b.insurance = rs.getString("versicherung");
				b.call_sign = rs.getString("rufzeichen");
				b.typ = rs.getString("typ");
				b.constructor = rs.getString("konstrukteur");
				b.length = rs.getInt("laenge");
				b.width = rs.getInt("breite");
				b.depth = rs.getInt("tiefgang");
				b.height = rs.getInt("masthoehe");
				b.displacement = rs.getString("verdraengung");
				b.art = rs.getString("rigart");
				b.build_year = rs.getInt("baujahr");
				b.motor = rs.getString("motor");
				b.tank_size = rs.getInt("tankgroesse");
				b.water_tank = rs.getInt("wassertankgroesse");
				b.effluent_tank = rs.getInt("abwassertankgroesse");
				b.big_sail = rs.getInt("grosssegelgroesse");
				b.genua_size = rs.getInt("genuagroesse");
				b.spi_size = rs.getInt("spigroesse");
			}
		}
		closeDB();
		loaded = true;

		return true;
	}
	
	public Boolean deleteFromDB(Boat b) throws SQLException {
		openDB();
		Statement stmt = con.createStatement();
		String sql = "DELETE FROM boatinfo2"
					 + " WHERE registernr = " + b.reg_nr;
		int rs = stmt.executeUpdate(sql);
		delete(b);
		closeDB();
		return true;
	}
	
	public Boat insertBoat(Map<String, String[]> m) throws SQLException {
		openDB();
		Statement stmt = con.createStatement();
		String sql = "SELECT id FROM boatinfo2 WHERE registernr = " + m.get("registernr")[0];
		ResultSet rs = stmt.executeQuery(sql);
		rs.last();
		if (rs.getRow() != 0) {
			sql = "UPDATE boatinfo2"
				 + " SET "
				 + "bootsname = \"" + m.get("bootsname")[0] + "\""
				 + ", segelzeichen = \"" + m.get("segelzeichen")[0] + "\""
				 + ", heimathafen = \"" + m.get("heimathafen")[0] + "\""
				 + ", yachtclub = \"" + m.get("yachtclub")[0] + "\""
				 + ", eigner =\" " + m.get("eigner")[0] + "\""
				 + ", versicherung = \"" + m.get("versicherung")[0] + "\""
				 + ", rufzeichen = \"" + m.get("rufzeichen")[0] + "\""
				 + ", typ = \"" + m.get("typ")[0] + "\""
				 + ", konstrukteur = \"" + m.get("konstrukteur")[0] + "\""
				 + ", laenge = " + m.get("laenge")[0]
				 + ", breite = " + m.get("breite")[0]
				 + ", tiefgang = " + m.get("tiefgang")[0]
				 + ", masthoehe = " + m.get("masthoehe")[0]
				 + ", verdraengung = " + m.get("verdraengung")[0]
				 + ", rigart = \"" + m.get("rigart")[0] + "\""
				 + ", baujahr = " + m.get("baujahr")[0]
				 + ", motor = \"" + m.get("motor")[0] + "\""
				 + ", tankgroesse = " + m.get("tankgroesse")[0]
				 + ", wassertankgroesse = " + m.get("wassertankgroesse")[0]
				 + ", abwassertankgroesse = " + m.get("abwassertankgroesse")[0]
				 + ", grosssegelgroesse = " + m.get("grosssegelgroesse")[0]
				 + ", genuagroesse = " + m.get("genuagroesse")[0]
				 + ", spigroesse = " + m.get("spigroesse")[0]
				 + " WHERE registernr = " + m.get("registernr")[0];
		} else {
			sql = "INSERT INTO boatinfo2 (bootsname, registernr, segelzeichen, heimathafen, " +
					"yachtclub, eigner, versicherung, rufzeichen, typ, konstrukteur, " +
					"laenge, breite, tiefgang, masthoehe, verdraengung, rigart, baujahr, motor, " +
					"tankgroesse, wassertankgroesse, abwassertankgroesse, grosssegelgroesse, " +
					"genuagroesse, spigroesse) VALUES (\""
				 + m.get("bootsname")[0] + "\",\""
				 + m.get("registernr")[0] + "\",\""
				 + m.get("segelzeichen")[0] + "\",\""
				 + m.get("heimathafen")[0] + "\",\""
				 + m.get("yachtclub")[0] + "\",\""
				 + m.get("eigner")[0] + "\",\""
				 + m.get("versicherung")[0] + "\",\""
				 + m.get("rufzeichen")[0] + "\",\""
				 + m.get("typ")[0] + "\",\""
				 + m.get("konstrukteur")[0] + "\",\""
				 + m.get("laenge")[0] + "\",\""
				 + m.get("breite")[0] + "\",\""
				 + m.get("tiefgang")[0] + "\",\""
				 + m.get("masthoehe")[0] + "\",\""
				 + m.get("verdraengung")[0] + "\",\""
				 + m.get("rigart")[0] + "\",\""
				 + m.get("baujahr")[0] + "\",\""
				 + m.get("motor")[0] + "\",\""
				 + m.get("tankgroesse")[0] + "\",\""
				 + m.get("wassertankgroesse")[0] + "\",\""
				 + m.get("abwassertankgroesse")[0] + "\",\""
				 + m.get("grosssegelgroesse")[0] + "\",\""
				 + m.get("genuagroesse")[0] + "\",\""
				 + m.get("spigroesse")[0] + "\")";
		}
		
		int rows = stmt.executeUpdate(sql);
		closeDB();
		
		loadDB();
		return gethighestID();
	}
}
