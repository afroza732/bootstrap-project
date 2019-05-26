 new WOW().init();
 
 $(document).ready(function(){
				$(".owl-carousel").owlCarousel();
				 navigation : true
				});
				
/**
			 * Used to demonstrate Hover.css only. Not required when adding
			 * Hover.css to your own pages. Prevents a link from being
			 * navigated and gaining focus.
			 */
			var effects = document.querySelectorAll('.effects')[0];

			effects.addEventListener('click', function(e) {

				if (e.target.className.indexOf('hvr') > -1) {
					e.preventDefault();
					e.target.blur();

				}
			});

		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-11991680-4', 'ianlunn.github.io');
		  ga('send', 'pageview');
		      $(document).on('ready', function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 4
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });
	
	
	/*
   t, define, jQuery, setInterval, clearInterval */
				

     
                

          
      
            
           