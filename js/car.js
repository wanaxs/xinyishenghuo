$(function(){
	var x = 0;
	$(window).scroll(function(){
		//scrollTop：卷轴
		if($('body').scrollTop()>900&&$('body').scrollTop()<1500){
			var distance = 300-(x+=10);
			if(distance<50){
				return false;
			}else{
				$('#car').animate({
					right:distance+'px'
				},'fast')
			}
		}
	})
});