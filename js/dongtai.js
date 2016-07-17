$(function(){

	$('#new_act').click(function(){
		$('#iNews').css('display','block');
		$('#iNewstwo').css('display','none');
		$('#new_act').css('color','#fff');
		$('#new_act').css('background-color','#FFBA01');
		$('#new_news').css('color','#FFBA01');
		$('#new_news').css('background-color','transparent');
	});
	$('#new_news').click(function(){
		$('#iNewstwo').css('display','block');
		$('#iNews').css('display','none');
		$('#new_act').css('color','#FFBA01');
		$('#new_act').css('background-color','transparent');
		$('#new_news').css('color','#fff');
		$('#new_news').css('background-color','#FFBA01');
		
	});


});

