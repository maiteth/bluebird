<!DOCTYPE hmtl>
<html>

<head>
	<meta charset="utf-8">
	<title>BlueBird</title>
	<link rel=stylesheet href="style.css">
	<script src="js/jquery-3.1.1.min.js"></script>
		<script src="js/app.js"></script>
	<script src="js/jqFancyTransitions.1.8.min.js"></script>
	<link rel=icon href="images/logo_bluebird.png">
	<?php include('bdd.php') ?>
</head>

<body>
	<header id=bandeau>
		<section>
			<div id=logo>
				<a href=login.php>
					<img alt=logo_home src=images/logo_home.png>
				</a>
			</div>
			<div id=logo_home>
				<a href=timeline.php>
					<img alt=logo_bluebird_texte src=images/logo_bluebird_texte.png>
				</a>
			</div>
		</section>
		<section>
			<!-- Barre recherche non responsive ! -->
			<div>
				<input type=text id=search placeholder=Rechercher...>
			</div>
		</section>
		<section>
			<div id=notifsbox>
				<div id=notifs>
					<a href="#">
						<img alt=notifs src=images/notifs.png>
					</a>
					<div id=nbnotifs>2
						<!--Nombre récupéré dans la BDD-->
					</div>
				</div>
			</div>
			<div id=messagesbox>
				<div id=messages>
					<a href=messages.html>
						<img alt=messages src=images/messages.png>
					</a>
					<div id=nbmessages>5
						<!--Nombre récupéré dans la BDD-->
					</div>
				</div>
			</div>
			<div id=pp>
				<a href=profil.html>
					<!--nom de page généré par le site-->
					<img alt=pp-isidore-monnet src=images/pp-isidore-monnet.png>
				</a>
			</div>
			<div id=nom-profil>
				<a href=profil.html>Isidore<!--nom de page généré par le site--></a>
			</div>
			<div id=param>
				<a href="#">
					<img alt=parametres src=images/parametres.png>
				</a>
			</div>
			<div id=fleche-home>
				<a href="#">
					<img alt=fleche-bas id=arrow_down src=images/fleche-bas.png>
				</a>
			</div>
			<div id=menuDeroulant>
				<ul>
					<li>
						<a href="#">Paramètres</a>
					<li>
						<a href="login.php?logout">Déconnexion</a>
					<li>
						<a href=contact_BlueBird.html>Aide</a>
					<li>
						<a href="#">Passer à la version Pro</a>
				</ul>
			</div>
		</section>
	</header>
	<div id=wrapper>
		<aside id="sidebargauche">
			<!-- Liste d'amis -->
			<div class=groupeBox>
				<div>
					<div class="rubrique aligne">
						<div>
							<img alt=amis src="images/amis.png" class="iconeRubrique"> Amis
						</div>
						<div>Masquer tout
							<img alt=fleche-gauche src="images/fleche-gauche.png" class="flechebleu">
						</div>
					</div>
				</div>
				<div>
					<div class="listeItems">
						<img alt=pp-john-bobby src="images/pp-john-bobby.png" class="imageRubrique">
						<p>John Bobby</p>
						<img alt=point src="images/point.png" class="pointbleu">
					</div>
					<div class="listeItems">
						<img alt=pp-issa-monnet src="images/pp-issa-monnet.png" class="imageRubrique">
						<p>Issa Monnet</p>
						<img alt=point src="images/point.png" class="pointbleu">
					</div>
					<div class="listeItems">
						<img alt=pp-tata-suzanne src="images/pp-tata-suzanne.png" class="imageRubrique">
						<p>Tata Suzanne</p>
					</div>
					<div class="listeItems">
						<img alt=pp-gaston-mouza src="images/pp-gaston-mouza.png" class="imageRubrique">
						<p>Gaston Mouza</p>
					</div>
				</div>
			</div>
			<!-- Liste de groupes -->
			<div class=groupeBox>
				<div>
					<div class="rubrique aligne">
						<div>
							<img alt=groupe src="images/groupe.png" class="iconeRubrique"> Groupes
						</div>
						<div>Masquer tout
							<img alt=fleche-gauche src="images/fleche-gauche.png" class="flechebleu">
						</div>
					</div>
				</div>
				<div>
					<div class="listeItems">
						<img alt=groupes-eco src="images/groupes-eco.jpg" class="imageRubrique">
						<p>Les clés de l'économie</p>
					</div>
					<div class="listeItems">
						<img alt=groupes-jeux src="images/groupes-jeux.jpg" class="imageRubrique">
						<p>Jeux de société</p>
					</div>
					<div class="listeItems">
						<img alt=groupes-photo src="images/groupes-photo.jpg" class="imageRubrique">
						<p>Photographie amateur</p>
					</div>
				</div>
			</div>
			<!-- Liste d'événements -->
			<div class=groupeBox>
				<div>
					<div class="rubrique aligne">
						<div>
							<img alt=evenement src="images/evenement.png" class="iconeRubrique"> Evénements
						</div>
						<div>Masquer tout
							<img alt=fleche-gauche src="images/fleche-gauche.png" class="flechebleu">
						</div>
					</div>
				</div>
				<div>
					<div class="listeItems">
						<img alt=events-anniv src="images/events-anniv.jpg" class="imageRubrique">
						<p>Anniversaire d'Issa</p>
					</div>
					<div class="listeItems">
						<img alt=events-refuge src="images/events-refuge.jpg" class="imageRubrique">
						<p>Refuge - Journée porte ouverte</p>
					</div>
				</div>
			</div>
			<!-- Liste d'abonnements -->
			<div class=groupeBox>
				<div>
					<div class="rubrique aligne">
						<div>
							<img alt=abonnements src="images/abonnements.png" class="iconeRubrique"> Abonnements
						</div>
						<div>Masquer tout
							<img alt=fleche-gauche src="images/fleche-gauche.png" class="flechebleu">
						</div>
					</div>
				</div>
				<div>
					<div class="listeItems">
						<img alt=abos-cesi src="images/abos-cesi.jpg" class="imageRubrique">
						<p>CESI de Reims</p>
					</div>
					<div class="listeItems">
						<img alt=abos-obispo src="images/abos-obispo.jpg" class="imageRubrique">
						<p>Pascal Obispo</p>
					</div>
				</div>
			</div>
			<!-- Liste de playlists -->
			<div class=groupeBox>
				<div>
					<div class="rubrique aligne">
						<div>
							<img alt=playlists src="images/playlists.png" class="iconeRubrique"> Playlists
						</div>
						<div>Voir tout
							<img alt=fleche-bas src="images/fleche-bas.png" class="flechebleu">
						</div>
					</div>
				</div>
			</div>
		</aside>

		<!-- timeline -->
		<div id=timeline>
			<!-- bloc pour statut et boutons media -->
			<div class=blocpublication>
				<!-- statut uniquement -->
				<form id=blocexpression method=post action=publier.php>
					<img alt=pp-isidore-monnet class=pptl src="images/pp-isidore-monnet.png">
					<p>
						<textarea rows=3 id=exprimezvous name=exprimezvous placeholder="Exprimez-vous"></textarea>
					</p>
				</div>
				<!-- boutons medias -->
				<div class=publier>
					<div class=contentpublier>
						<!--médias intégrables-->
						<img alt=photo id=outilspublication1 src="images/photo.png">
						<img alt=video class=outilspublication2 src="images/video.png">
						<!--bouton bluebirder-->
						<input class=bluebirder type=submit value=BlueBirder>
					</div>
				</form>
			</div>
			
		<div id="filactu">	
			<?php require('publications.php') ?>
			</div>
		</div>

		<aside id=listeMessageDroite>
			<div id=encartMessages>
				<div>
					<div>
						<div id="lignemessages" class=aligne>
							<div id="sidebardroitmessages">Messages
							</div>
							<div id="flechebleu">
								<img alt=fleche-haut src="images/fleche-haut.png">
							</div>
						</div>
					</div>
					<div id=outilsMessages class=aligne2>
						<div class="messageTools">
							<a href="#">Trier par</a>
						</div>
						<div class="messageTools">
							<a href="#">
								<img alt=plus src="images/plus.png" id="imageajouter">
							</a>
							<a href="messages.php" class="messageTools">Nouveau message</a>
						</div>
					</div>
				</div>
				<div class=messageListe>
					<div class=aligne>
						<div class=messagePic>
							<img alt=pp-john-bobby src="images/pp-john-bobby.png">
						</div>
						<div class=messageText>
							<div class=aligne>
								<div class=messageSender>John Bobby
								</div>
								<div class=messageTime>il y a 15 minutes
								</div>
							</div>
							<div class=messageContent>Salut c'est Bobby, je voulais juste te rappeler de prendre des doubitchous...
							</div>
						</div>
					</div>
				</div>
				<div class=messageListe>
					<div class=aligne>
						<div class=messagePic>
							<img alt=pp-tata-suzanne src="images/pp-tata-suzanne.png">
						</div>
						<div class=messageText>
							<div class=aligne>
								<div class=messageSender>Tata Suzanne
								</div>
								<div class=messageTime> à 18:02
								</div>
							</div>
							<div class=messageContent>Toujours bon pour l'apéro de jeudi soir, moi je suis hyper motivée !
							</div>
						</div>
					</div>
				</div>
				<div class=messageListe>
					<div class=aligne>
						<div class=messagePic>
							<img alt=pp-gaston-mouza src="images/pp-gaston-mouza.png">
						</div>
						<div class=messageText>
							<div class=aligne>
								<div class=messageSender>Gaston Mouza
								</div>
								<div class=messageTime> à 08:19
								</div>
							</div>
							<div class=messageContent>Yo! Je suis en bas, tu fais quoi? Je vais me barrer dans 2 minutes...
							</div>
						</div>
					</div>
				</div>
				<div class=messageListe>
					<div class=aligne>
						<div class=messagePic>
							<img alt=pp-issa-monnet src="images/pp-issa-monnet.png">
						</div>
						<div class=messageText>
							<div class=aligne>
								<div class=messageSender>Issa Monnet
								</div>
								<div class=messageTime>sam 10:53
								</div>
							</div>
							<div class=messageContent>Papa, je quitterai 1h plus tôt la maîtresse est tombé malade.
							</div>
						</div>
					</div>
				</div>
				<div class=messageListe>
					<div class=aligne>
						<div class=message2Pics>
							<img alt=pp-issa-monnet src="images/pp-issa-monnet.png" class=pic01>
							<img alt=pp-tata-suzanne src="images/pp-tata-suzanne.png" class=pic02>
						</div>
						<div class=messageText>
							<div class=aligne>
								<div class=messageSender>Issa, Tata
								</div>
								<div class=messageTime>ven 15:08
								</div>
							</div>
							<div class=messageContent>Il faut qu'on s'organise pour l'anniversaire de Maman, ça va arriver...
							</div>
						</div>
					</div>
				</div>

			</div>
		</aside>
	</div>
</body>

<!--<script src="script.js"></script>-->

</html>