//AJAX connexion à la bdd
function getxhr(){// Première étape: créer une instance	
	if(window.XMLHttpRequest) { //  Objet standard
 		xhr=new XMLHttpRequest(); //  Firefox, Safari, ...
		}
	else if(window.ActiveXObject) {//  Internet Explorer
 		try {
			xhr=new ActiveXObject("Msxml2.XMLHTTP");
			}
		catch (e) {
			xhr=new ActiveXObject(" Microsoft.XMLHTTP");
			}
		}
	return xhr;
}

//vérification si mail est present bdd
function AjaxMail() { 
	mail = document.getElementById('mail').value;
	a=getxhr();
	a.open("GET","controller/verifMail.php?mail="+mail,false);// le false veut dire que c'est synchrone
	a.send(null);
	
	if(a.readyState==4 && a.status==200){
		document.getElementById('ajaxMail').style.display ="block";
		document.getElementById("ajaxMail").innerText = a.responseText;		
		}//end if
}


var valide=false; //empeche l'envoi du formulaire si cond non rempli

function testnom() {
	if (document.getElementById('nom').value=='') {
		document.getElementById('errnom').style.display ="block";
		document.getElementById('nom').style.border='1px solid red';
		valide=false; //empeche l'envoi du formulaire si cond non rempli
	}//fin if
	else {
		document.getElementById('errnom').style.display ="none";
		document.getElementById('nom').style.border='1px solid #05ff05';
	}//fin else
}//fin funct

function testprenom() {
	if (document.getElementById('prenom').value=='') {
		document.getElementById('errprenom').style.display ="block";
		document.getElementById('prenom').style.border='1px solid red';
		valide=false; //empeche l'envoi du formulaire si cond non rempli
	}//fin if
	else {
		document.getElementById('errprenom').style.display ="none";
		document.getElementById('prenom').style.border='1px solid #05ff05';
	}//fin else
}//fin funct

function verifdt() {
	verdat=document.getElementById('dateNaissance').value;
	console.log(verdat);
	datej= new Date()
	anneej=datej.getFullYear()+"*";
	anneej=anneej.substring(0,2)

	if (verdat.length ==6) 
	verdat=verdat.substring(0,2)+"/"+verdat.substring(4,2)+"/"+anneej+verdat.substring(6,4);

	if (verdat.length ==8) 
	verdat=verdat.substring(0,2)+"/"+verdat.substring(4,2)+"/"+verdat.substring(8,4);


	// if(!isValidDate(verdat)){
	// //document.getElementById('errdate').style.display ="block";
	// //document.getElementById('dateNaissance').style.border='1px solid red';
	// //document.getElementById('errdate').innerHTML ="la date n'est pas valide ou n'est pas au bon format.\njjmmaa ou jjmmaaaa ou jj/mm/aaaa";
	// }
	// 	else {
	// 	//document.myform.dateop.value = verdat;
	// 	document.getElementById('dateNaissance').value = verdat;
	// 	document.getElementById('errdate').style.display ="none";
	// 	document.getElementById('dateNaissance').style.border='1px solid #05ff05';
	// 		}
	 }

//vérifie si date ok
function isValidDate(d) {
	var dateRegEx = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
	return d.match(dateRegEx);
	} 

//vérifie si mail est valide
function okEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function testmail() {
	e=document.getElementById('mail').value;
	if (e=='') {
		document.getElementById('errmail').innerHTML ="Mail Obligatoire";
		//écrit dans la div le mess d'erreur
		document.getElementById('errmail').style.display ="block";
		document.getElementById('mail').style.border='1px solid red';
		valide=false; //empeche l'envoi du formulaire si cond non rempli
	}//fin if
	else if (!okEmail(e)) { //verification format mail
		document.getElementById('errmail').innerHTML ="le mail n'est pas valide";
		document.getElementById('errmail').style.display ="block";
		document.getElementById('mail').style.border='1px solid red';
	}//fin else if
	
	else {
		document.getElementById('errmail').style.display ="none";
		document.getElementById('mail').style.border='1px solid #05ff05';
	}//fin else

	if(AjaxMail()) {	
		valide=false;
		}

}//fin funct

function testmdp() {
	m = document.getElementById('mdp').value;
	if (m=='') {
		document.getElementById('errmdp').style.display ="block";
		document.getElementById('mdp').style.border='1px solid red';
		valide=false; //empeche l'envoi du formulaire si cond non rempli
	}//fin if
	else {
		document.getElementById('errmdp').style.display ="none";
		document.getElementById('mdp').style.border='1px solid #05ff05';
	}//fin else

	if (m.length<6) {
		document.getElementById('forcemdp').innerHTML='Faible';
		document.getElementById('forcemdp').style.backgroundColor="red";
		document.getElementById('forcemdp').style.color="white";
	}//fin if
	else if (m.length<15) {
		document.getElementById('forcemdp').innerHTML='moyen';
		document.getElementById('forcemdp').style.backgroundColor="orange";
		document.getElementById('forcemdp').style.color="white";
	}//fin else if 
	else {
		document.getElementById('forcemdp').style.display ="none";
		//document.getElementById('forcemdp').innerHTML='fort';
		//document.getElementById('forcemdp').style.backgroundColor="green";
		//document.getElementById('forcemdp').style.color="white";
	}//fin else
}//fin funct

function testmdp2() {
	m=document.getElementById('mdp').value;
	m2=document.getElementById('mdp2').value;
	if(m2=='')
	{
		document.getElementById('errmdp2').style.display='block';
		document.getElementById('errmdp2').innerHTML='Vous devez confirmer votre mot de passe';
		valide=false;
	}
	else if(m!=m2)
	{
		document.getElementById('errmdp2').style.display='block';
		document.getElementById('errmdp2').innerHTML='Vous avez mal confirmé votre mot de passe';
		valide=false;
	}
	else
	{
		document.getElementById('errmdp2').style.display='none';
	}
}

function test() {
	valide=true;
	testnom();
	testprenom();
	testmail();
	verifdt();
	testmdp();
	return valide;
}//fin function