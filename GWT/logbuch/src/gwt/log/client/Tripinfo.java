package gwt.log.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.RootPanel;

public class Tripinfo implements EntryPoint{

	@Override
	public void onModuleLoad() {
		// TODO Auto-generated method stub
		RootPanel.get("test").add(new HTML("Das ist ein Test!"));
	}

}
