let basketBtn = document.getElementById('basket-link');
let basket = document.querySelector('.basket');
let deleteBtn = document.getElementById('deleteProduct');

basketBtn.addEventListener('mouseover', showBasket);

function showBasket(){
    basket.style.display = "block";
    basketBtn.removeEventListener('mouseover', showBasket);
    basket.addEventListener('mouseout', hideBasket);
}

function hideBasket(){
    basket.removeEventListener('mouseout', hideBasket);
    basket.addEventListener('mouseout', ()=>{
        basket.style.display = "none";
    });
    basketBtn.addEventListener('mouseover', showBasket);
}

deleteBtn.onclick= () => { deleteBtn.parentElement.parentElement.remove(); }