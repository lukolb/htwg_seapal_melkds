package models;

public class Boat {
	public String name;
	public int reg_nr;
	public String sailsign;
	public String port;
	public String club;
	public String owner;
	public String insurance;
	public String call_sign;
	public String typ;
	public String constructor;
	public double length;
	public double width;
	public double depth;
	public double height;
	public String displacement;
	public String art;
	public int build_year;
	public String motor;
	public double tank_size;
	public double water_tank;
	public double effluent_tank;
	public double big_sail;
	public double genua_size;
	public double spi_size;
	public int id;
	
	public Boat() {}
	
	public Boat(int Aid) {
		this.id = Aid;
	}
}
