(function($){
	var menu   	= $('#menu'),
		header 	= $('#header'),
		summary = $('#summary');
		
	
	function init(){
		loadHTML();
	}

	function loadHTML(){
		header.load('/app/views/header.html');
		//summary.load('/app/views/summary.html');
		menu.load('/app/views/menu.html', menuloaded);
	}	

	function menuloaded(){
		var hamburger    = $('.hamburger'),
			hamburgerAnc = hamburger.find('a'),
			navLinks     = menu.find('ul').find('a');

		function menuInit(){
			navclick();
			internalLinks();
		}
		function navclick(){
			hamburgerAnc.on('touch click', function(e){
				e.preventDefault();
				menu.toggleClass('expand');
			})		
		}

		function internalLinks(){
			if(navLinks.length){
				navLinks.on('click touch', function(e){
					e.preventDefault();
					var linkto = this.getAttribute('data-href');
					console.log('linkto', linkto);
					var dest = $('#'+linkto).offset().top;
					$('html,body').animate({scrollTop: dest}, 1000,'swing');
				})
			}
		}


		menuInit();
	}



	init();
})(jQuery)