
// **** MARGENES ************************************************
const margins = document.querySelector('.margins');

margins.addEventListener('click', () => {
	margins.classList.toggle('margins50');
});


// const addMargins = () => {
// 	margins.style.margin = '50px 0';
// }

// const quitMargins = () => {
// 	margins.style.margin = '0';
// }

// margins.addEventListener('mouseover', addMargins);
// margins.addEventListener('mouseout', quitMargins);






// **** DARK MODE **************************************************
const btnDarkMode = document.querySelector('.dark-mode');

btnDarkMode.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});