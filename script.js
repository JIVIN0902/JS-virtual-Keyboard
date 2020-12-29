const keys = document.querySelectorAll('.keyboard button');
const answer = document.querySelector('.answer');

keys.forEach(key => key.addEventListener('click', type));

function type(e) {
	e.preventDefault();
	let value = this.innerText;
	let caps = document.querySelector('.caps')
	if (value === 'DEL') {
		let t = [...answer.innerText]
		let n = []
		for (let i =0; i < t.length - 1; i++) {
			n.push(t[i]);
		}
		answer.innerText = n.join('');
	}

	else if (value === 'SPACE') {
		answer.textContent += ' ';
	}
	else if (value === 'CAPS-LOCK') {
		if (!this.classList.contains('caps')) {
			this.style.backgroundColor = 'lightblue'
			this.classList.add('caps')
		}
		else {
			this.classList.remove('caps')
			this.style.backgroundColor = '#fff0f5';
		}
	}
	else if (!caps) {answer.textContent += this.innerText.toLowerCase()}
	else {answer.textContent += this.innerText};
}