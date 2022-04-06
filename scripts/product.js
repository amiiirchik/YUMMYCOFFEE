document.getElementById('reviews_btn').addEventListener('click', gotoReviews);
document.getElementById('info_btn').addEventListener('click', gotoInfo);

// Ссылки
function gotoReviews(){
	document.getElementById('review-block').classList.remove('dnone');
	document.getElementById('prodInfo').classList.add('dnone');
	document.getElementById('reviews_btn').classList.add('selected');
	document.getElementById('info_btn').classList.remove('selected');
}

function gotoInfo(){
	document.getElementById('prodInfo').classList.remove('dnone');
	document.getElementById('review-block').classList.add('dnone');
	document.getElementById('info_btn').classList.add('selected');
	document.getElementById('reviews_btn').classList.remove('selected');
}

// Выбор цены
let firstPrice = document.querySelector('.first-option')
let secondPrice = document.querySelector('.second-option');

secondPrice.onclick = () => {
	secondPrice.style.color = "black";
	secondPrice.classList.add('selected-black');
	firstPrice.style.color = "grey";
	firstPrice.classList.remove('selected-black');
}

firstPrice.onclick = () => {
	secondPrice.style.color = "grey";
	secondPrice.classList.remove('selected-black');
	firstPrice.style.color = "black";
	firstPrice.classList.add('selected-black');
}