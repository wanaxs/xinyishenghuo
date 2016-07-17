$(function(){

	$('#zixun').click(function(){
		$('#zxmain').css('display','block');
		$('#xy').css('display','none');
		$('#gsimg').css('display','none');
		$('#zixun a').css('color','#fff');
		$('#zixun').css('background-color','#FFBA01');
		$('#xinyi a').css('color','#555');
		$('#xinyi').css('background-color','#fff');
		$('#gongsi a').css('color','#555');
		$('#gongsi').css('background-color','#fff');
	});
	$('#xinyi').click(function(){
		$('#zxmain').css('display','none');
		$('#gsimg').css('display','none');
		$('#xy').css('display','block');
		$('#xinyi a').css('color','#fff');
		$('#xinyi').css('background-color','#FFBA01');
		$('#zixun a').css('color','#555');
		$('#zixun').css('background-color','#fff');
		$('#gongsi').css('color','#555');
		$('#gongsi').css('background-color','#fff');
		
	});
	$('#gongsi').click(function(){
		$('#xy').css('display','none');
		$('#zxmain').css('display','none');
		$('#gsimg').css('display','block');
		
		$('#gongsi a').css('color','#fff');
		$('#gongsi').css('background-color','#FFBA01');
		$('#zixun a').css('color','#555');
		$('#zixun').css('background-color','#fff');
		$('#xinyi a').css('color','#555');
		$('#xinyi').css('background-color','#fff');
		
	});


});
