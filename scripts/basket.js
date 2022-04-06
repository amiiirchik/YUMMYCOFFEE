let basketBtn = document.getElementById('basket-link');
let basket = document.querySelector('.basket');


basketBtn.addEventListener('click', showBasket);

function showBasket(){
    basket.style.display = "block";
    this.removeEventListener('click', showBasket);
    this.addEventListener('click', hideBasket);
}

function hideBasket(){
    basket.style.display = "none";
    this.removeEventListener('click', hideBasket);
    this.addEventListener('click', showBasket);
}