let popup = document.getElementById('mypopup');

document.getElementById('login').onclick = () => { popup.style.display = "block"; }
document.getElementById('close-window').onclick = () => { popup.style.display = "none"; }

window.onclick = (e) => { (event.target == popup) ? popup.style.display = "none" : ''; }