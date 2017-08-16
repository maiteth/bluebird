<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "bluebird";

    try {
	$bdd = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    }
    catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
    }

// header('Location:index.php');
?>
<!--<<
        ? php
        if (isset($_GET['mail']) && !empty($_GET['mail'])) {

            $bd = new PDO('mysql:host=localhost;dbname=testbluebird;charset=utf8', 'root', '');

            if ($bd) {
                $req = $bd - > query("SELECT * FROM users WHERE Mail=".$bd - > quote($_GET['mail']));
                $res = $req - > fetch();

                if ($res) {
                    echo('Ce mail est déjà utilisé !');
                } else {
                    echo('Ce mail n\'a jamais été utilisé');
                }
            }

            $bd = null;
        }-->
