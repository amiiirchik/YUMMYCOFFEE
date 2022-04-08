// document.oncontextmenu = function(){return false;}

let links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

let date = new Date('Apr 12 2022 00:00:00');
function counter(){
    let currentDate = new Date();
    let diff = date - currentDate;

    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hrs = Math.floor(diff / 1000 / 60 / 60) % 24;
    let min = Math.floor(diff / 1000 / 60) % 60;
    let sec = Math.floor(diff / 1000) % 60;

    if(diff > 0){
        document.getElementById('d').innerHTML = days + ' дн. ';
        document.getElementById('h').innerHTML = hrs + ':';
        if(Number(hrs) < 10) document.getElementById('h').innerHTML = '0' + hrs + ':';
        if(Number(hrs) === 0) document.getElementById('h').innerHTML = '00' + hrs;
        document.getElementById('m').innerHTML = min + ':';
        if(Number(min) < 10) document.getElementById('m').innerHTML = '0' + min + ':';
        document.getElementById('s').innerHTML = sec;
        if(Number(sec) < 10) document.getElementById('s').innerHTML = '0' + sec;
    }

    else document.getElementById('sale').textContent = 'Акция завершена';
}

counter();
setInterval(counter, 1000);