let likeBtn = document.getElementById('like');
let buyBtn = document.getElementById('buy')
let prodName = document.getElementById('objName').textContent;
let clicked = 2, objFav = {}, objPurchase = {};

likeBtn.addEventListener('click', saveFav);
buyBtn.addEventListener('click', savePurchase)


function saveFav(){
    clicked += 1;
    likeBtn.classList.add('filter');

    // Динамичное значение
    let selectedOption = document.querySelector('.selected-black').children.item(1);

    // Продукт
    objFav = {
        'name' : prodName,
        'quantity' : 1,
        'price' : selectedOption.innerHTML
    }

    let jsonObj = JSON.stringify(objFav);
    localStorage.setItem('product', jsonObj);
    (clicked % 2 == 0) ? unSaveFav() : '';
}

function unSaveFav(){
    likeBtn.classList.remove('filter');

    localStorage.removeItem('product');
}

function savePurchase(){
    this.removeEventListener('click', savePurchase);
    // Динамичное значение
    let selectedOption = document.querySelector('.selected-black').children.item(1);

    // Продукт
    objPurchase = {
        'name' : prodName,
        'quantity' : 1,
        'price' : selectedOption.innerHTML
    }
}