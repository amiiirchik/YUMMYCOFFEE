let popup = document.getElementById('mypopup');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');


if(localStorage.getItem('email')){
	document.getElementById('profileSpan').innerHTML = localStorage.getItem('email');
}
// Анимация и скрытие блока
+function(){
	document.getElementById('login').onclick = () => {
		if(localStorage.getItem('email') == null){
			popup.style.display = "block"; 
		}
		else alert('Вы уже вошли в аккаунт.');
	}

	document.getElementById('close-window').onclick = () => {	
		hidePopup();
	}
	window.onclick = (e) => {
		(e.target == popup)?
		hidePopup()
		:'';
	}
	window.onkeydown = (e) => {
		(e.keyCode == 27)?
		hidePopup()
		:'';
	}

	document.getElementById('popup-btn').addEventListener('click', ()=>{
		localStorage.setItem('email', emailInput.value);
		localStorage.setItem('password', passwordInput.value);
		alert('Вход прошел успешно');
		hidePopup();
		if(localStorage.getItem('email') != null || localStorage.getItem('email') != ''){
			document.getElementById('profileSpan').innerHTML = localStorage.getItem('email');
		}
	})
}(); 


function hidePopup(){
	document.querySelector('.popup-content').classList.add('closeAnimation');
	setTimeout(()=>{
		popup.style.display = "none";
		document.querySelector('.popup-content').classList.remove('closeAnimation');
	}, 1000);
}
