const margins = document.querySelector('.margins');

/*
const addMargins = () => {
	margins.style.margin = '50px 0';
}

const quitMargins = () => {
	margins.style.margin = '0';
	// console.log('estoy fuera');
}

margins.addEventListener('mouseover', addMargins);

margins.addEventListener('mouseout', quitMargins);
*/

const addQuitMargins = (event) => {
	margins.style.margin = '50px 0';
	console.log(event);
	// if (event.isTrusted === true){
	// 	margins.style.margin = '50px 0';
	// } else {
	// 	margins.style.margin = '0';
	// }

}

margins.addEventListener( 'toogle', (event) => { addQuitMargins(event) })
