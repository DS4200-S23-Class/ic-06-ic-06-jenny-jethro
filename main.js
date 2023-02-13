function changeLineColor() {

	// retrieve the line on the webpage
	let line= document.getElementById(blueLine);
	
	// change color of line if the button is clicked
	line.classList.add('red');
}

document.getElementById('makeLineRed')
			.addEventListener('click', changeLineColor);
 