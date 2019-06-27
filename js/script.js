$(document).ready(function(){
  $(".main-slider").owlCarousel({
        items:1,
        autoplay:true,
    	autoplayTimeout:4000,
    	autoplayHoverPause:true,
        merge:true,
        nav:true,
        navText: ["<img src='images/prev.svg' class='left'>","<img src='images/next.svg' class='right'>"],
        navClass: ['owl-prev','owl-next'],
        dots:false,
        loop: true
    });                
});

$(document).ready(function(){
  $(".mini-slider").owlCarousel({
	  	loop:true,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:4000,
    	autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    },
        navText: ["<img src='images/prev.svg' class='left'>","<img src='images/next.svg' class='right'>"],
        navClass: ['owl-prev','owl-next'],
        dots:false,
    });                
});

$(document).ready(function() {
	$('.gallery-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});