package controllers;

import java.sql.SQLException;
import java.util.Map;

import models.Boat;
import models.Boats;
import play.*;
import play.libs.Json;
import play.mvc.*;
import views.html.*;


public class Application extends Controller {
 
	private static Boats myBoats = new Boats();
	
	public static Result index() {
		return ok();
	}
	
	public static Result boatinfo() {
		try {
			myBoats.loadDB();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ok(index.render(myBoats));
	}
	
	public static Result getBoatAtIdx() {
		Map<String, String[]> queryParameters = request().queryString();
		String s = queryParameters.get("idx")[0];
		int idx = Integer.parseInt(s);
		Boat b = myBoats.get(idx);
		return ok(Json.toJson(b));
	}
	
	public static Result deleteBoat() {
		Map<String, String[]> parameters =  request().queryString();
		String s = parameters.get("idx")[0];
		int idx = Integer.parseInt(s);
		Boat b = myBoats.get(idx);
		try {
			myBoats.deleteFromDB(b);
		} catch (SQLException e) {
			e.printStackTrace();
			return ok(e.toString());
		}
		return ok(s);
	}
	
	public static Result insertBoat() {
		Map<String, String[]> parameters = request().body().asFormUrlEncoded();
		Boat b;
		try {
			b = myBoats.insertBoat(parameters);
		} catch (SQLException e) {
			e.printStackTrace();
			return ok(e.toString());
		}
		return ok("Ein Eintrag hinzugefügt/geupdatet");
	}
}