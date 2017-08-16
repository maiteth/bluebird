
//----
//-------questionnaire--------------------
//------------------menu principal-----------------------------
	$(document).ready(function(){
		$("#menu1").click(function () { //parent$
		$(".ss_m_t1").slideToggle("slow"); //enfant
		$("#menu1").addClass("choix"); //background
		$('li[id^="menu"]:not(#menu1)').removeClass("choix"); //background
		$('li[id^="categorieA"]').removeClass("choix"); //background inscription
		$('li[id^="categorieB"]').removeClass("choix"); //background gestion de compte
		$('li[id^="categorieC"]').removeClass("choix"); //background Connexion & dépannage
		$('li[id^="categorieD"]').removeClass("choix"); //background Esp Conf & Sécur
		$('section[class^="ss_m_t"]:not(.ss_m_t1)').css({"display":"none"});
		$('section[class^="ss_cat_m_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_D"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_E"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="cat_m_B"]').css({"display":"none"});//fermeture sous_menu2
		$('section[class^="cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="ss_cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="cat_m_D"]').css({"display":"none"});//fermeture sous_menu4
		return false; });  });//end function
	$(document).ready(function(){
		$("#menu2").click(function () { //parent
		$(".ss_m_t2").slideToggle("slow"); //enfant
		$("#menu2").addClass("choix"); //background
		$('li[id^="menu"]:not(#menu2)').removeClass("choix"); //background
		$('li[id^="categorieA"]').removeClass("choix"); //background inscription
		$('li[id^="categorieB"]').removeClass("choix"); //background gestion de compte
		$('li[id^="categorieC"]').removeClass("choix"); //background Connexion & dépannage
		$('li[id^="categorieD"]').removeClass("choix"); //background Esp Conf & Sécur
		$('section[class^="ss_m_t"]:not(.ss_m_t2)').css({"display":"none"});
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_D"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_E"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="ss_cat_m_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="cat_m_B"]').css({"display":"none"});//fermeture sous_menu2
		$('section[class^="cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="ss_cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="cat_m_D"]').css({"display":"none"});//fermeture sous_menu4
		return false; });  });//end function
	$(document).ready(function(){
		$("#menu3").click(function () { //parent
		$(".ss_m_t3").slideToggle("slow"); //enfant
		$("#menu3").addClass("choix"); //background
		$('li[id^="menu"]:not(#menu3)').removeClass("choix"); //background
		$('li[id^="categorieA"]').removeClass("choix"); //background inscription
		$('li[id^="categorieC"]').removeClass("choix"); //background Connexion & dépannage
		$('li[id^="categorieB"]').removeClass("choix"); //background gestion de compte
		$('li[id^="categorieD"]').removeClass("choix"); //background Esp Conf & Sécur
		$('section[class^="ss_m_t"]:not(.ss_m_t3)').css({"display":"none"});
		$('section[class^="ss_cat_m_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_D"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_E"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="cat_m_B"]').css({"display":"none"});//fermeture sous_menu2
		$('section[class^="cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="ss_cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="cat_m_D"]').css({"display":"none"});//fermeture sous_menu4
		return false; });  });//end function
	$(document).ready(function(){
		$("#menu4").click(function () { //parent
		$(".ss_m_t4").slideToggle("slow"); //enfant
		$("#menu4").addClass("choix"); //background
		$('li[id^="menu"]:not(#menu4)').removeClass("choix"); //background
		$('li[id^="categorieA"]').removeClass("choix"); //background inscription
		$('li[id^="categorieB"]').removeClass("choix"); //background gestion de compte
		$('li[id^="categorieC"]').removeClass("choix"); //background Connexion & dépannage
		$('li[id^="categorieD"]').removeClass("choix"); //background Esp Conf & Sécur
		$('section[class^="ss_m_t"]:not(.ss_m_t4)').css({"display":"none"});
		$('section[class^="ss_cat_m_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_D"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_E"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="cat_m_B"]').css({"display":"none"});//fermeture sous_menu2
		$('section[class^="cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="ss_cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="cat_m_D"]').css({"display":"none"});//fermeture sous_menu4
		return false; });  });//end function
// $('li[id^="categorieA"]').removeClass("choix"); //background inscription
// $('li[id^="categorieB"]').removeClass("choix"); //background gestion de compte
// $('li[id^="categorieC"]').removeClass("choix"); //background Connexion & dépannage
// $('li[id^="categorieD"]').removeClass("choix"); //background Esp Conf & Sécur
//menu 1 Utilisation blue bird-------------------------------------
	//Inscription & premiers pas
		$(document).ready(function(){
			$("#categorieA1").click(function () { //parent$
			$(".ss_cat_m_A_A").slideToggle("slow"); //enfantcat_m_B1cat_m_B2
			$("#categorieA1").addClass("choix"); //background
			$('li[id^="categorieA"]:not(#categorieA1)').removeClass("choix"); //background
			$('li[id^="cat_part"]').removeClass("choix"); //background photo
			$('li[id^="cat_pr"]').removeClass("choix"); //background profil
			$('section[class^="ss_cat_m_A"]:not(.ss_cat_m_A_A)').css({"display":"none"});
			$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//close partage photo
			$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//CLOSE VOTRE PROFIL
			return false; });  });//end function
			//catégorie sous section Inscrp & 1erpas
		$(document).ready(function(){
			$("#sous_cat_Ins1").click(function () { //parent$ 
			$("#sous_cat_Ins1").addClass("choix"); //background
			$('li[id^="sous_cat_Ins"]:not(#sous_cat_Ins1)').removeClass("choix"); //background
			$(".sss_cat_m_A_A1").slideToggle("slow"); //enfant2
			$('section[class^="sss_cat_m_A_A"]:not(.sss_cat_m_A_A1)').css({"display":"none"});
			return false; });  });//end function
		$(document).ready(function(){
			$("#sous_cat_Ins2").click(function () { //parent$
			$(".sss_cat_m_A_A2").slideToggle("slow"); //enfant2 
			$("#sous_cat_Ins2").addClass("choix"); //background
			$('li[id^="sous_cat_Ins"]:not(#sous_cat_Ins2)').removeClass("choix"); //background
			$('section[class^="sss_cat_m_A_A"]:not(.sss_cat_m_A_A2)').css({"display":"none"});
			return false; });  });//end function
		$(document).ready(function(){
			$("#sous_cat_Ins3").click(function () { //parent$
			$(".sss_cat_m_A_A3").slideToggle("slow"); //enfant
			$("#sous_cat_Ins3").addClass("choix"); //background
			$('li[id^="sous_cat_Ins"]:not(#sous_cat_Ins3)').removeClass("choix"); //background	
			$('section[class^="sss_cat_m_A_A"]:not(.sss_cat_m_A_A3)').css({"display":"none"});
			return false; });  });//end function
		$(document).ready(function(){
			$("#sous_cat_Ins4").click(function () { //parent$
			$(".sss_cat_m_A_A4").slideToggle("slow"); //enfantcat_m_B1cat_m_B2
			$("#sous_cat_Ins4").addClass("choix"); //background
			$('li[id^="sous_cat_Ins"]:not(#sous_cat_Ins4)').removeClass("choix"); //background
			$('section[class^="sss_cat_m_A_A"]:not(.sss_cat_m_A_A4)').css({"display":"none"});
			return false; });  });//end function
	//-----Menu sous catégorie utilisation Bb-Inscription & 1pas
		$(document).ready(function(){
			$("#show1").click(function () { //parent
			$("#hidden1").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; });  });// end ready function
		$(document).ready(function(){
			$("#show2").click(function () { //parent
			$("#hidden2").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show3").click(function () { //parent
			$("#hidden3").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show4").click(function () { //parent
			$("#hidden4").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show5").click(function () { //parent
			$("#hidden5").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show6").click(function () { //parent
			$("#hidden6").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show7").click(function () { //parent
			$("#hidden7").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show8").click(function () { //parent
			$("#hidden8").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show9").click(function () { //parent
			$("#hidden9").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show10").click(function () { //parent
			$("#hidden10").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show11").click(function () { //parent
			$("#hidden11").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; });});// end ready function
		$(document).ready(function(){
			$("#show12").click(function () { //parent
			$("#hidden12").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show13").click(function () { //parent
			$("#hidden13").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show14").click(function () { //parent
			$("#hidden14").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show15").click(function () { //parent
			$("#hidden15").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show16").click(function () { //parent
			$("#hidden16").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show17").click(function () { //parent
			$("#hidden17").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show18").click(function () { //parent
			$("#hidden18").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show19").click(function () { //parent
			$("#hidden19").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show20").click(function () { //parent
			$("#hidden20").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
		$(document).ready(function(){
			$("#show21").click(function () { //parent
			$("#hidden21").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });// end ready function
	//-----Menu sous catégorie utilisation Bb-I- Navigation appli
		$(document).ready(function(){
			$("#nav1").click(function () { //parent
			$("#navi1").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#nav2").click(function () { //parent
			$("#navi2").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#nav3").click(function () { //parent
			$("#navi3").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#nav4").click(function () { //parent
			$("#navi4").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#nav5").click(function () { //parent
			$("#navi5").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#nav6").click(function () { //parent
			$("#navi6").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#nav7").click(function () { //parent
			$("#navi7").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
	//-----Menu sous catégorie utilisation Bb-I- synchro des contacts----------
		$(document).ready(function(){
			$("#syn1").click(function () { //parent
			$("#sync1").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#syn2").click(function () { //parent
			$("#sync2").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#syn3").click(function () { //parent
			$("#sync3").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#syn4").click(function () { //parent
			$("#sync4").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#syn5").click(function () { //parent
			$("#sync5").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
	//-----Menu sous catégorie utilisation Bb-I- gestion des abonnés----------
		$(document).ready(function(){
			$("#gest_ab1").click(function () { //parent
			$("#gest_abo1").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#gest_ab2").click(function () { //parent
			$("#gest_abo2").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#gest_ab3").click(function () { //parent
			$("#gest_abo3").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#gest_ab4").click(function () { //parent
			$("#gest_abo4").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function
		$(document).ready(function(){
			$("#gest_ab5").click(function () { //parent
			$("#gest_abo5").slideToggle("slow"); //enfant
			$(this).toggleClass("enroule"); return false; }); });//end function

	//Partage de photos & vidéos
		$(document).ready(function(){
			$("#categorieA2").click(function () { //parent$
			$(".ss_cat_m_A_B").slideToggle("slow"); //enfant2
			$("#categorieA2").addClass("choix"); //background
			$('li[id^="categorieA"]:not(#categorieA2)').removeClass("choix"); //background
			$('li[id^="sous_cat_Ins"]').removeClass("choix"); //background inscription
			$('li[id^="cat_part"]').removeClass("choix"); //background photo
			$('section[class^="ss_cat_m_A"]:not(.ss_cat_m_A_B)').css({"display":"none"});
			$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//sous menu inscrip
			$('li[id^="cat_pr"]').removeClass("choix"); //background profil
			return false; });  });//end function
		$(document).ready(function(){
			$("#cat_part1").click(function () { //parent$
			$(".sss_cat_m_A_B1").slideToggle("slow"); //enfant2
			$("#cat_part1").addClass("choix"); //background
			$('li[id^="cat_part"]:not(#cat_part1)').removeClass("choix"); //background
			$('section[class^="sss_cat_m_A_B"]:not(.sss_cat_m_A_B1)').css({"display":"none"});
			return false; });  });//end function
		$(document).ready(function(){
			$("#cat_part2").click(function () { //parent$
			$(".sss_cat_m_A_B2").slideToggle("slow"); //enfant2
			$("#cat_part2").addClass("choix"); //background
			$('li[id^="cat_part"]:not(#cat_part2)').removeClass("choix"); //background
			$('section[class^="sss_cat_m_A_B"]:not(.sss_cat_m_A_B2)').css({"display":"none"});
			return false; });  });//end function
		$(document).ready(function(){
			$("#cat_part3").click(function () { //parent$
			$(".sss_cat_m_A_B3").slideToggle("slow"); //enfant
			$("#cat_part3").addClass("choix"); //background
			$('li[id^="cat_part"]:not(#cat_part3)').removeClass("choix"); //background	
			$('section[class^="sss_cat_m_A_B"]:not(.sss_cat_m_A_B3)').css({"display":"none"});
			return false; });  });//end function
	//-----Menu sous catégorie utilisation Bb-I- partage - DL publication
		$(document).ready(function(){
			$("#publ1").click(function () { //parent
			$("#publi1").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ2").click(function () { //parent
			$("#publi2").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ3").click(function () { //parent
			$("#publi3").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ4").click(function () { //parent
			$("#publi4").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ5").click(function () { //parent
			$("#publi5").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ6").click(function () { //parent
			$("#publi6").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ7").click(function () { //parent
			$("#publi7").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ8").click(function () { //parent
			$("#publi8").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ9").click(function () { //parent
			$("#publi9").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ10").click(function () { //parent
			$("#publi10").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ11").click(function () { //parent
			$("#publi11").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ12").click(function () { //parent
			$("#publi12").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ13").click(function () { //parent
			$("#publi13").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ14").click(function () { //parent
			$("#publi14").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ15").click(function () { //parent
			$("#publi15").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ16").click(function () { //parent
			$("#publi16").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ17").click(function () { //parent
			$("#publi17").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#publ18").click(function () { //parent
			$("#publi18").slideToggle("slow"); //enfant
			return false; }); });//end function
	//-----Menu sous catégorie utilisation Bb-I- partage - Modif & sup publi
		$(document).ready(function(){
			$("#modif_pub1").click(function () { //parent
			$("#modif_pubi1").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#modif_pub2").click(function () { //parent
			$("#modif_pubi2").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#modif_pub3").click(function () { //parent
			$("#modif_pubi3").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#modif_pub4").click(function () { //parent
			$("#modif_pubi4").slideToggle("slow"); //enfant
			return false; }); });//end function
	//-----Menu sous catégorie utilisation Bb-I- partage - Identification & mentions
		$(document).ready(function(){
			$("#ident1").click(function () { //parent
			$("#identi1").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident2").click(function () { //parent
			$("#identi2").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident3").click(function () { //parent
			$("#identi3").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident4").click(function () { //parent
			$("#identi4").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident5").click(function () { //parent
			$("#identi5").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident6").click(function () { //parent
			$("#identi6").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident7").click(function () { //parent
			$("#identi7").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident8").click(function () { //parent
			$("#identi8").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident9").click(function () { //parent
			$("#identi9").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident10").click(function () { //parent
			$("#identi10").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident11").click(function () { //parent
			$("#identi11").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident12").click(function () { //parent
			$("#identi12").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident13").click(function () { //parent
			$("#identi13").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#ident14").click(function () { //parent
			$("#identi14").slideToggle("slow"); //enfant
			return false; }); });//end function

	//Votre profil
		$(document).ready(function(){
			$("#categorieA3").click(function () { //parent$
			$(".ss_cat_m_A_C").slideToggle("slow"); //enfant2
			$("#categorieA3").addClass("choix"); //background
			$('li[id^="categorieA"]:not(#categorieA3)').removeClass("choix"); //background
			$('li[id^="sous_cat_Ins"]').removeClass("choix"); //background inscription
			$('li[id^="cat_part"]').removeClass("choix"); //background photo
			$('section[class^="ss_cat_m_A"]:not(.ss_cat_m_A_C)').css({"display":"none"});
			$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//sous menu inscrip
			$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//close partage photo
			$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//CLOSE VOTRE PROFIL
			return false; });  });//end function
		$(document).ready(function(){
			$("#cat_pr1").click(function () { //parent$
			$(".sss_cat_m_A_C1").slideToggle("slow"); //enfant2
			$("#cat_pr1").addClass("choix"); //background
			$('li[id^="cat_pr"]:not(#cat_pr1)').removeClass("choix"); //background
			$('section[class^="sss_cat_m_A_C"]:not(.sss_cat_m_A_C1)').css({"display":"none"});
			return false; });  });//end function
		$(document).ready(function(){
			$("#cat_pr2").click(function () { //parent$
			$(".sss_cat_m_A_C2").slideToggle("slow"); //enfant2
			$("#cat_pr2").addClass("choix"); //background
			$('li[id^="cat_pr"]:not(#cat_pr2)').removeClass("choix"); //background
			$('section[class^="sss_cat_m_A_C"]:not(.sss_cat_m_A_C2)').css({"display":"none"});
			return false; });  });//ensss_cat_m_A_C2d function
		$(document).ready(function(){
			$("#cat_pr3").click(function () { //parent$
			$(".sss_cat_m_A_C3").slideToggle("slow"); //enfant			
			$("#cat_pr3").addClass("choix"); //background
			$('li[id^="cat_pr"]:not(#cat_pr3)').removeClass("choix"); //background
			$('section[class^="sss_cat_m_A_C"]:not(.sss_cat_m_A_C3)').css({"display":"none"});
			return false; });  });//end function
	//-----Menu sous catégorie utilisation Bb-I- Votre profil - photos de vous
		$(document).ready(function(){
			$("#photo1").click(function () { //parent
			$("#photos1").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo2").click(function () { //parent
			$("#photos2").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo3").click(function () { //parent
			$("#photos3").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo4").click(function () { //parent
			$("#photos4").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo5").click(function () { //parent
			$("#photos5").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo6").click(function () { //parent
			$("#photos6").slideToggle("slow"); //enfant
			return false; }); });//end function
	//-----Menu sous catégorie utilisation Bb-I- Votre profil - Contrôler votre visibilité
		$(document).ready(function(){
			$("#photo7").click(function () { //parent
			$("#photos7").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo8").click(function () { //parent
			$("#photos8").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo9").click(function () { //parent
			$("#photos9").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo10").click(function () { //parent
			$("#photos10").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo11").click(function () { //parent
			$("#photos11").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo12").click(function () { //parent
			$("#photos12").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo13").click(function () { //parent
			$("#photos13").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo14").click(function () { //parent
			$("#photos14").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo15").click(function () { //parent
			$("#photos15").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo16").click(function () { //parent
			$("#photos16").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#photo17").click(function () { //parent
			$("#photos17").slideToggle("slow"); //enfant
			return false; }); });//end function
	//-----Menu sous catégorie utilisation Bb-I- Votre profil - Modifier votre profil
		$(document).ready(function(){
			$("#mod_prof1").click(function () { //parent
			$("#mod_profi1").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#mod_prof2").click(function () { //parent
			$("#mod_profi2").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#mod_prof3").click(function () { //parent
			$("#mod_profi3").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#mod_prof4").click(function () { //parent
			$("#mod_profi4").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#mod_prof5").click(function () { //parent
			$("#mod_profi5").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#mod_prof6").click(function () { //parent
			$("#mod_profi6").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#mod_prof7").click(function () { //parent
			$("#mod_profi7").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#mod_prof8").click(function () { //parent
			$("#mod_profi8").slideToggle("slow"); //enfant
			return false; }); });//end function

	//Messages directs

		$(document).ready(function(){
		$("#categorieA4").click(function () { //parent$
		$(".ss_cat_m_A_D").slideToggle("slow"); //enfant2
		$("#categorieA4").addClass("choix"); //background
		$('li[id^="sous_cat_Ins"]').removeClass("choix"); //background inscription
		$('li[id^="cat_part"]').removeClass("choix"); //background photo
		$('li[id^="cat_pr"]').removeClass("choix"); //background profil
		$('li[id^="categorieA"]:not(#categorieA4)').removeClass("choix"); //background
		$('section[class^="ss_cat_m_A"]:not(.ss_cat_m_A_D)').css({"display":"none"});
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//sous menu inscrip
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//close partage photo
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//CLOSE VOTRE PROFIL
		return false; });  });//end function
	//-----Menu sous catégorie utilisation Bb-I- Messages directs
		$(document).ready(function(){
			$("#cat_mess1").click(function () { //parent
			$("#cat_messa1").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#cat_mess2").click(function () { //parent
			$("#cat_messa2").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#cat_mess3").click(function () { //parent
			$("#cat_messa3").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#cat_mess4").click(function () { //parent
			$("#cat_messa4").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#cat_mess5").click(function () { //parent
			$("#cat_messa5").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#cat_mess6").click(function () { //parent
			$("#cat_messa6").slideToggle("slow"); //enfant
			return false; }); });//end function

	//Actualités

		$(document).ready(function(){
		$("#categorieA5").click(function () { //parent$
		$(".ss_cat_m_A_E").slideToggle("slow"); //enfantcat_m_B1cat_m_B2 
		$("#categorieA5").addClass("choix"); //background
		$('li[id^="categorieA"]:not(#categorieA5)').removeClass("choix"); //background
		$('li[id^="sous_cat_Ins"]').removeClass("choix"); //background inscription
		$('li[id^="cat_part"]').removeClass("choix"); //background photo
		$('li[id^="cat_pr"]').removeClass("choix"); //background profil
		$('section[class^="ss_cat_m_A"]:not(.ss_cat_m_A_E)').css({"display":"none"});
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//sous menu inscrip
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//close partage photo
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//CLOSE VOTRE PROFIL
		return false; });  });//end function
	//-----Menu sous catégorie utilisation Bb-I- Actualités
		$(document).ready(function(){
			$("#cat_act1").click(function () { //parent
			$("#cat_actu1").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#cat_act2").click(function () { //parent
			$("#cat_actu2").slideToggle("slow"); //enfant
			return false; }); });//end function
		$(document).ready(function(){
			$("#cat_act3").click(function () { //parent
			$("#cat_actu3").slideToggle("slow"); //enfant
			return false; }); });//end function

//
//menu 2 gestion de compte-------------------------------------
	//Paramètres et informations de confidentialité
	$(document).ready(function(){
		$("#categorieB1").click(function () { //parent$
		$(".cat_m_B1").slideToggle("slow"); //enfant
		$("#categorieB1").addClass("choix"); //background
		$('li[id^="categorieB"]:not(#categorieB1)').removeClass("choix"); //background
		$('section[class^="cat_m_B"]:not(.cat_m_B1)').css({"display":"none"});
		return false; });  });//end function
	//Suppression de votre compte
	$(document).ready(function(){
		$("#categorieB2").click(function () { //parent$
		$(".cat_m_B2").slideToggle("slow"); //enfant
		$("#categorieB2").addClass("choix"); //background
		$('li[id^="categorieB"]:not(#categorieB2)').removeClass("choix"); //background
		$('section[class^="cat_m_B"]:not(.cat_m_B2)').css({"display":"none"});
		return false; });  });//end function
	//Paramètres de compte et de notification
	$(document).ready(function(){
		$("#categorieB3").click(function () { //parent$
		$(".cat_m_B3").slideToggle("slow"); //enfant
		$("#categorieB3").addClass("choix"); //background
		$('li[id^="categorieB"]:not(#categorieB3)').removeClass("choix"); //background
		$('section[class^="cat_m_B"]:not(.cat_m_B3)').css({"display":"none"});
		return false; });  });//end function

//
//menu 3 Connexion & dépannage--------------------
	//Je ne peux pas me connecter
	$(document).ready(function(){
		$("#categorieC1").click(function () { //parent$
		$(".cat_m_C1").slideToggle("slow"); //enfant
		$("#categorieC1").addClass("choix"); //background
		$('li[id^="categorieC"]:not(#categorieC1)').removeClass("choix"); //background
		$('li[id^="sous_cat_connex"]').removeClass("choix"); //background
		$('section[class^="cat_m_C"]:not(.cat_m_C1)').css({"display":"none"});
		$('section[class^="ss_cat_m_C"]').css({"display":"none"});
		return false; });  });//end function
	//quelque chose ne fonctionne pas
	$(document).ready(function(){
		$("#categorieC2").click(function () { //parent$
		$(".cat_m_C2").slideToggle("slow"); //enfant
		$("#categorieC2").addClass("choix"); //background
		$('li[id^="categorieC"]:not(#categorieC2)').removeClass("choix"); //background
		$('section[class^="cat_m_C"]:not(.cat_m_C2)').css({"display":"none"});
		return false; });  });//end function
	$(document).ready(function(){
		$("#sous_cat_connex1").click(function () { //parent$
		$(".ss_cat_m_C1").slideToggle("slow"); //enfant
		$("#sous_cat_connex1").addClass("choix"); //background
		$('li[id^="sous_cat_connex"]:not(#sous_cat_connex1)').removeClass("choix"); //background
		$('section[class^="ss_cat_m_C"]:not(.ss_cat_m_C1)').css({"display":"none"});
		return false; });  });//end function
	$(document).ready(function(){
		$("#sous_cat_connex2").click(function () { //parent$
		$(".ss_cat_m_C2").slideToggle("slow"); //enfant
		$("#sous_cat_connex2").addClass("choix"); //background
		$('li[id^="sous_cat_connex"]:not(#sous_cat_connex2)').removeClass("choix"); //background
		$('section[class^="ss_cat_m_C"]:not(.ss_cat_m_C2)').css({"display":"none"});
		return false; });  });//end function
	$(document).ready(function(){
		$("#sous_cat_connex3").click(function () { //parent$
		$(".ss_cat_m_C3").slideToggle("slow"); //enfant
		$("#sous_cat_connex3").addClass("choix"); //background
		$('li[id^="sous_cat_connex"]:not(#sous_cat_connex3)').removeClass("choix"); //background
		$('section[class^="ss_cat_m_C"]:not(.ss_cat_m_C3)').css({"display":"none"});
		return false; });  });//end function

//
//menu 4 Espace Confidentialité & Sécurité--------------------
	// Règles de la communauté
		$(document).ready(function(){
		$("#categorieD1").click(function () { //parent$
		$(".cat_m_D1").slideToggle("slow"); //enfant
		$('section[class^="cat_m_D"]:not(.cat_m_D1)').css({"display":"none"});
		$("#categorieD1").addClass("choix"); //background
		$('li[id^="categorieD"]:not(#categorieD1)').removeClass("choix"); //background Esp Conf & Sécur
		$('li[id^="sous_cat_sig"]').removeClass("choix"); //background Signaler quelque chose
		return false; });  });//end function
	// Contrôler votre visibilité
		$(document).ready(function(){
		$("#categorieD2").click(function () { //parent$
		$(".cat_m_D2").slideToggle("slow"); //enfant
		$('section[class^="cat_m_D"]:not(.cat_m_D2)').css({"display":"none"});
		$("#categorieD2").addClass("choix"); //background
		$('li[id^="categorieD"]:not(#categorieD2)').removeClass("choix"); //background
		$('li[id^="sous_cat_sig"]').removeClass("choix"); //background Signaler quelque chose
		return false; });  });//end function
	// Apprendre comment résoudre les abus
		$(document).ready(function(){
		$("#categorieD3").click(function () { //parent$
		$(".cat_m_D3").slideToggle("slow"); //enfant
		$('section[class^="cat_m_D"]:not(.cat_m_D3)').css({"display":"none"});
		$("#categorieD3").addClass("choix"); //background
		$('li[id^="categorieD"]:not(#categorieD3)').removeClass("choix"); //background
		$('li[id^="sous_cat_sig"]').removeClass("choix"); //background Signaler quelque chose
		return false; });  });//end function
	// Bloquer des personnes
		$(document).ready(function(){
		$("#categorieD4").click(function () { //parent$
		$(".cat_m_D4").slideToggle("slow"); //enfant
		$('section[class^="cat_m_D"]:not(.cat_m_D4)').css({"display":"none"});
		$("#categorieD4").addClass("choix"); //background
		$('li[id^="categorieD"]:not(#categorieD4)').removeClass("choix"); //background
		$('li[id^="sous_cat_sig"]').removeClass("choix"); //background Signaler quelque chose
		return false; });  });//end function
	// Signaler quelque chose
		$(document).ready(function(){
		$("#categorieD5").click(function () { //parent$
		$(".cat_m_D5").slideToggle("slow"); //enfant
		$('section[class^="cat_m_D"]:not(.cat_m_D5)').css({"display":"none"});
		$("#categorieD5").addClass("choix"); //background
		$('li[id^="categorieD"]:not(#categorieD5)').removeClass("choix"); //background
		return false; });  });//end function

		$(document).ready(function(){
		$("#sous_cat_sig1").click(function () { //parent$
		$("#sous_cat_sig1").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig1)').removeClass("choix"); //background
		return false; });  });//end function
		$(document).ready(function(){
		$("#sous_cat_sig2").click(function () { //parent$
		$("#sous_cat_sig2").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig2)').removeClass("choix"); //background
		return false; });  });//end function
		$(document).ready(function(){
		$("#sous_cat_sig3").click(function () { //parent$
		$("#sous_cat_sig3").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig3)').removeClass("choix"); //background
		return false; });  });//end function
		$(document).ready(function(){
		$("#sous_cat_sig4").click(function () { //parent$
		$("#sous_cat_sig4").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig4)').removeClass("choix"); //background
		return false; });  });//end function
		$(document).ready(function(){
		$("#sous_cat_sig5").click(function () { //parent$
		$("#sous_cat_sig5").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig5)').removeClass("choix"); //background
		return false; });  });//end function
		$(document).ready(function(){
		$("#sous_cat_sig6").click(function () { //parent$
		$("#sous_cat_sig6").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig6)').removeClass("choix"); //background
		return false; });  });//end function
		$(document).ready(function(){
		$("#sous_cat_sig7").click(function () { //parent$
		$("#sous_cat_sig7").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig7)').removeClass("choix"); //background
		return false; });  });//end function
		$(document).ready(function(){
		$("#sous_cat_sig8").click(function () { //parent$
		$("#sous_cat_sig8").addClass("choix"); //background
		$('li[id^="sous_cat_sig"]:not(#sous_cat_sig8)').removeClass("choix"); //background
		return false; });  });//end function
	// Politique de confidentialité
		$(document).ready(function(){
		$("#categorieD6").click(function () { //parent$
		$(".cat_m_D6").slideToggle("slow"); //enfant
		$('section[class^="cat_m_D"]:not(.cat_m_D6)').css({"display":"none"});
		$("#categorieD6").addClass("choix"); //background
		$('li[id^="categorieD"]:not(#categorieD6)').removeClass("choix"); //background
		$('li[id^="sous_cat_sig"]').removeClass("choix"); //background Signaler quelque chose
		return false; });  });//end function
	// Conditions d’utilisation
		$(document).ready(function(){
		$("#categorieD7").click(function () { //parent$
		$(".cat_m_D7").slideToggle("slow"); //enfant
		$('section[class^="cat_m_D"]:not(.cat_m_D7)').css({"display":"none"});
		$("#categorieD7").addClass("choix"); //background
		$('li[id^="categorieD"]:not(#categorieD7)').removeClass("choix"); //background
		$('li[id^="sous_cat_sig"]').removeClass("choix"); //background Signaler quelque chose
		return false; });  });//end function

// formulaire-----------------------------------------------
	var valide=false;
	function testnom() {
		var regex = /^[a-zA-Zéèïîê]+[ \-']?[[a-zA-Zéèïîê]+[ \-']?]*[a-zA-Zéèïîê]+$/;
		
		if(document.getElementById('contact_nom').value=='') {
			document.getElementById('errnom').style.display='block';
			document.getElementById('errnom').innerHTML='Le nom est obligatoire';
			document.getElementById('contact_nom').style.background='red';
			valide=false;	} //end if
		else if ( !regex.test(document.getElementById('contact_nom').value)){
			document.getElementById('errnom').style.display='block';
			document.getElementById('errnom').innerHTML='il y a une erreur de saisie';
			document.getElementById('contact_nom').style.background='red';
			valide=false;	} //end else if
		else if(document.getElementById('contact_nom').value.length<=2) {
			document.getElementById('errnom').style.display='block';
			document.getElementById('errnom').innerHTML='Votre nom ne peut pas avoir moins de deux lettres';
			document.getElementById('contact_nom').style.background='red';
			valide=false;	} //end if
		else {
			document.getElementById('errnom').style.display='none';
			document.getElementById('contact_nom').style.background='white'; } // end else
		}//end testnom
	function testprenom() {
		var regex = /^[a-zA-Zéèïîê]+[ \-']?[[a-zA-Zéèïîê]+[ \-']?]*[a-zA-Zéèïîê]+$/;
		if(document.getElementById('contact_prenom').value=='') {
			document.getElementById('errprenom').style.display='block';
			document.getElementById('errprenom').innerHTML='Le prénom est obligatoire';
			document.getElementById('contact_prenom').style.background='red';
			valide=false; }//end if
		else if ( !regex.test(document.getElementById('contact_prenom').value)){
			document.getElementById('errprenom').style.display='block';
			document.getElementById('errprenom').innerHTML='il y a une erreur de saisie';
			document.getElementById('contact_prenom').style.background='red';
			valide=false;	} //end else if
		else if(document.getElementById('contact_prenom').value.length<=2) {
			document.getElementById('errprenom').style.display='block';
			document.getElementById('errprenom').innerHTML='Votre nom ne peut pas avoir moins de deux lettres';
			document.getElementById('contact_prenom').style.background='red';
			valide=false;	} //end else if	
		else {
			document.getElementById('errprenom').style.display='none'; 
			document.getElementById('contact_prenom').style.background='white'; } // end else}//end else
		}//end testprenom
	function isEmail(myVar) {
		var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
		return regEmail.test(myVar); } //end isEmailcontact_email
	function testemail() {
		e=document.getElementById('contact_email').value;
		if(e=='') {
			document.getElementById('erremail').innerHTML="L'adresse email est obligatoire";
			document.getElementById('erremail').style.display='block';
			document.getElementById('contact_email').style.background='red';
			valide=false; } //end if
		else if(!isEmail(e)) {
			document.getElementById('erremail').innerHTML="L'adresse email est invalide";
			document.getElementById('erremail').style.display='block';
			document.getElementById('contact_email').style.background='red';
			valide=false; }//end if
		else { document.getElementById('erremail').style.display='none';
		document.getElementById('contact_email').style.background='white'; }
		}//end testemail
	function testcountry() {
		country = document.getElementById("country");
	
	    if (	country.value === 'none') {
	        document.getElementById('errcontry').innerHTML="Vous devez sélectionner votre pays de résidence";
			document.getElementById('errcontry').style.display='block';
			document.getElementById('country').style.background='red';
	        valide=false; 
	           }//end if 
	    else {
	        document.getElementById('errcontry').style.display='none';
			document.getElementById('country').style.background='white';
			
	    }//end else
	}//end testcountry

	function test() {
		valide=true;
		testnom();
		testprenom();
		testemail();
		testcountry()
		return valide;
		}//end test
	$(document).ready(function(){
		$(".hidden_contact").click(function () { //parent
		$("#contact").slideToggle("slow"); //enfant
		$("#contact").css({"display":"flex"});
		$("#contact2").css({"display":"none"});
		$('section[class^="ss_m_t"]:not(.ss_m_t1)').css({"display":"none"});//close sopus menu ALL
		$('section[class^="ss_cat_m_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_D"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_E"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="cat_m_B"]').css({"display":"none"});//fermeture sous_menu2
		$('section[class^="cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="ss_cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="cat_m_D"]').css({"display":"none"});//fermeture sous_menu4
		return false; });  }); //end function

// contact 2
	function testnom2() {
		var regex = /^[a-zA-Zéèïîê]+[ \-']?[[a-zA-Zéèïîê]+[ \-']?]*[a-zA-Zéèïîê]+$/;
		
		if(document.getElementById('contact_nom2').value=='') {
			document.getElementById('errnom2').style.display='block';
			document.getElementById('errnom2').innerHTML='Le nom est obligatoire';
			document.getElementById('contact_nom2').style.background='red';
			valide=false;	} //end if
		else if ( !regex.test(document.getElementById('contact_nom2').value)){
			document.getElementById('errnom2').style.display='block';
			document.getElementById('errnom2').innerHTML='il y a une erreur de saisie';
			document.getElementById('contact_nom2').style.background='red';
			valide=false;	} //end else if
		else if(document.getElementById('contact_nom2').value.length<=2) {
			document.getElementById('errnom2').style.display='block';
			document.getElementById('errnom2').innerHTML='Votre nom ne peut pas avoir moins de deux lettres';
			document.getElementById('contact_nom2').style.background='red';
			valide=false;	} //end if
		else {
			document.getElementById('errnom2').style.display='none';
			document.getElementById('contact_nom2').style.background='white'; } // end else
		}//end testnom
	function testprenom2() {
		var regex = /^[a-zA-Zéèïîê]+[ \-']?[[a-zA-Zéèïîê]+[ \-']?]*[a-zA-Zéèïîê]+$/;
		if(document.getElementById('contact_prenom2').value=='') {
			document.getElementById('errprenom2').style.display='block';
			document.getElementById('errprenom2').innerHTML='Le prénom est obligatoire';
			document.getElementById('contact_prenom2').style.background='red';
			valide=false; }//end if
		else if ( !regex.test(document.getElementById('contact_prenom2').value)){
			document.getElementById('errprenom2').style.display='block';
			document.getElementById('errprenom2').innerHTML='il y a une erreur de saisie';
			document.getElementById('contact_prenom2').style.background='red';
			valide=false;	} //end else if
		else if(document.getElementById('contact_prenom2').value.length<=2) {
			document.getElementById('errprenom2').style.display='block';
			document.getElementById('errprenom2').innerHTML='Votre nom ne peut pas avoir moins de deux lettres';
			document.getElementById('contact_prenom2').style.background='red';
			valide=false;	} //end else if	
		else {
			document.getElementById('errprenom2').style.display='none'; 
			document.getElementById('contact_prenom2').style.background='white'; } // end else}//end else
		}//end testprenom
	function isEmail(myVar) {
		var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
		return regEmail.test(myVar); } //end isEmailcontact_email
	function testemail2() {
		e=document.getElementById('contact_email2').value;
		if(e=='') {
			document.getElementById('erremail2').innerHTML="L'adresse email est obligatoire";
			document.getElementById('erremail2').style.display='block';
			document.getElementById('contact_email2').style.background='red';
			valide=false; } //end if
		else if(!isEmail(e)) {
			document.getElementById('erremail2').innerHTML="L'adresse email est invalide";
			document.getElementById('erremail2').style.display='block';
			document.getElementById('contact_email2').style.background='red';
			valide=false; }//end if
		else { document.getElementById('erremail2').style.display='none';
		document.getElementById('contact_email2').style.background='white'; }
		}//end testemail
	function test2() {
		valide=true;
		testnom2();
		testprenom2();
		testemail2();
		return valide;
		}//end test

	$(document).ready(function(){
		$(".hidden_contact2").click(function () { //parent
		$("#contact2").slideToggle("slow"); //enfant
		$("#contact2").css({"display":"flex"});
		$("#contact").css({"display":"none"});
		$('section[class^="ss_m_t"]:not(.ss_m_t1)').css({"display":"none"});//close sopus menu ALL
		$('section[class^="ss_cat_m_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_A"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_B"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_C"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_D"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="sss_cat_m_A_E"]').css({"display":"none"});//fermeture sous_menu1
		$('section[class^="cat_m_B"]').css({"display":"none"});//fermeture sous_menu2
		$('section[class^="cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="ss_cat_m_C"]').css({"display":"none"});//fermeture sous_menu3
		$('section[class^="cat_m_D"]').css({"display":"none"});//fermeture sous_menu4
		return false; });  }); //end function

//menu déroulant header
$(document).ready(function(){
		$("#arrow_down").click(function () { //parent$
		$("#menuDeroulant").slideToggle("slow"); //enfant
		//$("#menuDeroulant").css({"display":"block"});
		return false; });  });//end function

$(document).ready(function(){
		$("#menu_deroulant_friend").click(function () { //parent$
		$("#deroulant_friend").slideToggle("slow"); //enfant
		$("#deroulant_friend").css({"display":"block"});
		return false; });  });//end function