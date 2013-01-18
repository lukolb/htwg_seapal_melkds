<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://www.w3.org/2005/10/profile">
	<!--Header-->
	<% String title = "About"; %>
	<%@ include file="header.jsp" %>
</head>
<body>
	<!--Menü-->
	<%@ include file="menu.jsp" %>

	<!--Content-->
	<div id="wrapper">
		<div id="page" class="container">
			<div id="content">
				<div class="post">
					<h1 class="title"><a name="about">About SeaPal </a></h1>
					<div class="entry">
						
						<p>
							 The <b>SeaPal</b> application was developed in a cooperation between the IBN publishing house and the HTWG Constance University. 								</p>
						<p>IBN is a publishing house specialized in sailing and boating in the southern part of Germany. IBN has a long tradition of providing high quality maps, harbor guides and news for sailors for the lake Constance and the south of Germany. IBN initiated this project to bring their content to new mobile platforms like the iPad and the iPhone. 
							
						</p>	
						<p>The University HTWG Constance is a University of Applied Sciences located in Constance right on the shores of the lake. Prof. Dr. Marko Boger leads the project and did the original concept. He works in the computer science department as professor for Software Architecture and Software Engineering. Software development for mobile platforms as well as for the web are included in this research and teaching. He is also an active sailor with more than 5,000 nm of experience in all waters of Europe.  
						</p>
						<p>These two partners initiated this project as an open cooperation to provide a modern, simple, yet powerful application for mobile devices. It is our goal to provide a base version of SeaPal free of charge with free online maps to sailors around the world. We also provide extensions to finance this project. Please view purchases as sponsoring to help advance our ambitious project. It will be used to further advance and develop this app.  
						</p> 
						<p>The development is partly done by a team of experienced software developers and partly in research and study groups at the University.
						</p>
						<p>Our cooperation is also open for other partners. If you are interested to join our partnership, to provide further content or develop extension, please contact us. You can also sponsor the development of specific functionalities or extensions. 
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
					<h2>More Information</h2>
					<ul class="list-style1">
						<li class="first"><a href="userguide.php">User Guide</a></li>
						<li><a href="contact.php">Contact us</a></li>
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
	<%@ include file="footer.jsp" %>
</body>
</html>