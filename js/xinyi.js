
// // 第二次底部轮播
// $(function(){
// 	var _speed = 10;
// 	var _hdlunb = $('.hdlunb');
// 	var _hdli1 =  $('.hdli1');
// 	var _hdli2 = $('.hdli2');
// 	_hdli2.html(_hdli1.html());
// 	function Marquee(){
// 		if (_hdlunb.scrollLeft()>=_hdli1.width())
// 			 _hdlunb.scrollLeft(0);
// 			else{
// 				_hdlunb.scrollLeft(_hdlunb.scrollLeft()+1);
// 			}
// 	}
// 	$(function(){
// 		// 两秒后调用
// 		var sliding = setInterval(Marquee,_speed)
// 		_hdlunb.hover(function(){
// 			//鼠标移动到div上停止
// 			clearInterval(sliding);
// 		},function(){
// 			//离开继续调用
// 			sliding=setInterval(Marquee,_speed);
// 		});
// 	});
// });




// //@ sourceURL=http://www.ourhearty.com/resources/modules/scroll.js
// 
// 
// 底部轮播
$(function(){
	var i = 0;
	setInterval(function xinyi(){
		i++;
		var lenth = $('ul li').length;
		if(i+19>lenth){
			$('.hdli1 ul').append($('.hdli1 ul').html())
			//一共？张图片，初始值i为0，当时间开始计时的时候，i每700毫秒加一次，
			//当i+5大于ul里li的长度，就再次复制一份图片在后边，就无限滚动了。
		}
		$('.hdli1 ul').animate({left:-300*i},1000)
	},2000)
});

