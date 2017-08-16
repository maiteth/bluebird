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












// $(document).ready(function(){

//     $("#submit").click(function(){

//         $.post(
//             'connexion.php', // Un script PHP que l'on va créer juste après
//             {
//                 login : $("#username").val(),  // Nous récupérons la valeur de nos inputs que l'on fait passer à connexion.php
//                 password : $("#password").val()
//             },

//             function(data){ // Cette fonction ne fait rien encore, nous la mettrons à jour plus tard
//             },

//             'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
//          );

//     });

// });
