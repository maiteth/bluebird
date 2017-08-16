<?php
require('connect.php');
$query = $connect->query("
SELECT
message.id_membre,
message.message_membre,
user.id_user,
user.pseudo_user
FROM message
INNER JOIN user ON user.id_user = message.id_membre
ORDER BY temps ASC
");

$messages = array();
while($rows = $query->fetch())
{
	$messages[]= $rows;
}

foreach($messages as $message)
{
?>
	<h3 class="pseudo"><?php echo $message['pseudo_user'];?></h3>
	<p><?php echo nl2br($message['message_membre']);?></p>
	<br>
	
	<?php
}

?>