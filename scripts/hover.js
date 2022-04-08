let blocks = document.querySelectorAll('.item');      //Сами блоки, на которые наводишься
let items = document.querySelectorAll('.img');       //Картинки, которые являются триггером
let hover = document.getElementById('hover-item');  //Блок, которые появляется

for(let i = 0; i < blocks.length; i++){
    for(let i = 0; i < items.length; i++){
        console.log(hover.classList);
        items[i].addEventListener('click', ()=>{
            blocks[i].classList.add('dnone');
            hover.classList.add('opacity');
            hover.style.display = "flex";
            hover.onclick = () =>{
                hover.classList.add('opacity-rev');
                setTimeout(()=>{
                    hover.style.display = "none";
                    blocks[i].classList.remove('dnone');
                }, 500);
                hover.classList.remove('opacity'); 
            }
            hover.classList.remove('opacity-rev');
        });
    }

}
