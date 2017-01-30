jQuery(document).ready(function($){
	//open interest point description
	$('.cd-single-point').children('a').on('click', function(){
		var selectedPoint = $(this).parent('li');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
		}
	});
	//close interest point description
	$('.cd-close-info').on('click', function(event){
		event.preventDefault();
		$(this).parents('.cd-single-point').eq(0).removeClass('is-open').addClass('visited');
	});
	
	$('#page1Button').on('click', function(event) {
		$('#page1').show();	
		$('#page2').hide();	
		$(this).addClass('active');
		$('#page2Button').removeClass('active');
	});
	$('#page2Button').on('click', function(event) {
		$('#page2').show();	
		$('#page1').hide();
		$(this).addClass('active');
		$('#page1Button').removeClass('active');
	});
});