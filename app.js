$(document).on('ready', function(){
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if(scroll < 100){
			$('.navbar-default').removeClass('scrolling');
			$('.nav-items').removeClass('scrolling-text');
			$('.logo').attr("src","http://wideopentech.com/themes/wot-2013-gm/_/img/wot-logo-whitex2.svg")
		}else{
			$('.navbar-default').addClass('scrolling');
			$('.nav-items').addClass('scrolling-text');
			$('.logo').attr("src","http://wideopentech.com/themes/wot-2013-gm/_/img/wot-logo-dark.svg")
		}
	});
});