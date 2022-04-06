let basketBtn = document.getElementById('basket-link');
let basket = document.querySelector('.basket');
let deleteBtn = document.getElementById('deleteProduct');

basketBtn.addEventListener('mouseover', showBasket);

function showBasket(){
    basket.style.display = "block";
    this.removeEventListener('mouseover', showBasket);
    this.addEventListener('mouseout', hideBasket);
}

function hideBasket(){
    basket.style.display = "none";
    this.removeEventListener('mouseout', hideBasket);
    this.addEventListener('mouseover', showBasket);
}

deleteBtn.onclick = () => {
    let tbody = document.querySelector('tbody');
    deleteBtn.parentElement.parentElement.remove();
}