(function() {

  var videoTop = document.querySelector('.header').getBoundingClientRect().height + document.querySelector('.ams-content__header').getBoundingClientRect().height;
	// console.log('videoTop= ' + videoTop);
	// console.log('pageYOffset= ' + pageYOffset );
	var $elem = $('.ams-left');
	var elemWidth = $elem.width();

	window.addEventListener('scroll', function() {
		// console.log(this);
		var scrolledNum = $(window).scrollTop()+$(window).height(),
				docHeight = $(document).height();

		// if(scrolledNum >= docHeight){
		// 	console.log('ура! конец страницы!');
		// 	document.querySelector('.ams-main__content-wrapper').classList.add('aligned-end');
		// 	document.querySelector('.ams-main').classList.remove('scrolled');
		// }else{
		// 	document.querySelector('.ams-main__content-wrapper').classList.remove('aligned-end');
		// }
		console.log('pageYOffset= ' + pageYOffset );
		console.log('videoTop= ' + videoTop);
		
		if(pageYOffset > videoTop /*&& scrolledNum < docHeight*/){
			if(screen.width >= 992){
				document.querySelector('.ams-main').classList.add('scrolled');
				$elem.css('width', elemWidth  + 'px');		
			}
		}else{
			if(screen.width >= 992){
				$elem.removeAttr('style');
				document.querySelector('.ams-main').classList.remove('scrolled');
			
			}

		}


	});
	

	$('.to-comment').click(function(e){
		if(screen.width <= 992){
			e.preventDefault();
			var sectionCoord = $('.comments-container').offset().top - 30;
			
			$('html, body').animate({scrollTop: sectionCoord}, 800);
			
		}
	});

	$(document).ready(function() {
		$.magnificPopup.open({
			items: {
				src: $('#ams-socials-popup')
			},
			type: 'inline'

			
			}, 0);
	});
	
})();

