/***************************************************************************************************************
||||||||||||||||||||||||||||       MASTER SCRIPT FOR RICH      ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************

01. Prealoder
02. Sticky header
03. Fact counter
04. Scroll to top
05. Main menu
06. Revolution slider
07. Contact Form 
08. Select menu 
09. Tooltip
10. Language switcher
11. Price Ranger
12. Cart Touch Spin
13. Tabs Box
14. Image popup
15. Gallery masonary
16. Fancybox activator
17. Accrodion_box
18. wow animation
19. owlCarousel


****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/










(function($) {
	
	"use strict";


// Prealoder
function handlePreloader() {
	if($('.preloader').length){
		$('.preloader').delay(200).fadeOut(500);
	}
}

// stickyheader
function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
	      	$('.scroll-to-top').fadeIn(500);
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
	      	$('.scroll-to-top').fadeOut(500);
		}
	};
}
	
// Fact Counter
function factCounter() {
	if($('.fact-counter').length){
		$('.fact-counter .counter-column.animated').each(function() {
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		});
	}
}

// Scroll to top
function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1500);
            return false;
        });
    }
}


//====Main menu===
function mainmenu() {

    var navcollapse = $('.main-menu .navigation li');
        navcollapse.hover(function() {
            $(this).children('ul').stop(true, false, true).slideToggle(500);
        });
	//Submenu Dropdown Toggle
	if($('.main-menu .mobile-menu li.dropdown ul').length){
		$('.main-menu .mobile-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu .mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

}



// // revolution slider
// function revolutionSliderActiver () {
// 	if ($('.rev_slider_wrapper #slider1').length) {
// 		jQuery("#slider1").revolution({
// 			sliderType:"standard",
// 			sliderLayout:"auto",
// 			dottedOverlay:"yes",
// 			delay:5000,
// 			navigation: {
// 				arrows:{enable:true,
// 						left: {
//                         h_align: "left",
//                         v_align: "center",
//                         h_offset: 60,
//                         v_offset: 0
//                     },
//                     right: {
//                         h_align: "right",
//                         v_align: "center",
//                         h_offset: 60,
//                         v_offset: 0
//                     }

// 				} 
// 			}, 
//             gridwidth: [1200],
//             gridheight: [500],
//             lazyType: "none",
//             parallax: {
//                 type: "mouse",
//                 origo: "slidercenter",
//                 speed: 2000,
//                 levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
//             },
//             shadow: 0,
//             spinner: "off",
//             stopLoop: "off",
//             stopAfterLoops: -1,
//             stopAtSlide: -1,
//             shuffle: "off",
//             autoHeight: "off",
//             hideThumbsOnMobile: "off",
//             hideSliderAtLimit: 0,
//             hideCaptionAtLimit: 0,
//             hideAllCaptionAtLilmit: 0,
//             debugMode: false,
//             fallbacks: {
//                 simplifyAll: "off",
//                 nextSlideOnWindowFocus: "off",
//                 disableFocusListener: false,
//             }
// 		});
// 	};
// }



// select menu
function selectMenu () {
	if ($('.select-menu').length) {
		$('.select-menu').selectmenu();
	};
}

// Tooltip
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}

// Language switcher
function languageSwitcher() {

    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 150,
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }

        });
    };
}

// Price Ranger 
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}

// Cart Touch Spin
function cartTouchSpin () {
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
}

// Tabs Box
function tabbox() {
	if($('.tabs-box').length){
		
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
			target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
		
	}

}

// Image popup
function imgpopup() {
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
}

// Gallery masonary
function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}

// gallery fancybox activator 
function GalleryFancyboxActivator () {
  var galleryFcb = $('.fancybox');
  if(galleryFcb.length){
    galleryFcb.fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
      helpers : {
        media : {}
      }
    });
  }
}


// Accrodion_box 
function accrodion() {
    if ($('.accordion-box').length) {
	    $('.accordion-box .acc-btn').on('click', function() {
	        if ($(this).hasClass('active') !== true) {
	            $('.accordion-box .acc-btn').removeClass('active');
	        }

	        if ($(this).next('.acc-content').is(':visible')) {
	            $(this).removeClass('active');
	            $(this).next('.acc-content').slideUp(500);
	        } else {
	            $(this).addClass('active');
	            $('.accordion-box .acc-content').slideUp(500);
	            $(this).next('.acc-content').slideDown(500);
	        }
	    });
	}
}
	
// wow animation 
function wowanimation() {
    if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',     
			animateClass: 'animated', 
			offset:       0,          
			mobile:       true,       
			live:         true       
		  }
		);
		wow.init();
	}
}



// owlCarousel
function owlCarousel() {	
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
		    loop: true,
		    items: 1,
		    nav: true,
	        navText: [
	            '<i class="fa fa-angle-left"></i>',
	            '<i class="fa fa-angle-right"></i>'
	        ],
	        dots: false,
	        smartSpeed: 2000,
		    autoplay:true
		})
	}
	if ($('.testimonial-carousel2').length) {
		$('.testimonial-carousel2').owlCarousel({
		    loop: true,
		    items: 1,
		    nav: false,
	        dots: true,
	        smartSpeed: 2000,
		    autoplay:true
		})
	}

	if ($('.brand-carousel').length) {
		$('.brand-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
	        navText: [
	            '<i class="fa fa-angle-left"></i>',
	            '<i class="fa fa-angle-right"></i>'
	        ],
	        dots: false,
		    autoplay:true,
		    responsive: {
		        0:{
		            items:1,
		            loop:true,
					dots:false
		        },
		        480:{
					items:2,
					loop:true,
					dots:false
				},
		        768:{
		            items:3,
		            loop:true,
					dots:false
		        },
		        1000:{
		            items:3,
		            loop:true
		        }
		    }
		});
	}
	if ($('.address-carousel').length) {
		$('.address-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
	        navText: [
	            '<i class="fa fa-angle-left"></i>',
	            '<i class="fa fa-angle-right"></i>'
	        ],
	        dots: false,
		    autoplay:true,
		    smartSpeed:2000,
		    responsive: {
		        0:{
		            items:1,
		            loop:true,
					dots:false
		        },
		        480:{
					items:2,
					loop:true,
					dots:false
				},
		        768:{
		            items:2,
		            loop:true,
					dots:false
		        },
		        1000:{
		            items:2,
		            loop:true
		        }
		    }
		});
	}
	if ($('.why-chosse-carousel').length) {
		$('.why-chosse-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: false,
		    smartSpeed: 2000,
	        dots: true,
		    autoplay:true,
		    responsive: {
		        0:{
		            items:1,
		            loop:true,
					dots:false
		        },
		        480:{
					items:1,
					loop:true,
					dots:false
				},
		        600:{
		            items:2,
		            loop:true,
					dots:false
		        },
		        1000:{
		            items:2,
		            loop:true
		        }
		    }
		});
	}
	if ($('.sample').length) {
		$('.sample').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
	        navText: [
	            '<i class="fa fa-angle-left"></i>',
	            '<i class="fa fa-angle-right"></i>'
	        ],
	        dots: false,
		    autoplay:true,
		    responsive: {
		        0:{
		            items:1,
		            loop:true,
					dots:false
		        },
		        480:{
					items:1,
					loop:true,
					dots:false
				},
		        768:{
		            items:2,
		            loop:true,
					dots:false
		        },
		        1000:{
		            items:3,
		            loop:true
		        }
		    }
		});
	}
}

	






// instance of fuction while Document ready event	
jQuery(document).on('ready', function () {
	(function ($) {
		scrollToTop();
		mainmenu();
		revolutionSliderActiver();		
		GalleryFancyboxActivator();
		selectMenu();		
		tooltip();		
		languageSwitcher();		
		priceFilter();
		cartTouchSpin();
		tabbox();
		imgpopup();
		galleryMasonaryLayout();
		accrodion();
		wowanimation();
		owlCarousel();
		
	})(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function () {
	(function ($) {
		handlePreloader();
	})(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {	
	(function ($) {
		stickyHeader();
		factCounter();
	})(jQuery);
});











})(window.jQuery);