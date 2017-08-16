 <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>BlueBird / Inscrption</title>
		<link rel=stylesheet href="style_login.css">
		<link rel=icon href="images/logo_bluebird.png">
		<script src="js/jquery-3.1.1.min.js"></script>
		<script src="js/jqFancyTransitions.1.8.min.js"></script>
		<script src="js/submit.js" type="text/javascript"></script>
	</head>
	
	<body>
		<header>
			<img class=nuagehaut alt=nuagehaut src="images/nuage_haut.png">
			<img class=Move_cloud_top alt=nuagehaut src="images/nuage_haut.png">
		</header>
		
		<section id=identite>
			<img id=bluebird alt=bluebird src="images/bluebird.png">
			<img id=imglogin alt=imglogin src="images/sub_bluebird.png">
			<H1 id=slogan>Inscription</h1>
			<img class=nuagegauche alt=nuagegauche src="images/nuage_gauche.png">

			<form name=formulaire_inscription id=champs method=post action='submit_x.php' onsubmit="return test()">
					
				<input class=login type="text" name="nom" id="nom" placeholder=Nom  onblur="testnom()">
				<div class="erreur" id="errnom">le nom est obligatoire</div>

				<input class=login type="text" name="prenom" id="prenom" placeholder=Prénom onblur="testprenom()">
				<div class=erreur id="errprenom">le prénom est obligatoire</div>
				<img class=nuagedroite alt=nuagedroite src="images/nuage_droite.png">
				 <input class=login type=date placeholder="Date de naissance" name=dateNaissance id=dateNaissance onBlur="verifdt();" maxlength="10"> 
				<div class=erreur id="errdate"></div>

				<input class=login type="text" name="mail" id="mail" placeholder=Email onblur="testmail()" />
				<div class=erreur id="errmail"></div>
				<div id=ajaxMail></div>


				<input class=login type="password" name="mdp" id="mdp" 
				placeholder="Mot de passe" onblur="testmdp()">
				<div id="forcemdp"></div>
				<input class=login type="password" name="mdp2" id="mdp2" onblur="testmdp2()" placeholder="Confirmation">
				<div class=erreur id="errmdp">mot de passe obligatoire</div>
				<div class=erreur id="errmdp2"></div>

				<input  class=login type="submit" value="valider">

			</form>	
	
		</section>
		
		<img class=Move_sun alt=sun src="images/sun.png">
		<img class=Move_cloud alt=Move_cloud src="images/moving_cloud1.png">
		
		
		<img class=Move_cloud1 alt=Move_cloud1 src="images/moving_cloud.png">
		<img class=Move_cloud2 alt=Move_cloud1 src="images/moving_cloud2.png">
		
		<footer>
			<img id=nuagebas alt=nuagebas src="images/nuage_bas.png">
			<img id=pieddepage alt=pieddepage src="images/pied_de_page.png">
		</footer>
	</body>
</html>
