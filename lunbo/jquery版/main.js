$(function() {
	var i = 0,
		timer = null;
	var $next = $(".slider-ctrl-next");
	var $prev = $(".slider-ctrl-prev");	
	var $bannerBox = $(".css_box");
	var wrapW = $bannerBox.width();
	var $slider_box = $(".slider-main");
	var $dian_box = $(".dian");
	var imgLen = $(".slider-main-img").length;
	for (var j = 0;j < imgLen;j++) {
		var $li=$("<li></li>");  
		$dian_box.append($li);
	}
	$(".dian li").eq(0).addClass("active");
	var firstimg= $(".slider-main-img").eq(0).clone();
	$slider_box.append(firstimg).css('width',wrapW * $(".slider-main-img").length);
	var imgLenNew = $(".slider-main-img").length;
	var img = new Image();
	img.src = "../../img/a1.jpg";
	img.onload = function() {
		var wrapH = parseInt(wrapW*img.height/img.width);
		$bannerBox.css("height",wrapH);
		$(".slider-main-img,.slider-main-img a img").css({"height":wrapH,"width":wrapW});
	}
	play();
	$next.on('click',function() {
		i++;
	   	if (i==imgLenNew) {	   	
	    	i=1; //这里不是i=0
	    	$slider_box.css('left',0);//保证无缝轮播，设置left值
	   	};
   		$('.slider-main').stop().animate({left:-i*wrapW},500);
   		if (i==imgLen) {  //设置小圆点指示
    		$('.dian li').eq(0).addClass('active').siblings().removeClass('active');
	   	}else{
	    	$('.dian li').eq(i).addClass('active').siblings().removeClass('active');
	   	}    
	})
	$prev.on('click',function(){
		i--;
   		if (i==-1) {
    		i=$('.slider-main-img').length-2;
    		$('.islider-main').css({left:-($('.slider-main-img').length-1)*wrapW});
   		}
   		$('.slider-main').stop().animate({left:-i*wrapW},500);
   		$('.dian li').eq(i).addClass('active').siblings().removeClass('active');
	})
	var hasTouch = 'ontouchstart' in window,
		startEvent = hasTouch ? 'touchstart' : 'mousedown',
		moveEvent = hasTouch ? 'touchmove' : 'mousemove',
		endEvent = hasTouch ? 'touchend' : 'mouseup',
		cancelEvent = hasTouch ? 'touchcancel' : 'mouseup';
	$bannerBox.on({
		"mousemove":function(){
			if(isPC()){
				clearInterval(timer);
				$('.ctrl').fadeIn();			
			}else{
				return;
			}			
		},
		"mouseleave":function() {
			if(isPC()){
				$('.ctrl').fadeOut();
				play();
			}else{
				return;
			}				
		}
	})
	$(".dian li").on("click",function() {
		clearInterval(timer);
		i=$(this).index();
   		$('.slider-main').stop().animate({left:-i*wrapW},250,function(){
   			if(!isPC()){
   				play();
   			}
   		});
   		$('.dian li').eq(i).addClass('active').siblings().removeClass('active');
	})
	function play(){
		timer=setInterval(function(){
			$next.trigger('click')
		},2000);
	}	
})
