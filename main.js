$(document).ready(function () {

	$('.menu-toggler').on('click', function(){

		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');

	});

	$('.top-nav .nav-link').on('click', function(){

		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');

	});

	$('nav a[href*="#"]').on('click', function (){
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100

		}, 2000);
	}); 

	$('#up').on('click', function(){

		$('html, body').animate({
			scrollTop: 0
		}, 2000);

	});

	AOS.init({
		easing: 'ease',
		duration: 1800,
		once:true
	});

	var IconWhatsapp = document.querySelector('#icon-whatsapp');
	var formulariowtsp = document.getElementById('formulariowtsp');
	var closemodal = document.querySelector('.closemodal');
	var sendbttn = document.querySelector('#sendbttn');


	// IconWhatsapp.addEventListener('click' , function(){
	// 	formulariowtsp.classList.toggle('entrarysalir')
	// })

	// closemodal.addEventListener('click' , function(){
	// 	formulariowtsp.classList.remove('entrarysalir')
	// })

	sendbttn.addEventListener('click' , EnviarMensaje)

	function EnviarMensaje(){


		let name = document.querySelector('#name').value;
		let email = document.querySelector('#email').value;
		let service = document.querySelector('#service').value;
		let subject = document.querySelector('#subject').value;
		
		let url = "https://api.whatsapp.com/send?phone=5215581853675&text=Nombre: %0A" + name + "%0A%0AEmail: %0A" + email + "%0A%0AServicio: %0A" + service + "%0A%0AAsunto: %0A" + subject + "%0A";
		window.open(url);

	}

});