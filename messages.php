<?php
session_start();
if(isset($_GET['id_membre']))
{
	$_SESSION['id_membre']=(int)$_GET['id_membre'];
}
else
{
	$_SESSION['id_membre'] = 0;
}

?>
<!DOCTYPE html>
<!-- <html> -->
<head>

	<meta charset=utf-8>

	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel=icon href="../logo_bluebird.png">
	<title>BlueBird</title>

	<script src="app.js" type=text/javascript>
	</script>

	</head>

	<body>

	<header id=bandeau>
		<section>
			<div id=logo>
				<a href=timeline.html>
					<img alt=logo_home src=images/logo_home.png>
				</a>
			</div>
			<div id=logo_home>
				<a href=timeline.html>
					<img alt=logo_bluebird_texte src=images/logo_bluebird_texte.png>
				</a>
			</div>
		</section>
		<section><!-- Barre recherche non responsive ! -->
			<div>
				<input type=text id=search placeholder=Rechercher...>
			</div>
		</section>
		<section>
			<div id=notifsbox>
				<div id=notifs>
					<a href=#>
						<img alt=notifs src=images/notifs.png>
					</a>
					<div id=nbnotifs>2<!--Nombre récupéré dans la BDD-->
					</div>
				</div>
			</div>
			<div id=messagesbox>
				<div id=messages>
					<a href=messages.html>
						<img alt=messages src=images/messages.png>
					</a>
					<div id=nbmessages>5<!--Nombre récupéré dans la BDD-->
					</div>
				</div>
			</div>
			<div id=pp>
				<a href=profil.html><!--nom de page généré par le site-->
					<img alt=pp-isidore-monnet src=images/pp-isidore-monnet.png>
				</a>
			</div>
			<div id=nom-profil>
				<a href=profil.html>Isidore<!--nom de page généré par le site-->
				</a>
			</div>
			<div id=param>
				<a href=#>
					<img alt=parametres src=images/parametres.png>
				</a>
			</div>
			<div id=fleche-home onclick='afficher()'>
				<a href=# >
					<img alt=fleche-bas src=images/fleche-bas.png>
				</a>
			</div>
			<div id=menuDeroulant>
				<ul>
					<li>
						<a href=#>Paramètres
						</a>
					<li>
						<a>Déconnexion
						</a>
					<li>
						<a href=contact_bluebird.html>Aide
						</a>
					<li>
						<a href=#>Passer à la version Pro
						</a>
				</ul>
			</div>
		</section>
	</header>

	<div id=wrapper>
		<aside id=listeMessageGauche>
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
							<a href=#>Trier par</a>
						</div>
						<div class="messageTools">
							<a href=#>
								<img alt=plus src="images/plus.png" id="imageajouter">
							</a>
							<a href=# class="messageTools">Nouveau message</a>
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
		
		<section id=pageMessages>
				<div class="chat">
					<div class="message"></div>
						<textarea class="entree" placeholder="Veuillz saisir votre texte ici(Shift+Entrée pour un saut de ligne)"></textarea>
				</div>
				<script src="js/jquery-3.2.0.min.js"></script>
				<script src="js/chat.js"></script>
		</section>
		
		<aside id=Publicite>
			<div id=encartPub>
				<img alt=image-pub src="images/image-pub.png" id="imagePub">
				<p id="textePub">
					<a href="">- Je ne veux pas voir cette publicité -
					</a>
				</p>
			</div>
		</aside>
		
	</div>
		
	</body>
</html>