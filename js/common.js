$(function(){
	$('.add-popup-one').click(function(){
		$('.off-main').addClass('off-main-class');
		$('.popup-one').addClass('active');
	});
});
$(function(){
	$('.add-popup-two').click(function(){
		$('.off-main').addClass('off-main-class');
		$('.popup-two').addClass('active');
	});
});
$(function(){
	$('.close-popup').click(function(){
		$('.off-main').removeClass('off-main-class');
		$('.popup-one').removeClass('active');
		$('.popup-two').removeClass('active');
	});
});
$(document).keydown(function(e) {
	if (e.keyCode === 27) {
		$('.off-main').removeClass('off-main-class');
		$('.popup-one').removeClass('active');
		$('.popup-two').removeClass('active');
	}
});