//la function qui va recupérer les infos de la BDD
function recup_msg()
{
	$.post('recup_msg.php',function(data){
		$('.chat .message').html(data);
	});
}

// setInterval(recup_msg,500);
recup_msg();
//fonction qui va envoyer les donées vers la BDD
function envoi_msg()
{
	$('.chat .entree').keyup(function(e){
		var messages = $('.chat .entree').val();
		messages = $.trim(messages);
		
		if(messages !=="" && e.keyCode === 13 && e.shiftKey === false)
			{					
				$.post('envoi_msg.php',{messages:messages},function(){
					recup_msg();
					$('.chat .entree').val('');
				});
				
			}
	});
}
envoi_msg();
