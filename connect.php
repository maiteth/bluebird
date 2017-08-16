<?php
try
{
	$connect = new PDO('mysql:host=localhost;dbname=bluebird; charset=utf8', 'root', '');
}

catch(Exception $e)
{
	die('Impossible de se connecter à la BDD'.$e->getMessage());
}
?>