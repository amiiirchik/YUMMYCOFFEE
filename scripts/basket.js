let basketBtn = document.getElementById('basket-link');
let basket = document.querySelector('.basket');
let deleteBtn = document.getElementById('deleteProduct');

basketBtn.addEventListener('click', showBasket);

function showBasket(){
    basket.style.display = "block";
    basketBtn.removeEventListener('click', showBasket);
    basketBtn.addEventListener('click', hideBasket);
}

function hideBasket(){
    basket.removeEventListener('click', hideBasket);
    basket.style.display = "none";
    basketBtn.addEventListener('click', showBasket);
}

deleteBtn.onclick= () => { deleteBtn.parentElement.parentElement.remove(); }