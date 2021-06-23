$.fn.toggleAttrVal = function(attr, val1, val2) {
    var test = $(this).attr(attr);
    if ( test === val1) {
      $(this).attr(attr, val2);
      return this;
    }
    if ( test === val2) {
      $(this).attr(attr, val1);
      return this;
    }
    // default to val1 if neither
    $(this).attr(attr, val1);
    return this;
 };

var isMobile = false;

$(document).ready( function() {

	if( ($('.container').width() <= 375) || ($('.container').width() <= 414) ) {
		isMobile = true;
	}

	if(isMobile){
		$('.project-points-block-2').hide();
		$('.project-points-block-3').hide();
		$('.icon rect:nth-child(1)').attr('transform', 'rotate(0 4.79993 12)');

		$('.btn-section-1').on("click",(function (e) {
			$('.icon rect:nth-child(1)').toggleAttrVal('transform', 'rotate(-90 4.79993 12)', 'rotate(0 4.79993 12)');
			$('.project-points-block-1').slideToggle();  
		}));
		

		$('.btn-section-2').click(function (e) {
			$('.icon-2 rect:nth-child(1)').toggleAttrVal('transform', 'rotate(0 4.79993 12)', 'rotate(-90 4.79993 12)');
			$('.project-points-block-2').slideToggle();
		})

		$('.btn-section-3').click(function (e) {
			$('.icon-3 rect:nth-child(1)').toggleAttrVal('transform', 'rotate(0 4.79993 12)', 'rotate(-90 4.79993 12)');
			$('.project-points-block-3').slideToggle();
		})
	}
})

