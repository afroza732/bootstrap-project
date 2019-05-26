 /*================ Back to top ==================*/
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500 ) {
			$('#bck_to_top').fadeIn();
                } else {
					$('#bck_to_top').fadeOut();
                }
			});
                // Animate the scroll to top
			$('#bck_to_top').click(function(){
				$("html,body").animate({
					scrollTop:0}, 600);
            });
