(function() {

  	var videoTop = document.querySelector('.header').getBoundingClientRect().height + document.querySelector('.ams-content__header').getBoundingClientRect().height;
	var $elem = $('.ams-left');
	var elemWidth = $('.ams-main__content-wrapper').width() / 100 * 66.66667 - 30;
	var yOffset;

	window.onresize = function() {
		if(getScreenWidth() == true && getScrollCondition(yOffset) == true){
			$elem.css('width',  $('.ams-main__content-wrapper').width() / 100 * 66.66667 - 30 + 'px');
		}
		if(getScreenWidth() == false){
			document.querySelector('.ams-main').classList.remove('scrolled');
			$elem.removeAttr('style');
		}
	}

	window.addEventListener('scroll', function() {
		var scrolledNum = $(window).scrollTop()+$(window).height(),
				docHeight = $(document).height();

		yOffset = pageYOffset;
		
		if(getScrollCondition(yOffset) == true){
			if(getScreenWidth() == true){

				document.querySelector('.ams-main').classList.add('scrolled');
				$elem.css('width',  $('.ams-main__content-wrapper').width() / 100 * 66.66667 - 30  + 'px');		
			}
		}else{
			if(getScreenWidth() == true){
				$elem.removeAttr('style');
				document.querySelector('.ams-main').classList.remove('scrolled');
			
			}

		}


	});
	
	function getScreenWidth(){
		var condition;
		screen.width >= 992 ? condition = true : condition = false;

		return condition;
	}

	function getScrollCondition(yOffset){
		var scrollCond;
		yOffset > videoTop ? scrollCond = true : scrollCond = false;
		return scrollCond;
	}

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

