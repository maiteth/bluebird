<?php

session_start();

if (isset($_POST['mail']) && !empty($_POST['mail']) &&
	isset($_POST['mdp']) && !empty($_POST['mdp']))
	{ 
		$mail = htmlspecialchars(trim($_POST['mail']));
		$mdp = htmlspecialchars(trim($_POST['mdp']));
		if($mail && $mdp)
		{
			$bd=new PDO('mysql:host=localhost;dbname=bluebird;charset=utf8','root','');
			if($bd)
			{
				$req = $bd->query('SELECT * FROM user WHERE mail="$mail" AND mdp="$mdp"');
				// $rows = mysql_num_rows($req);
				// if($rows==1)
				$_SESSION['mail']=$mail;
				echo 'co reussi';
				header('Location:timeline.php?mail='.$mail);	
			}
			else echo "Nom d'utilisateur ou mot de passe incorrect";
		}
		echo "Veuillez saisir tous les champs";
	}

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>BlueBird / Connexion</title>
		<link rel=stylesheet href="style_login.css">
		<link rel=icon href="images/logo_bluebird.png">
		<script src="js/login.js" type="text/javascript"></script>
	</head>
	
	<body>
		<header>
			<img class=nuagehaut alt=nuagehaut src="images/nuage_haut.png">
			<img class=Move_cloud_top alt=nuagehaut src="images/nuage_haut.png">
		</header><!-- end header -->
		
		<section id=identite>

			<img id=bluebird alt=bluebird src="images/bluebird.png">
			<img id=imglogin alt=imlogin src="images/login_bluebird.png">
			<h1>Tous ses amis sans quitter son nid</h1>
			<div id=tree><img src="images/tree.png"></div>
			

			<form id=champs method=post action=login.php onsubmit="return test()">

				<input class=login name=mail id=mail type=text placeholder="Identifiant" onblur="testmail()" />
				<div class=erreur id="errmail"></div>

				<input class=login name=mdp id=mdp type=password placeholder="Mot de passe" onblur="testmdp()">
				<div class=erreur id="errmdp">mot de passe obligatoire</div>
				<div class=bird></div>
				<div class="align center">
					
					<div class="align center">
						<a class=inscription href="submit.php">Inscription</a>
						<a class=inscription href="#">Mot de passe oublié</a> 
					</div>
					
					<div class="align center"><input id=connexion type=submit value="Connexion"> </div>
			</form>		
				
			
		</section><!-- end section identite -->
		



		<img class=Move_sun alt=sun src="images/sun.png">
		<img class=Move_cloud alt=Move_cloud src="images/moving_cloud1.png">
		<img class=nuagegauche alt=nuagegauche src="images/nuage_gauche.png">
		<img class=nuagedroite alt=nuagedroite src="images/nuage_droite.png">
		<img class=Move_cloud1 alt=Move_cloud1 src="images/moving_cloud.png">
		<img class=Move_cloud2 alt=Move_cloud1 src="images/moving_cloud2.png">
		
		
		<footer>
			<img class=nuagebas alt=nuagebas src="images/nuage_bas.png">
			<img class=pieddepage alt=pieddepage src="images/pied_de_page.png">
		</footer>
	</body>
</html>


