let basketBtn = document.getElementById('basket-link');
let basket = document.querySelector('.basket');
let deleteBtn = document.getElementById('deleteProduct');

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

deleteBtn.onclick = () => {
    let tbody = document.querySelector('tbody');
    deleteBtn.parentElement.parentElement.remove();
}