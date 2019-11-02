(function() {
	var videoTop = document.querySelector('.ams-video').getBoundingClientRect().top;
	console.log(videoTop);

	window.addEventListener('scroll', function() {

		if(pageYOffset > videoTop){
				document.querySelector('.ams-main').classList.add('scrolled');
		}else{
				document.querySelector('.ams-main').classList.remove('scrolled');

		}

	});
	
})();

