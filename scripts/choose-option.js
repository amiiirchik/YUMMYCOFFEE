let secondOptions = document.querySelectorAll('.second-option');
let firstOptions = document.querySelectorAll('.first-option');

firstOptions.forEach(elem_f => {
    secondOptions.forEach(elem_s => {
        elem_s.addEventListener('click', ()=>{
            elem_s.style.color = "black";
            elem_f.style.color = "grey";
        });
        elem_f.addEventListener('click', ()=>{
            elem_s.style.color = "grey";
            elem_f.style.color = "black";
        })
    })
})