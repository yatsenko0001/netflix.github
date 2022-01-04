	function toggleVideo() {
	     		const trailer = document.querySelector('.trailer');
	     		const video = document.querySelector('.video');
	     		trailer.classList.toogle('active');
	     		video.currentTime = 0;
	     		video.pause();
	     	}