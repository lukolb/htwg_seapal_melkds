package gwt.log.client;

import java.util.ArrayList;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.ToggleButton;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;


public class Logbuch implements EntryPoint {
	private ArrayList<ArrayList<String>> daten = new ArrayList<ArrayList<String>>();
	private ArrayList<ArrayList<String>> tripdaten = new ArrayList<ArrayList<String>>();
	private ArrayList<ArrayList<String>> entrydaten = new ArrayList<ArrayList<String>>();
	private int rowIndex;
	private int oldIndex;
	
	//1. Spalte
	TextBox bootsname = new TextBox();
	TextBox registernr = new TextBox();
	TextBox segelzeichen = new TextBox();
	TextBox heimathafen = new TextBox();
	TextBox yachtclub = new TextBox();
	TextBox eigner = new TextBox();
	TextBox versicherung = new TextBox();
	TextBox rufzeichen = new TextBox();
	//2.Spalte
	TextBox typ = new TextBox();
	TextBox konstrukteur = new TextBox();
	TextBox laenge = new TextBox();
	TextBox breite = new TextBox();
	TextBox tiefgang = new TextBox();
	TextBox masthoehe = new TextBox();
	TextBox verdraengung = new TextBox();
	TextBox rigart = new TextBox();
	//3.Spalte
	TextBox baujahr = new TextBox();
	TextBox motor = new TextBox();
	TextBox tankgroesse = new TextBox();
	TextBox wassertankgroesse = new TextBox();
	TextBox abwassertankgroesse = new TextBox();
	TextBox grosssegelgroesse = new TextBox();
	TextBox genuagroesse = new TextBox();
	TextBox spigroesse = new TextBox();
	
	//Buttons...
	Button loeschen = new Button("L&ouml;schen");
	Button speichern = new Button("Speichern");
	Button neuester = new Button("Neuester");
	Button vorheriger = new Button("Vorheriger");
	Button naechster = new Button("N&auml;chster");
	
	//Tabelle...
	FlexTable table;
	FlexTable triptable;
	FlexTable tableTrips;
	
	Grid buttonGrid;
	Grid infos;
	VerticalPanel panel;
	//TRIPINFO.....
	TextBox triptitle = new TextBox();
	TextBox von = new TextBox();
	TextBox nach = new TextBox();
	TextBox skipper = new TextBox();
	TextBox start = new TextBox();
	TextBox ende = new TextBox();
	TextBox dauer = new TextBox();
	TextBox motorTrip = new TextBox();
	TextArea crew = new TextArea();
	TextArea notes = new TextArea();
	CheckBox tank = new CheckBox();
	Image map = new Image("\\images\\Karte.jpg");
	Image photos = new Image("\\images\\Photos.jpg");
	
	//Buttons...
	Button loeschenTrip = new Button("L&ouml;schen");
	Button neuereintrag = new Button("Neuer Eintrag");
	Button filter = new Button("Filter");
	Button erster = new Button("Erster");
	Button letzter = new Button("Letzter");
	Button vorherigerTrip = new Button("Vorheriger");
	Button naechsterTrip = new Button("N&auml;chster");
	
	@Override
	public void onModuleLoad() {
		init();
		//Feld mit Daten f�llen
		//Daniels Boot
		daten.add(new ArrayList<String>());
		daten.get(0).add("DanielsBoot");
		daten.get(0).add("1234567890");
		daten.get(0).add("Geil");
		daten.get(0).add("Konstanz");
		daten.get(0).add("Geil");
		daten.get(0).add("Daniel");
		daten.get(0).add("Geil");
		daten.get(0).add("Geil");
		daten.get(0).add("Geil");
		daten.get(0).add("Daniel");
		daten.get(0).add("100");
		daten.get(0).add("30");
		daten.get(0).add("10");
		daten.get(0).add("100");
		daten.get(0).add("150");
		daten.get(0).add("Geil");
		daten.get(0).add("1990");
		daten.get(0).add("Geil");
		daten.get(0).add("100");
		daten.get(0).add("100");
		daten.get(0).add("12");
		daten.get(0).add("300");
		daten.get(0).add("31");
		daten.get(0).add("141");
		//Marcels Boot
		daten.add(new ArrayList<String>());
		daten.get(1).add("Marcels Boot");
		daten.get(1).add("0815");
		daten.get(1).add("ME");
		daten.get(1).add("Konstanz");
		daten.get(1).add("1. YC");
		daten.get(1).add("Marcel");
		daten.get(1).add("vorhanden");
		daten.get(1).add("ME");
		daten.get(1).add("1A");
		daten.get(1).add("Marcel");
		daten.get(1).add("12");
		daten.get(1).add("4");
		daten.get(1).add("2");
		daten.get(1).add("8");
		daten.get(1).add("1");
		daten.get(1).add("Gibts auch");
		daten.get(1).add("1989");
		daten.get(1).add("XY23");
		daten.get(1).add("45");
		daten.get(1).add("5");
		daten.get(1).add("2");
		daten.get(1).add("20");
		daten.get(1).add("6");
		daten.get(1).add("15");
		//Lucas Boot
		daten.add(new ArrayList<String>());
		daten.get(2).add("Lucas Boot");
		daten.get(2).add("1122");
		daten.get(2).add("LK");
		daten.get(2).add("Konstanz");
		daten.get(2).add("Club");
		daten.get(2).add("LK");
		daten.get(2).add("vorhanden");
		daten.get(2).add("LK");
		daten.get(2).add("guter Typ");
		daten.get(2).add("Lucas");
		daten.get(2).add("10");
		daten.get(2).add("3");
		daten.get(2).add("2");
		daten.get(2).add("7");
		daten.get(2).add("3");
		daten.get(2).add("Rig2");
		daten.get(2).add("1991");
		daten.get(2).add("abc4");
		daten.get(2).add("50");
		daten.get(2).add("6");
		daten.get(2).add("2.5");
		daten.get(2).add("18");
		daten.get(2).add("5");
		daten.get(2).add("14");
		
		//Funktion zu Buttons hinzuf�gen
		loeschen.addClickHandler(new ClickHandler(){
			public void onClick(ClickEvent event){
				table.removeRow(rowIndex);
				rowIndex--;
			}
		});
		speichern.addClickHandler(new ClickHandler(){
			public void onClick(ClickEvent event){
				//Feld f�llen
				final int i = daten.size();
				daten.add(new ArrayList<String>());
				daten.get(i).add(bootsname.getText());
				daten.get(i).add(registernr.getText());
				daten.get(i).add(segelzeichen.getText());
				daten.get(i).add(heimathafen.getText());
				daten.get(i).add(yachtclub.getText());
				daten.get(i).add(eigner.getText());
				daten.get(i).add(versicherung.getText());
				daten.get(i).add(rufzeichen.getText());
				daten.get(i).add(typ.getText());
				daten.get(i).add(konstrukteur.getText());
				daten.get(i).add(laenge.getText());
				daten.get(i).add(breite.getText());
				daten.get(i).add(tiefgang.getText());
				daten.get(i).add(masthoehe.getText());
				daten.get(i).add(verdraengung.getText());
				daten.get(i).add(rigart.getText());
				daten.get(i).add(baujahr.getText());
				daten.get(i).add(motor.getText());
				daten.get(i).add(tankgroesse.getText());
				daten.get(i).add(wassertankgroesse.getText());
				daten.get(i).add(abwassertankgroesse.getText());
				daten.get(i).add(grosssegelgroesse.getText());
				daten.get(i).add(genuagroesse.getText());
				daten.get(i).add(spigroesse.getText());
				int numRows = table.getRowCount();
				table.setWidget(numRows, 0, new HTML(daten.get(i).get(0)));
				table.setWidget(numRows, 1, new HTML(daten.get(i).get(8)));
				table.setWidget(numRows, 2, new HTML(daten.get(i).get(9)));
				table.setWidget(numRows, 3, new HTML(daten.get(i).get(10)));
				table.setWidget(numRows, 4, new HTML(daten.get(i).get(5)));
				table.setWidget(numRows, 5, new ToggleButton(new Image("\\images\\button.png"), new ClickHandler() {
					@Override
					public void onClick(ClickEvent event) {
						// TODO Auto-generated method stub
						getTrips(daten.get(i).get(0),daten.get(i).get(1));
					}
				}));
				//Style hinzuf�gen
				table.getRowFormatter().addStyleName(numRows, "table-row");
				
			}
		});
		neuester.addClickHandler(new ClickHandler(){
			public void onClick(ClickEvent event){
				table.getRowFormatter().removeStyleName(oldIndex, "selected-row");
				rowIndex = table.getRowCount()-1;
				oldIndex = rowIndex;
				table.getRowFormatter().addStyleName(rowIndex, "selected-row");
				//Daten anzeigen
				datenanzeigen(rowIndex-1);
			}
		});
		vorheriger.addClickHandler(new ClickHandler(){
			public void onClick(ClickEvent event){
				if(rowIndex > 1){
					table.getRowFormatter().removeStyleName(oldIndex, "selected-row");
					rowIndex --;
					oldIndex = rowIndex;
					table.getRowFormatter().addStyleName(rowIndex, "selected-row");
					//Daten anzeigen
					datenanzeigen(rowIndex-1);
				}else{
					//do nothing...
				}
			}
		});
		naechster.addClickHandler(new ClickHandler(){
			public void onClick(ClickEvent event){
				if(rowIndex < (table.getRowCount()-1)){
					table.getRowFormatter().removeStyleName(oldIndex, "selected-row");
					rowIndex++;
					oldIndex = rowIndex;
					table.getRowFormatter().addStyleName(rowIndex, "selected-row");
					//Daten anzeigen
					datenanzeigen(rowIndex-1);
				}else{
					//do nothing
				}
				//getTrips("Boot","0815");
			}
		});
		
		//Tabelle erstellen
		Grid grid = new Grid(8,6);
		//1. Spalte
		grid.setText(0, 0, "Bootsname");
		grid.setWidget(0, 1, bootsname);
		grid.setText(1, 0 ,"Registernr.");
		grid.setWidget(1, 1, registernr);
		grid.setText(2, 0 ,"Segelzeichen");
		grid.setWidget(2, 1, segelzeichen);
		grid.setText(3, 0 ,"Heimathafen");
		grid.setWidget(3, 1, heimathafen);
		grid.setText(4, 0 ,"Yachtclub");
		grid.setWidget(4, 1, yachtclub);
		grid.setText(5, 0 ,"Eigner");
		grid.setWidget(5, 1, eigner);
		grid.setText(6, 0 ,"Versicherung");
		grid.setWidget(6, 1, versicherung);
		grid.setText(7, 0 ,"Rufzeichen");
		grid.setWidget(7, 1, rufzeichen);
		//2. Spalte
		grid.setText(0, 2, "Typ");
		grid.setWidget(0, 3, typ);
		grid.setText(1, 2,"Konstrukteur");
		grid.setWidget(1, 3, konstrukteur);
		grid.setText(2, 2,"L\u00E4nge");
		grid.setWidget(2, 3, laenge);
		grid.setText(3, 2,"Breite");
		grid.setWidget(3, 3, breite);
		grid.setText(4, 2,"Tiefgang");
		grid.setWidget(4, 3, tiefgang);
		grid.setText(5, 2,"Masth\u00F6he");
		grid.setWidget(5, 3, masthoehe);
		grid.setText(6, 2,"Verdr\u00E4ngung");
		grid.setWidget(6, 3, verdraengung);
		grid.setText(7, 2,"Rig-Art");
		grid.setWidget(7, 3, rigart);
		//3. Spalte
		grid.setText(0, 4, "Baujahr");
		grid.setWidget(0, 5, baujahr);
		grid.setText(1, 4,"Motor");
		grid.setWidget(1, 5, motor);
		grid.setText(2, 4,"Tankgr\u00F6\u00DFe");
		grid.setWidget(2, 5, tankgroesse);
		grid.setText(3, 4,"Wassertankgr\u00F6\u00DFe");
		grid.setWidget(3, 5, wassertankgroesse);
		grid.setText(4, 4,"Abwassertankgr\u00F6\u00DFe");
		grid.setWidget(4, 5, abwassertankgroesse);
		grid.setText(5, 4,"Gro\u00DFsegelgr\u00F6\u00DFe");
		grid.setWidget(5, 5, grosssegelgroesse);
		grid.setText(6, 4,"Genuagr\u00F6\u00DFe");
		grid.setWidget(6, 5, genuagroesse);
		grid.setText(7, 4,"Spigr\u00F6\u00DFe");
		grid.setWidget(7, 5, spigroesse);
		
		//Grid f�r Button erstellen		
		buttonGrid = new Grid(1,5);
		buttonGrid.setWidget(0, 0, loeschen);
		buttonGrid.setWidget(0, 1, speichern);
		buttonGrid.setWidget(0, 2, neuester);
		buttonGrid.setWidget(0, 3, vorheriger);
		buttonGrid.setWidget(0, 4, naechster);
		
		//Panel erstellen
		panel = new VerticalPanel();
		//Panel zusammenbauen
		panel.add(grid);
		
		/*Men�*/
		HTML menu = new HTML(
				"<div id='header-wrapper'>"
				+ "<div id='header' class='container'>"
					+ "<div id='logo'>"
						+ "<h1><a name='top' href='index.php'><img src='images/Icon-Small-50.png' id='picture'/>SeaPal </a></h1>"
					+ "</div>"
					+ "<div id='menu'>"
						+ "<ul>"
							+ "<li><a href=index.php>Homepage</a></li>"
							+ "<li><a href=userguide.php>User Guide</a></li>"
							+ "	<li><a href=screenshots.php>Screenshots</a></li>"
							+ "	<li><a href=about.php>About</a></li>"
							+ "	<li><a href=contact.php>Contact</a></li>"
							+ " <li><a href=karte.html>Karte</a></li>"
							+ " <div id='webappmenu'><ul> "
							+ " <li class='topmenu'><a href='hallo.de'>Web-App</a>"
							+ " <ul>"
									+ " <li class='submenu'><a href='localhost/aktuell/boatinfo.php' >PHP</a></li>"
									+ " <li class='submenu'><a href='http://127.0.0.1:8888/Logbuch.html?gwt.codesvr=127.0.0.1:9997' >GWT</a></li>"
										+ " <li class='submenu'><a href='http://localhost:9000/boatinfo'>PLAY</a></li>"
											+ " <li class='submenu'><a href=''>JSP</a></li>"
											+ " </ul>"
							+ " </li>"
							+ " </ul></div>"
						+ "</ul>"
					+ "</div>"
				+ "</div>"
				+ "</div>");
		
		
		//Datentabelle
		table = new FlexTable();
		table.addStyleName("FlexTable");
		table.getRowFormatter().addStyleName(0, "table-header");
		//Header-Zeile
		table.setWidget(0, 0, new HTML("Bootsname"));
		table.setWidget(0, 1, new HTML("Bootstyp"));
		table.setWidget(0, 2, new HTML("Konstrukteur"));
		table.setWidget(0, 3, new HTML("L&auml;nge"));
		table.setWidget(0, 4, new HTML("Inhaber"));
		table.setWidget(0, 5, new HTML("Trips"));
		//1.Daten-Zeile
		table.setWidget(1, 0, new HTML(daten.get(0).get(0)));
		table.setWidget(1, 1, new HTML(daten.get(0).get(8)));
		table.setWidget(1, 2, new HTML(daten.get(0).get(9)));
		table.setWidget(1, 3, new HTML(daten.get(0).get(10)));
		table.setWidget(1, 4, new HTML(daten.get(0).get(5)));
		table.setWidget(1, 5, new ToggleButton(new Image("\\images\\button.png"), new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				// TODO Auto-generated method stub
				getTrips(daten.get(0).get(0),daten.get(0).get(1));
			}
		}));
		table.getRowFormatter().addStyleName(1, "table-row");
		//2.Daten-Zeile
		table.setWidget(2, 0, new HTML(daten.get(1).get(0)));
		table.setWidget(2, 1, new HTML(daten.get(1).get(8)));
		table.setWidget(2, 2, new HTML(daten.get(1).get(9)));
		table.setWidget(2, 3, new HTML(daten.get(1).get(10)));
		table.setWidget(2, 4, new HTML(daten.get(1).get(5)));
		table.setWidget(2, 5, new ToggleButton(new Image("\\images\\button.png"), new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				// TODO Auto-generated method stub
				getTrips(daten.get(1).get(0),daten.get(1).get(1));
			}
		}));
		table.getRowFormatter().addStyleName(2, "table-row");
		//2.Daten-Zeile
		table.setWidget(3, 0, new HTML(daten.get(2).get(0)));
		table.setWidget(3, 1, new HTML(daten.get(2).get(8)));
		table.setWidget(3, 2, new HTML(daten.get(2).get(9)));
		table.setWidget(3, 3, new HTML(daten.get(2).get(10)));
		table.setWidget(3, 4, new HTML(daten.get(2).get(5)));
		table.setWidget(3, 5, new ToggleButton(new Image("\\images\\button.png"), new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				// TODO Auto-generated method stub
				getTrips(daten.get(2).get(0),daten.get(2).get(1));
			}
		}));
		table.getRowFormatter().addStyleName(3, "table-row");
		
		table.addClickHandler(new ClickHandler(){
			@Override
			public void onClick(ClickEvent event) {

				rowIndex = table.getCellForEvent(event).getRowIndex();
				if(rowIndex != 0){
					table.getRowFormatter().removeStyleName(oldIndex, "selected-row");
					oldIndex = rowIndex;
					System.out.println("Reihe: " + rowIndex);
					table.getRowFormatter().addStyleName(rowIndex, "selected-row");
					//Daten anzeigen
					datenanzeigen(rowIndex-1);
				}
			}
			
		});
		
		//Men� zur Seite hinzuf�gen
		RootPanel.get("menue").add(menu);
		//Panel zur Seite hinzuf�gen
		RootPanel.get("boatinfo_table").add(panel);
		//Tabelle zur Seite hinzuf�gen
		RootPanel.get("table").add(table);
		RootPanel.get("boatinfo_buttons").add(buttonGrid);
		
		
	}
	
	public void getTrips(String name, String regnr){
		//Titel anpassen
		Document.get().setTitle("Trips - GWT");
		
		//Panel von Seite entfernen
		RootPanel.get("boatinfo_table").remove(panel);
		//Tabelle von Seite entfernen
		RootPanel.get("table").remove(table);
		RootPanel.get("boatinfo_buttons").remove(buttonGrid);
		
		infos = new Grid(2,2);
		infos.setText(0, 0, "Bootsname:");
		infos.setText(0, 1, "" + name);
		infos.setText(1, 0, "Registernummer:");
		infos.setText(1, 1, "" + regnr);
		
		//Datentabelle
		triptable = new FlexTable();
		triptable.addStyleName("FlexTable");
		triptable.getRowFormatter().addStyleName(0, "table-header");
		//Header-Zeile
		triptable.setWidget(0, 0, new HTML("Tripname"));
		triptable.setWidget(0, 1, new HTML("Von"));
		triptable.setWidget(0, 2, new HTML("Nach"));
		triptable.setWidget(0, 3, new HTML("Skipper"));
		triptable.setWidget(0, 4, new HTML("Dauer"));
		
		triptable.addClickHandler(new ClickHandler(){
			@Override
			public void onClick(ClickEvent event) {

				rowIndex = triptable.getCellForEvent(event).getRowIndex();
				if(rowIndex != 0){
					getTripinfo(tripdaten.get(rowIndex-1).get(11));
				}
			}
			
		});
		
		for(int i = 0; i < tripdaten.size(); i++){
			System.out.println("TripSize: " + tripdaten.size());
			String nr = tripdaten.get(i).get(10);
			System.out.println(nr == regnr);
			if(nr == regnr){
				int numRows = triptable.getRowCount();
				System.out.println("Reihe: " + numRows);
				triptable.setWidget(numRows, 0, new HTML(tripdaten.get(i).get(0)));
				triptable.setWidget(numRows, 1, new HTML(tripdaten.get(i).get(1)));
				triptable.setWidget(numRows, 2, new HTML(tripdaten.get(i).get(2)));
				triptable.setWidget(numRows, 3, new HTML(tripdaten.get(i).get(3)));
				triptable.setWidget(numRows, 4, new HTML(tripdaten.get(i).get(7)));
				triptable.getRowFormatter().addStyleName(numRows, "table-row");
			}
		}
		
		RootPanel.get("boatinfo_table").add(infos);
		RootPanel.get("table").add(triptable);
		
	}
	
	public void getTripinfo(String tripID){
		//Titel anpassen
		Document.get().setTitle("Tripinfo - GWT");
		
		//Panel von Seite entfernen
		RootPanel.get("boatinfo_table").remove(infos);
		//Tabelle von Seite entfernen
		RootPanel.get("table").remove(triptable);
		

		photos.setWidth("250px");
		photos.setHeight("250px");
		notes.setHeight("240px");
		notes.setWidth("210px");
		
		
		//Neuer Content....
		//1. Spalte
		Grid tripDaten = new Grid(5,8);
		tripDaten.setText(0, 0, "Trip title");
		tripDaten.setWidget(0, 1, triptitle);

		Element cellFormatter = tripDaten.getCellFormatter().getElement(0, 1);
		cellFormatter.setAttribute("colspan", "2");
		tripDaten.setText(1, 0, "Von");
		tripDaten.setWidget(1, 1, von);
		tripDaten.setText(2,0, "Nach");
		tripDaten.setWidget(2, 1, nach);
		tripDaten.setText(3, 0, "Skipper");
		tripDaten.setWidget(3, 1, skipper);
		//tripDaten.setText(4, 0, "Notes");
		//tripDaten.setWidget(4, 0, notes);
		//2. Spalte
		tripDaten.setText(1, 2, "Crew");
		tripDaten.setWidget(1, 3, crew);
		//tripDaten.setWidget(4, 2, map);
		//3. Spalte
		tripDaten.setText(1, 4, "Start");
		tripDaten.setWidget(1, 5, start);
		tripDaten.setText(2, 4, "Ende");
		tripDaten.setWidget(2, 5, ende);
		tripDaten.setText(3, 4, "Dauer");
		tripDaten.setWidget(3, 5, dauer);
		//tripDaten.setWidget(4, 6, photos);
		//4. Spalte
		tripDaten.setText(1, 6, "Motor(min)");
		tripDaten.setWidget(1, 7, motorTrip);
		tripDaten.setText(2, 6, "Tank gefüllt");
		tripDaten.setWidget(2, 7, tank);
		
		Grid bilder = new Grid(1,3);
		bilder.setWidget(0, 0, notes);
		bilder.setWidget(0, 1, map);
		bilder.setWidget(0, 2, photos);
		
		panel = new VerticalPanel();
		panel.add(tripDaten);
		panel.add(bilder);
		
		
		//Trip-Datentabelle
		tableTrips = new FlexTable();
		tableTrips.addStyleName("FlexTable");
		
		
		//Grid f�r Button erstellen		
		buttonGrid = new Grid(1,7);
		buttonGrid.setWidget(0, 0, neuereintrag);
		buttonGrid.setWidget(0, 1, loeschenTrip);
		buttonGrid.setWidget(0, 2, filter);
		buttonGrid.setWidget(0, 3, erster);
		buttonGrid.setWidget(0, 4, letzter);
		buttonGrid.setWidget(0, 5, vorherigerTrip);
		buttonGrid.setWidget(0, 6, naechsterTrip);
		
		RootPanel.get("boatinfo_table").add(panel);
		RootPanel.get("table").add(tableTrips);
		RootPanel.get("boatinfo_buttons").add(buttonGrid);
		
		tripDatenLaden(tripID);
	}
	
	public void init(){
		
		//Trip-Daten
		tripdaten.add(new ArrayList<String>());
		tripdaten.get(0).add("Fahrt ins Blaue");
		tripdaten.get(0).add("Konstanz");
		tripdaten.get(0).add("Lindau");
		tripdaten.get(0).add("Marcel");
		tripdaten.get(0).add("Marcel, Daniel und Lucas");
		tripdaten.get(0).add("2012-10-25");
		tripdaten.get(0).add("2012-10-25");
		tripdaten.get(0).add("1 Stunde");
		tripdaten.get(0).add("59");
		tripdaten.get(0).add("1");
		tripdaten.get(0).add("0815");
		tripdaten.get(0).add("1");
		tripdaten.get(0).add("Schön wars....");
		
		entrydaten.add(new ArrayList<String>());
		entrydaten.get(0).add("1");
		entrydaten.get(0).add("Test");
		entrydaten.get(0).add("132");
		entrydaten.get(0).add("5");
		entrydaten.get(0).add("3");
		entrydaten.get(0).add("15");
		entrydaten.get(0).add("2");
		entrydaten.get(0).add("66");
		entrydaten.get(0).add("130");
		entrydaten.get(0).add("14kn");
		entrydaten.get(0).add("btm");
		entrydaten.get(0).add("dtm");
		entrydaten.get(0).add("Mark1");
		entrydaten.get(0).add("Jibe");
		entrydaten.get(0).add("Fock");
		entrydaten.get(0).add("reef 2");
		entrydaten.get(0).add("0:20");
		entrydaten.get(0).add("1");
		entrydaten.get(0).add("NULL");
		
		entrydaten.add(new ArrayList<String>());
		entrydaten.get(1).add("3");
		entrydaten.get(1).add("Test");
		entrydaten.get(1).add("132");
		entrydaten.get(1).add("5");
		entrydaten.get(1).add("3");
		entrydaten.get(1).add("15");
		entrydaten.get(1).add("2");
		entrydaten.get(1).add("66");
		entrydaten.get(1).add("130");
		entrydaten.get(1).add("14kn");
		entrydaten.get(1).add("btm");
		entrydaten.get(1).add("dtm");
		entrydaten.get(1).add("Mark1");
		entrydaten.get(1).add("Jibe");
		entrydaten.get(1).add("Fock");
		entrydaten.get(1).add("reef 2");
		entrydaten.get(1).add("3:56");
		entrydaten.get(1).add("1");
		entrydaten.get(1).add("NULL");
	}
	
	public void datenanzeigen(int row){
		bootsname.setText(daten.get(row).get(0));
		registernr.setText(daten.get(row).get(1));
		segelzeichen.setText(daten.get(row).get(2));
		heimathafen.setText(daten.get(row).get(3));
		yachtclub.setText(daten.get(row).get(4));
		eigner.setText(daten.get(row).get(5));
		versicherung.setText(daten.get(row).get(6));
		rufzeichen.setText(daten.get(row).get(7));
		typ.setText(daten.get(row).get(8));
		konstrukteur.setText(daten.get(row).get(9));
		laenge.setText(daten.get(row).get(10));
		breite.setText(daten.get(row).get(11));
		tiefgang.setText(daten.get(row).get(12));
		masthoehe.setText(daten.get(row).get(13));
		verdraengung.setText(daten.get(row).get(14));
		rigart.setText(daten.get(row).get(15));
		baujahr.setText(daten.get(row).get(16));
		motor.setText(daten.get(row).get(17));
		tankgroesse.setText(daten.get(row).get(18));
		wassertankgroesse.setText(daten.get(row).get(19));
		abwassertankgroesse.setText(daten.get(row).get(20));
		grosssegelgroesse.setText(daten.get(row).get(21));
		genuagroesse.setText(daten.get(row).get(22));
		spigroesse.setText(daten.get(row).get(23));
	}

	
	public void tripDatenLaden(String id){
		System.out.println("ID: " + id);
		for(int i = 0; i < tripdaten.size(); i++){
			if(tripdaten.get(i).get(11) == id){
				triptitle.setText(tripdaten.get(i).get(0));
				von.setText(tripdaten.get(i).get(1));
				nach.setText(tripdaten.get(i).get(2));
				skipper.setText(tripdaten.get(i).get(3));
				crew.setText(tripdaten.get(i).get(4));
				start.setText(tripdaten.get(i).get(5));
				ende.setText(tripdaten.get(i).get(6));
				dauer.setText(tripdaten.get(i).get(7));
				motorTrip.setText(tripdaten.get(i).get(8));
				
				if(tripdaten.get(i).get(9).equals("1")){
					tank.setValue(true);
				}else{
					tank.setValue(false);
				}
			}
		}
		int entryrow = entrydaten.size()-1;
		for(int j = 0; j < entrydaten.size(); j++){
			if(entrydaten.get(j).get(17) == id){
				tableTrips.setWidget(entryrow, 0, new HTML(entrydaten.get(j).get(1)));
				tableTrips.setWidget(entryrow, 1, new HTML(entrydaten.get(j).get(16)+" min"));		
				tableTrips.setWidget(entryrow, 2, new HTML(entrydaten.get(j).get(2)
						+ "°" + entrydaten.get(j).get(3)
						+ "'" + entrydaten.get(j).get(4)
						+ "\""));
				tableTrips.setWidget(entryrow, 3, new HTML(entrydaten.get(j).get(5)
						+ "°" + entrydaten.get(j).get(6)
						+ "'" + entrydaten.get(j).get(7)
						+ "\""));
				tableTrips.setWidget(entryrow, 4, new HTML("COG " + entrydaten.get(j).get(8)));
				tableTrips.setWidget(entryrow, 5, new HTML("SOG " + entrydaten.get(j).get(9)));
				tableTrips.setWidget(entryrow, 6, new HTML("<input type='image' src='\\images\\button.png'>"));
				tableTrips.getRowFormatter().addStyleName(entryrow, "table-row");
				entryrow++;
			}
		}
	}
}
