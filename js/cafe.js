$(function(){

	$('#cateone').click(function(){
		$('#jies').css('display','block');
		$('#anli').css('display','none');
		$('#cateone a').css('color','#fff');
		$('#cateone').css('background-color','#FFBA01');
		$('#catetwo a').css('color','#555');
		$('#catetwo').css('background-color','#fff');
	});
	$('#catetwo').click(function(){
		$('#anli').css('display','block');
		$('#jies').css('display','none');
		$('#cateone a').css('color','#FFBA01');
		$('#cateone').css('background-color','transparent');
		$('#catetwo a').css('color','#fff');
		$('#catetwo').css('background-color','#FFBA01');
		
	});


});

