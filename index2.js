let date = new Date();
let deadline = new Date(date.getFullYear() + 1, getCookie('month'), getCookie('date'), 0, 0, 0);
let input = document.querySelector('input');

let id       = setInterval(setCountdown, 1000, deadline, 'p');

input.addEventListener('blur', function() {
	let userAnswer = this.value.split('-');
	let userDate = {
		year : userAnswer[0],
		month : userAnswer[1],
		date : userAnswer[2]
	};

	document.cookie = 'month=' + userDate.month;
	document.cookie = 'date=' + userDate.date;
});

if (input.value) {
    input.style.display = 'none';
}

function setCountdown(dateDeadline, selector) {
	let dateNow  = new Date(),
	    elem     = document.querySelector(selector);

	let diff     = Math.ceil((dateDeadline - dateNow) / 1000),
		seconds  = diff % 60,
		minute   = Math.floor(diff / 60) % 60,
		hours    = Math.floor(diff / (60 * 60)) % 24,
		
		target   = Math.floor(diff / (60 * 60 * 24)), //Всего дней
		days     = Math.floor(diff / (60 * 60 * 24) / target),
		month	 = Math.round(diff / (60 * 60 * 24) / 31);


	if (hours < 0 && minute < 0 && seconds < 0) {
		elem.innerHTML = `00:00:00`;
		clearInterval(intervalId);
	} 
	else elem.innerHTML = `Месяцев: ${month} Дней: ${days} <br> Время до конца: ${setZero(hours)}:${setZero(minute)}:${setZero(seconds)}`;

	function setZero(num) {
		if (num < 10) num = '0' + num;
		return num;
	}
}
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(name.replace(/([.$?*+\\\/{}|()\[\]^])/g, '\\$1') + '=(.*?)(?:;|$)'));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}