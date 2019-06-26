$(document).ready(function(){
  $(".main-slider").owlCarousel({
        items:1,
        animateOut: 'slideOutDown',
    	animateIn: 'flipInX',
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