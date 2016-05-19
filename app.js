$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	while(scroll > 100){
		$('.navbar-default').css('background-color', 'white').css('color', 'black');
	}
});