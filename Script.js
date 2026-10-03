const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');

if (menuButton && navigationLinks) {
	menuButton.addEventListener('click', () => {
		const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
		menuButton.setAttribute('aria-expanded', String(!isExpanded));
		menuButton.setAttribute('aria-label', isExpanded ? 'Abrir menu' : 'Fechar menu');
		navigationLinks.classList.toggle('is-open', !isExpanded);
	});

	navigationLinks.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			menuButton.setAttribute('aria-expanded', 'false');
			menuButton.setAttribute('aria-label', 'Abrir menu');
			navigationLinks.classList.remove('is-open');
		});
	});
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());