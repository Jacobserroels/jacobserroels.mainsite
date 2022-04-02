		var animaitonState = document.querySelector(':root');
//		antiquated code
//		const feelText = document.getElementById('feelText');
//		const formText = document.getElementById('formText');
//		const functionText = document.getElementById('functionText');
		var closeModalButton = document.querySelectorAll('[data-close-button]');
		var openModalClick = document.querySelectorAll('[data-modal-target]');
		var overlay = document.getElementById('overlay');
		
//		antiquated code
//		feelText.addEventListener('mouseenter', pauseAnimation);
//		formText.addEventListener('mouseenter', pauseAnimation);
//		functionText.addEventListener('mouseenter', pauseAnimation);
		
		openModalClick.forEach(item => {
			item.addEventListener('click', () =>{
				const modalName = document.querySelector(item.dataset.modalTarget);
				openModal(modalName);
			})
		})

		closeModalButton.forEach(button => {
			button.addEventListener('click', () =>{
				const modalName = button.closest('.modal');
				closeModal(modalName);
			})
		})
		

	//	document.onkeypress = removeActiveModalKeyPress;


//		unpauses rotation animation
		function pauseAnimation(){
			animaitonState.style.setProperty('--playState','paused');
		}
//		pauses rotation animation
		function unpauseAnimation(){
			animaitonState.style.setProperty('--playState','running');
		}
//		opens popup window
		function openModal(modalName){
			if (modalName == null) return;
			modalName.classList.add('active');
			overlay.classList.add('active');
			pauseAnimation();
		}
//		closes popup window
		function closeModal(modalName){
			if (modalName == null) return;
			modalName.classList.remove('active');
			overlay.classList.remove('active');
			unpauseAnimation();
		}
	//	function removeActiveModalKeyPress(hamburger){
	//		hamburger=document.getElementsByClassName('active');
	//		console.log(hamburger);
	//		closeModal(hamburger);
	//	}