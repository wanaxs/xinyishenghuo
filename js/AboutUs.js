$(function(){

	$('#zuix').click(function(){
		$('#zxhd').css('display','block');
		$('#yhhd').css('display','none');
		$('#zuix a').css('color','#fff');
		$('#zuix').css('background-color','#FFBA01');
		$('#youh a').css('color','#555');
		$('#youh').css('background-color','transparent');
	});
	$('#youh').click(function(){
		$('#yhhd').css('display','block');
		$('#zxhd').css('display','none');
		$('#zuix a').css('color','#555');
		$('#zuix').css('background-color','transparent');
		$('#youh a').css('color','#fff');
		$('#youh').css('background-color','#FFBA01');
		
	});


});

