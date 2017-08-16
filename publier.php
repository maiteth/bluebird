<?php
    if (isset($_POST['exprimezvous']) && !empty ($_POST['exprimezvous'])) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "bluebird";
        
        $bdd = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        
        if ($bdd) {
            $content = strip_tags($bdd -> quote($_POST['exprimezvous']));
            
            $bdd -> exec("INSERT INTO publication (content) VALUES ($content)");
            $bdd = null;
        }
    }

    header('Location:timeline.php');
?>



<!--function publish() {
    var publishContent = document.getElementById('exprimezvous').value;
    console.log('publishContent', publishContent);

    
}-->
