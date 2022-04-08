let likeBtn = document.getElementById('like');
let buyBtn = document.getElementById('buy')
let prodName = document.getElementById('objName').textContent;
let clicked = 2, objFav = {}, objPurchase = {};
let deleteA = document.createElement('a');
deleteA.setAttribute('id', 'deleteProduct'); deleteA.setAttribute('href', '#');


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
    localStorage.setItem('favProduct', jsonObj);
    (clicked % 2 == 0) ? unSaveFav() : '';
}

function unSaveFav(){
    likeBtn.classList.remove('filter');
    localStorage.removeItem('favProduct');
}

function savePurchase(){
    this.removeEventListener('click', savePurchase);
    // Динамичное значение
    let selectedOption = document.querySelector('.selected-black').children.item(1);

    // Продукт
    objPurchase = {
        'name' : prodName,
        'quantity' : 1,
        'price' : selectedOption.innerHTML,
        'deleteBtn' : deleteA
    }

    console.log(deleteBtn);

    let jsonObj = JSON.stringify(objPurchase);
    localStorage.setItem('buyProduct', jsonObj);
    updateBasketTable(jsonObj);
}

function updateBasketTable(obj){
    let table = document.querySelector('table');
    let tr = document.createElement('tr');

    let product = JSON.parse(obj);
    

    let n = 0;
    for(let keys in product){
        let td = document.createElement('td');
        td.textContent = product[keys];
        n += 1;
        tr.appendChild(td);
        tr.appendChild('<a id="deleteProduct" href="#">Удалить</a>')
    }
    table.appendChild(tr);
    buyBtn.addEventListener('click', savePurchase);
}