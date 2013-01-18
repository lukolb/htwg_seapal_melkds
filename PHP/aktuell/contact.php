<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://www.w3.org/2005/10/profile">
	<!--Header-->
	<?php 
		$title = "Contact";
		include("header.php");
	?>
</head>
<body>
	<!--Menü-->
	<?php
		$contact = "class='current_page_item'";
		include("menu.php");
	?>

	<!--Content-->
	<div id="wrapper">
		<div id="page" class="container">
			<div id="content">
				<div class="post">
					<h1>Contac Us</h1>
					<h2 class="title"><a name="ibn">IBN </a></h2>
					<div class="entry">
						
						<p>
							 IBN Redaktion <br>
							 Hans-Dieter Möhlhenrich<br>
							 Malvine-Schiesser-Weg 3<br>
							 78315 Radolfzell<br>
							 Germany<br>
							 <br>
							 <a href="http://www.ibn-online.de">www.ibn-online.de</a><br>
							 ibn at ibn-online.de
						</p>
							 
					</div>
				</div>
				<div class="post">
					<h2 class="title"><a name="htwg">HTWG Constance </a></h2>
					<div class="entry">
						
						<p>
							 HTWG Konstanz<br>
							 Informatik<br>
							 Prof. Dr. Marko Boger<br>
							 Brauneggerstr. 55<br>
							 78462 Konstanz<br>
							 Germany<br>
							 <br>
							 <a href="http://www.htwg-konstanz.de">www.htwg-konstanz.de</a><br>
							 marko.boger at htwg-konstanz.de
						</p>
							 
					</div>
				</div>
				<div style="clear: both;">
					&nbsp;
				</div>
			</div>
			<!-- end #content -->
			<div id="sidebar">
				<div id="box1">
					<h2>Quick Access</h2>
					<ul class="list-style1">
						<li class="first"><a href="#ibn">IBN</a></li>
						<li><a href="#htwg">HTWG Constanz</a></li>
					</ul>
				</div>
			</div>
			<!-- end #sidebar -->
			<div style="clear: both;">
				&nbsp;
			</div>
		</div>
		<!-- end #page -->
	</div>
	
	<!--footer-->
	<?php
		include("footer.php");
	?>
</body>
</html>