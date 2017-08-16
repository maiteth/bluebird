<?php


// date aujourd'hui
$date = new DateTime();
// date - 18 ans
$date_18 = $date->sub(new DateInterval('P18Y'));
 
// si $_POST['date_naissance'] est au format date par exemple = 2001-12-25
$date_naissance = new DateTime($_POST['dateNaissance']);
 
if($date_naissance <= $date_18)
{

//cette page reçoit $_post['nom'],$_post['prenom'],$_post['dateNaissance'],$_post['mail'],$_post['mdp']
	if(	isset($_POST['nom']) && !empty($_POST['nom']) 	&&
		isset($_POST['prenom']) && !empty($_POST['prenom']) &&
		isset($_POST['dateNaissance']) && !empty($_POST['dateNaissance'])  &&
		isset($_POST['mail']) && !empty($_POST['mail']) &&
		isset($_POST['mdp']) && !empty($_POST['mdp'] )
		)	{
				$nom=htmlspecialchars(trim($_POST['nom']));
				$prenom=htmlspecialchars(trim($_POST['prenom']));
				$dateNaissance=htmlspecialchars(trim($_POST['dateNaissance']));
				//$dateB = date_format($dateNaissance, 'Y-m-d');
				$mail=htmlspecialchars(trim($_POST['mail']));
				$mdp=htmlspecialchars(trim($_POST['mdp']));

			//$bd=new PDO('mysql:host=localhost;dbname=bluebird;charset=utf8','root','');
			$bd = new PDO('mysql:host=localhost;dbname=bluebird;charset=utf8','root','', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ));
			
			if($bd) {

				$requete = $bd->prepare("INSERT INTO user (nom, prenom,dateNaissance,mail,mdp) VALUES (:nom, :prenom, :dateNaissance,:mail, :mdp)");

				// On lie la variable $email définie au-dessus au paramètre :email de la requête préparée
				$requete->bindValue(':nom', $nom);
				$requete->bindValue(':prenom', $prenom);
				$requete->bindValue(':dateNaissance', $dateNaissance);
				$requete->bindValue(':mail', $mail);
				$requete->bindValue(':mdp', $mdp);


				//On exécute la requête
				$requete->execute();

				echo "test ok <br>";
				echo $nom."<br>";
				echo $prenom."<br>";
				echo $dateNaissance."<br>";
				//print_r(date_parse($dateNaissance));
				echo $mail."<br>";
				echo $mdp."<br>";
				$bd=null;	
				//echo"<a href=submit.html>back</a>";
				//$_SESSION['Compte']=1;
				//header('Location:timeline.php?login='.$nom.$prenom);


				}//end if
		}//end if isset
	else {
		echo "y a rien";
		echo"<a href=submit.html>back</a>";
		}
	header('Location:timeline.php?login='.$nom.$prenom);

}//IF +18
else
{	
	echo "vous devez aovir + de 18 ans <br>";
	header('Location:../login.php');
	
}//le visiteur a moins 18 ans

// On doit recevoir $_GET['insee']
if(isset($_GET['mail']) && !empty($_GET['mail'])){

	$bd=new PDO('mysql:host=localhost;dbname=bluebird;charset=utf8','root','');        
        if($bd){
            $req = $bd->query("SELECT * FROM utilisateur 
            	WHERE mail=".$bd->quote($_GET['mail']));
            $res=$req->fetch();
            
            if($res){
                echo('Ce mail est déjà utilisé !');
            }

            else{
                echo('Ce mail n\'a jamais été utilisé');
            }
        }
        
        $bd=null;
}


?>