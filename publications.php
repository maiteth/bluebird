<?php 
    if ($bdd) {
        $publishContent = "SELECT content FROM publication ORDER BY id DESC LIMIT 6";
        $content = $bdd->query($publishContent);
        while($row = $content->fetch()){
            echo "
            <div class=\"publicationespace blocpublication\">
				<div class=publicationcontainer>
					<table>
						<tr>
							<!--photo de profil-->
							<td class=colonne1>
								<img alt=pp-isidore-monnet class=pptl src=\"images/pp-isidore-monnet.png\">
							</td>
							<!--texte de publication-->
							<td>
								<p class=nompublication>Nom</p>
								<p class=heurepublication>Heure</p>
								<p class=textepublication>" 
                                    . $row['content'] . 
                                "</p>
							</td>
						</tr>
					</table>
					<div class=blocinteractions>
						<p class=nbpiou>2 Piou</p>
						<p class=nbcomment>3 Commentaires</p>
						<p class=nbvues>19 vues</p>
					</div>
				</div>
				<div class=publier>
					<div class=contentpublier>
						<!--médias intégrables-->
						<input class=\"texteoutilspublication boutonpiou\" type=button value=Piou>
						<input class=texteoutilspublication type=button value=Commenter>
						<input class=\"texteoutilspublication boutonpartager\" type=button value=Partager>
					</div>
				</div>
			</div>
        ";
        }

        
    }
?>




