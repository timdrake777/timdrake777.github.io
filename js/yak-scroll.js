var isMobile = false;

$(document).ready( function() {

	if( ($('.container').width() <= 375) || ($('.container').width() <= 414) ) {
		isMobile = true;
	}

	if(isMobile){
		$('.project-points-block-2').hide();
		$('.project-points-block-3').hide();

		$('.plus-btn-1').click(function (e) {
			$('.project-points-block-1').slideToggle();
		})

		$('.plus-btn-2').click(function (e) {
			$('.project-points-block-2').slideToggle();
		})

		$('.plus-btn-3').click(function (e) {
			$('.project-points-block-3').slideToggle();
		})
	}
})

