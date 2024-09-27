// Добавление анимации при скролле
window.addEventListener('scroll', function () {
	let elements = document.querySelectorAll('.service-item, .fade-in');
	let windowHeight = window.innerHeight;

	elements.forEach(function (element) {
		let elementTop = element.getBoundingClientRect().top;

		if (elementTop < windowHeight - 100) {
			element.classList.add('visible');
		}
	});
});
