let blocks = document.querySelectorAll('.item');
let items = document.querySelectorAll('.img');
let hover = document.getElementById('hover-item');

blocks.forEach((block)=>{
    items.forEach((item)=>{
        item.addEventListener('mouseover', ()=>{
            console.log('навелся')
            block.classList.add('dnone');
            hover.style.display = "block";
        });
    })
})

