// document.oncontextmenu = function(){return false;}

let links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let goto = link.getAttribute('href');
        document.querySelector(goto).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

